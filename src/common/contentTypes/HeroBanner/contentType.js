import Image from "../../primitives/fields/Image";
import component from "./index";
import ctaContentType from "../Cta/contentType";

const ContentUi = () => {
  return <Image />;
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
