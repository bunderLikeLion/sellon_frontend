const detailDateFormatter = (givenDate) => {
  const date = new Date(givenDate);
  const months = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  const days = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  const hrs = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const mins =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  return months + '.' + days + ' ' + hrs + ':' + mins;
};

export default detailDateFormatter;
