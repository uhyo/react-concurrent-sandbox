import { FC, useState } from "react";
import React from "react";
import { Container, Content } from "./common";
import { useAnimatedState } from "./useAnimation";

export const Animation01: FC = () => {
  const [state, setState] = useState(false);
  const toggle = () => setState(s => !s);
  return (
    <section>
      <h1>Animation01</h1>
      <Container onClick={toggle}>
        <Content state={state} />
      </Container>
    </section>
  );
};

export const Animation02: FC = () => {
  const [state, setState] = useState(false);
  const toggle = () => setState(s => !s);
  return (
    <section>
      <h1>Animation02</h1>
      <Container onClick={toggle}>{state ? <Content state /> : null}</Container>
    </section>
  );
};

export const Animation03: FC = () => {
  const [state, animationState, setState, timer] = useAnimatedState(false, 200);
  const toggle = () => setState(s => !s);

  return (
    <section>
      <h1>Animation03</h1>
      <Container onClick={toggle}>
        {state ? <Content state={animationState} /> : null}
      </Container>
      {timer}
    </section>
  );
};
