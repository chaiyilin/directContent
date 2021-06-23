import { Form } from "antd";
import Image from "../../primitives/fields/Image";
import component from "./index";
import ctaContentType from "../Cta/contentType";

const ContentUi = ({ fieldNameFromParent }) => {
  return (
    <Form.Item name={[...fieldNameFromParent, "image"]} lable="Image">
      <Image />
    </Form.Item>
  );
};

const contentType = {
  name: "Hero Banner",
  component,
  ContentUi,
  contentTypeFields: [
    {
      fieldName: "cta",
      fieldDisplayName: "CTA",
      isArray: false,
      contentType: ctaContentType,
    },
  ],
};

export default contentType;
