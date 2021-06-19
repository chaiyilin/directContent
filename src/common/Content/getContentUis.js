import getContentTypes from "./RecursiveContentUis";
import ContentTypePanel from "../primitives/ContentTypePanel";

const getContentUis = (contentType) => {
  const contentTypes = getContentTypes(contentType);
  return contentTypes.map((contentType) => {
    const { layer, ContentUi, fieldDisplayName } = contentType;
    if (layer === 0) {
      return <ContentUi></ContentUi>;
    } else {
      return (
        <div className={`ml-${layer * 2}`}>
          <ContentTypePanel header={fieldDisplayName}>
            <ContentUi></ContentUi>
          </ContentTypePanel>
        </div>
      );
    }
  });
};

export default getContentUis;
