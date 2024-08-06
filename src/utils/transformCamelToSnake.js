// Transforms the keys with camelCase to snake_case
const keyMapping = {
  latitudeDestination: "latitude",
  longitudeDestination: "longitude",
  startDate: "start_date",
  endDate: "end_date",
  dayNumber: "day",
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
