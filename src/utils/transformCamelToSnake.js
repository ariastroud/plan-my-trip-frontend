// Transforms the keys with snake_case to camelCase
const keyMapping = {
  latitudeDestination: "latitude_destination",
  longitudeDestination: "longitude_destination",
  startDate: "start_date",
  endDate: "end_date",
};

const convertToSnakeCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(convertToSnakeCase);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = keyMapping[key] || key;
      acc[newKey] = convertToSnakeCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
};

export default convertToSnakeCase;
