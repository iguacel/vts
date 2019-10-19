export const percentage = (portion, total) => {
  const per = Math.floor((portion / total) * 100);
  return isNaN(per) ? 0 : per;
};
