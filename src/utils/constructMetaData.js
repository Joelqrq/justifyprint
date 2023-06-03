export const constructMetaData = (metaDataJson) => {
  return constructNameMetaData(metaDataJson.names).concat(
    constructPropertyMetaData(metaDataJson.properties)
  );
};

const constructPropertyMetaData = (propertiesJson) => {
  return propertiesJson.flatMap((pValue) => {
    return Object.entries(pValue).flatMap(([tKey, tValue]) => {
      return Object.entries(tValue).map(([cKey, cValue]) => {
        return {
          property: `${tKey}:${cKey}`,
          content: cValue,
        };
      });
    });
  });
};

const constructNameMetaData = (namesJson) => {
  return namesJson.flatMap((nValue) => {
    return Object.entries(nValue).map(([cKey, cValue]) => {
      return {
        name: cKey,
        content: cValue,
      };
    });
  });
};
