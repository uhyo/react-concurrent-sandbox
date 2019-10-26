import React, { useState, Suspense, useTransition } from "react";
import { loadData } from "./data";

export const Example03 = () => {
  const [showChild, setShowChild] = useState(false);
  // ここでuseTransitionを使用
  const [startTransition, isPending] = useTransition({
    timeoutMs: 10000 // タイムアウトを10秒に設定
  });

  return (
    <>
      <h1>03 Example of useTransition 2</h1>
      <Suspense fallback={<p>loading...</p>}>
        {showChild ? (
          <AdditionalContents />
        ) : (
          <button
            // ↓ この行を追加した
            disabled={isPending}
            onClick={() => {
              startTransition(() => {
                setShowChild(true);
              });
            }}
          >
            追加コンテンツを表示
          </button>
        )}
      </Suspense>
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
