// https://dev.to/knowit-development/recursive-components-in-react-37ka
import ContentTypePanel from "../primitives/ContentTypePanel";

const RecursiveContentUis = ({ fieldName, contentType }) => {
  const { ContentUi, contentTypeFields } = contentType;
  const children =
    contentTypeFields &&
    contentTypeFields.map((contentTypeField) => {
      const { fieldName, contentType } = contentTypeField;
      return (
        <RecursiveContentUis key={fieldName} {...{ fieldName, contentType }} />
      );
    });
  return !fieldName ? (
    <>
      <ContentUi></ContentUi>
      {children}
    </>
  ) : (
    <ContentTypePanel header={fieldName}>
      <ContentUi></ContentUi>
      {children}
    </ContentTypePanel>
  );
};

export default RecursiveContentUis;
