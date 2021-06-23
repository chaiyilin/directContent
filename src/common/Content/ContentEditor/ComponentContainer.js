import { Children, isValidElement, cloneElement } from "react";
import { useRecoilState } from "recoil";
import state from "../state";

const ComponentContainer = ({ children }) => {
  const [content] = useRecoilState(state);
  const childrenWithProps = Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (isValidElement(child)) {
      return cloneElement(child, { content });
    }
    return child;
  });
  return childrenWithProps;
};

export default ComponentContainer;
