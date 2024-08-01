// Transforms the keys with snake_case to camelCase
const keyMapping = {
  latitude_destination: "latitudeDestination",
  longitude_destination: "longitudeDestination",
  start_date: "startDate",
  end_date: "endDate",
};

const transformKeys = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(transformKeys);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = keyMapping[key] || key;
      acc[newKey] = transformKeys(obj[key]);
      return acc;
    }, {});
  }
  return obj;
};

export default transformKeys;