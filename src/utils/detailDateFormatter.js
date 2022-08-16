const detailDateFormatter = (givenDate) => {
  const date = new Date(givenDate);
  const today = new Date();
  const months = date.getMonth() < 10 ? '0' + date.getMonth() : date.getMonth();
  const days = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
  let hrs = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
  const ampm = hrs >= 12 ? 'PM' : 'AM';
  hrs = hrs % 12;
  hrs = hrs ? hrs : 12;
  const mins =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

  if (
    date.getMonth() === today.getMonth() &&
    date.getDate() === today.getDate()
  )
    return hrs + ':' + mins + ' ' + ampm;

  return months + '.' + days + ' ' + hrs + ':' + mins + ' ' + ampm;
};

export default detailDateFormatter;
