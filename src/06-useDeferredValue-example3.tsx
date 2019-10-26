import React, {
  useState,
  useDeferredValue,
  Suspense,
  useTransition
} from "react";
import { loadData } from "./data";

export const Example06 = () => {
  const [text, setText] = useState("");
  const [dataId, setDataId] = useState(0);
  const [startTransition] = useTransition({ timeoutMs: 10000 });

  const deferredDataId = useDeferredValue(dataId, { timeoutMs: 10000 });

  console.log(dataId, deferredDataId)

  return (
    <>
      <h1>06 Example of useDeferredValue and useTransiton</h1>
      <p>
        <input
          value={text}
          onChange={e => {
            const newText = e.currentTarget.value;
            setText(newText);
            startTransition(() => {
              setDataId(newText.length);
            });
          }}
        />
      </p>
      <Suspense fallback={<p>Loading...</p>}>
        <p>データID: {dataId}</p>
        <LoadedContents dataId={deferredDataId} />
      </Suspense>
    </>
  );
};

const LoadedContents: React.FC<{ dataId: number }> = ({ dataId }) => {
  const data = getData(dataId);
  return <p>{data}</p>;
};

let loadedData: string[] = [];
// 取得したデータを返す関数
// （まだ取得していないときは取得しつつPromiseを投げる
const getData = (dataId: number) => {
  if (loadedData[dataId]) {
    // 取得済みなので返す
    return loadedData[dataId];
  } else {
    throw loadData(dataId).then(data => {
      loadedData[dataId] = data;
    });
  }
};
