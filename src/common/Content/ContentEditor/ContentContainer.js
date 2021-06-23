import { Children, isValidElement, cloneElement } from "react";
import { useRecoilState } from "recoil";
import { Form, Button } from "antd";
import state from "../state";

const ContentContainer = ({ children }) => {
  const [content, setContent] = useRecoilState(state);
  const childrenWithProps = Children.map(children, (child) => {
    // checking isValidElement is the safe way and avoids a typescript error too
    if (isValidElement(child)) {
      return cloneElement(child, { content, setContent });
    }
    return child;
  });

  const onFinish = (values) => {
    console.log("Received values from form: ", values);
  };

  return (
    <Form
      onFinish={onFinish}
      onValuesChange={(_, allValues) => {
        setContent({ ...allValues });
      }}
    >
      {childrenWithProps}
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form>
  );
};

export default ContentContainer;
