const padZero =(value) => value.toString().length < 2 ? '0' + value : value;

const dateFormatter = (givenDate) => {
  const date = new Date(givenDate);
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1, 2);
  const day = padZero(date.getDate(), 2);

  return `${year}.${month}.${day}`;
};

export default dateFormatter;
