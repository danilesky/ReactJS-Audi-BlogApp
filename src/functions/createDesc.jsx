export const createDesc = (text) => {
  const description = text.split(" ").slice(0, 15).join(" ") + "...";
  return description;
};
