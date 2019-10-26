import React, { useState, useDeferredValue, memo } from "react";

export const Example05 = () => {
  const [text, setText] = useState("");

  const deferredText = useDeferredValue(text, { timeoutMs: 10000 });

  console.log(text, deferredText);

  return (
    <>
      <h1>05 Example of useDeferredValue 2</h1>
      <p>
        <input value={text} onChange={e => setText(e.currentTarget.value)} />
      </p>
      <Show10000Times text={deferredText} />
    </>
  );
};

const Show10000Times: React.FC<{
  text: string;
}> = memo(({ text }) => (
  <p>
    {Array.from({ length: 100 }).map((_, i) => (
      <Show100Times key={i} text={text} />
    ))}
  </p>
));

const Show100Times: React.FC<{
  text: string;
}> = ({ text }) => (
  <>
    {Array.from({ length: 100 }).map((_, i) => (
      <span key={i}>{text}</span>
    ))}
  </>
);
