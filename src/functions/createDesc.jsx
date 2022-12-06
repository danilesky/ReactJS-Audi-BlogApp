export const createDesc = (text) => {
  const description = text.split(" ").slice(0, 30).join(" ") + "...";
  return description;
};
