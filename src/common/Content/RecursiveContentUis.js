// https://dev.to/knowit-development/recursive-components-in-react-37ka
import ContentTypePanel from "../primitives/ContentTypePanel";

const RecursiveContentUis = ({
  fieldNameFromParent = [],
  fieldDisplayName = "",
  contentType,
}) => {
  const { ContentUi, contentTypeFields } = contentType;
  const children =
    contentTypeFields &&
    contentTypeFields.map((contentTypeField) => {
      const { fieldName, fieldDisplayName, contentType } = contentTypeField;
      return (
        <RecursiveContentUis
          key={[...fieldNameFromParent, fieldName].join(".")}
          {...{
            fieldNameFromParent: [...fieldNameFromParent, fieldName],
            fieldDisplayName,
            contentType,
          }}
        />
      );
    });
  return !fieldNameFromParent ? (
    <>
      <ContentUi></ContentUi>
      {children}
    </>
  ) : (
    <ContentTypePanel header={fieldDisplayName}>
      <ContentUi fieldNameFromParent={fieldNameFromParent}></ContentUi>
      {children}
    </ContentTypePanel>
  );
};

export default RecursiveContentUis;
