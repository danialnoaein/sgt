export const getRandomId = () => {
  const min = Math.ceil(1);
  const max = Math.floor(1000000);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
