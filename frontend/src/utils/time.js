export const timestampToDate = (timestamp) => {
  const date = new Date(timestamp);
  return `${`${date.getDate()}/${date.getMonth() + 1}`}/${date.getFullYear()}`;
};

export const dateToTimestamp = (date) => {
  const splittedDate = date.split('-');
  const newDate = new Date(splittedDate[0], splittedDate[1] - 1, splittedDate[2]);
  return newDate.getTime();
};

export default { timestampToDate, dateToTimestamp };
