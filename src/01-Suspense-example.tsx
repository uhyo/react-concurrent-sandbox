import React, { useState, Suspense } from "react";
import { loadData } from "./data";

export const Example01 = () => {
  const [showChild, setShowChild] = useState(false);

  return (
    <>
      <h1>01 Example of Suspense</h1>
      {showChild ? (
        <Suspense fallback={<p>loading...</p>}>
          <AdditionalContents />
        </Suspense>
      ) : (
        <button onClick={() => setShowChild(true)}>追加コンテンツを表示</button>
      )}
    </>
  );
};

const AdditionalContents = () => {
  // データをロードしてそのデータを表示
  const data = getData();
  return <p>{data}</p>;
};

let loadedData: string | null = null;
// 取得したデータを返す関数
// （まだ取得していないときは取得しつつPromiseを投げる
const getData = () => {
  if (loadedData) {
    // 取得済みなので返す
    return loadedData;
  } else {
    throw loadData(0).then(data => {
      loadedData = data;
    });
  }
};
