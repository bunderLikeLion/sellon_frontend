const dateFormatter = (givenDate) => {
  const date = new Date(givenDate);
  const yrs = date.getFullYear();
  const months = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  const days = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();

  return yrs + '.' + months + '.' + days;
};

export default dateFormatter;
