const convertToCamelCase = (text) => {
  return text
    .toLowerCase()
    .trim()
    .split("_")
    .map((word, index) =>
      index === 0 ? word : word[0].toUpperCase() + word.slice(1)
    )
    .join("");
};

const data = `underscore_case\n first_name\nSome_Variable\n calculate_AGE\ndelayed_departure`;

const lines = data.split("\n");
for (const line of lines) {
  console.log(convertToCamelCase(line));
}
