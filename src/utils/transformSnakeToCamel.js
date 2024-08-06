// Transforms the keys with snake_case to camelCase
const keyMapping = {
  start_date: "startDate",
  end_date: "endDate",
  day_number: "dayNumber",
  places_to_eat: "placesToEat",
  day: "dayNumber",
};

const convertToCamelCase = (obj) => {
  if (Array.isArray(obj)) {
    return obj.map(convertToCamelCase);
  } else if (obj !== null && typeof obj === "object") {
    return Object.keys(obj).reduce((acc, key) => {
      const newKey = keyMapping[key] || key;
      acc[newKey] = convertToCamelCase(obj[key]);
      return acc;
    }, {});
  }
  return obj;
};

export default convertToCamelCase;
