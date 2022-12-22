export const formatDate = (date) => {
  const options = {
    day: "numeric",
    year: "numeric",
    month: "short",
    // weekday: "short",
  };
  return date.toLocaleDateString("en-US", options);
}