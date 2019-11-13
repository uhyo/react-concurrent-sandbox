import {
  Suspense,
  useState,
  useTransition,
  SetStateAction,
  FC,
  useDeferredValue
} from "react";
import React from "react";

export const useAnimatedState = (defaultState: boolean, duration: number) => {
  const [state, setState] = useState(defaultState);
  const [timer, setTimer] = useState<Timer | undefined>();
  const [startTransition, isPending] = useTransition({
    timeoutMs: 2 * duration
  });
  const setState2 = (a: SetStateAction<boolean>) => {
    if (!state) {
      setState(a);
    } else {
      startTransition(() => {
        setState(a);
        setTimer(new Timer(duration));
      });
    }
  };

  const deferredState = useDeferredValue(state, {
    timeoutMs: 2 * duration
  });
  const animationState = isPending ? false : deferredState;

  const timerElement = (
    <Suspense fallback={null}>
      <Waiter timer={timer} />
    </Suspense>
  );

  return [state, animationState, setState2, timerElement] as const;
};

class Timer {
  private readonly p: Promise<void>;
  private resolved = false;
  constructor(duration: number) {
    this.p = new Promise(resolve => {
      setTimeout(resolve, duration);
    }).then(() => {
      this.resolved = true;
    });
  }
  wait() {
    if (!this.resolved) {
      throw this.p;
    }
  }
}

const Waiter: FC<{ timer?: Timer }> = ({ timer }) => {
  timer?.wait();
  return null;
};
