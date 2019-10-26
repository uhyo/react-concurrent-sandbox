import React from "react";
import { Example01 } from "./01-Suspense-example";
import { Example02 } from "./02-useTransition-example";
import { Example03 } from "./03-useTransition-example2";
import { Example04 } from "./04-useDeferredValue-example";
import { Example05 } from "./05-useDeferredValue-example2";
import { Example06 } from "./06-useDeferredValue-example3";

export const Root = () => {
  return (
    <div>
      <Example01 />
      <hr />
      <Example02 />
      <hr />
      <Example03 />
      <hr />
      <Example04 />
      <hr />
      <Example05 />
      <hr />
      <Example06 />
    </div>
  );
};
