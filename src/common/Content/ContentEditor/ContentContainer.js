import { Children, isValidElement, cloneElement } from "react";
import { useRecoilState } from "recoil";
import { Formik, Form } from "formik";
import state from "./state";

const ContentContainer = ({ children }) => {
  const [content, setContent] = useRecoilState(state);
  const childrenWithProps = Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (isValidElement(child)) {
      return cloneElement(child, { content, setContent });
    }
    return child;
  });

  return (
    <Formik initialValues={{}}>
      <Form>{childrenWithProps}</Form>
    </Formik>
  );
};

export default ContentContainer;
