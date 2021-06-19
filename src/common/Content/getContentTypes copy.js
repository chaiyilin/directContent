// https://www.algorithms-and-technologies.com/dfs/javascript

const getContentTypes = function (contentType) {
  let contentTypes = [];
  const dfs = (contentType, layer, fieldDisplayName, fieldPath) => {
    contentTypes.push({
      ...contentType,
      fieldDisplayName,
      fieldPath,
      layer: layer++,
    });
    for (let i = 0; i < contentType?.contentTypes?.length || 0; i++) {
      dfs(
        contentType?.contentTypes?.[i].contentType,
        layer,
        contentType?.contentTypes?.[i].fieldDisplayName,
        `${fieldPath}.${contentType?.contentTypes?.[i].fieldName}`
      );
    }
  };
  dfs(contentType, 0, "", "");
  console.log(contentTypes);
  return contentTypes;
};

export default getContentTypes;
