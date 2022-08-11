import moment from 'moment';

const timeLimitHandler = (time) => {
  const eventDate = moment(time);
  const todayDate = moment();
  const res = eventDate.diff(todayDate, 'days');

  switch (res) {
    case 0:
      return '당일 종료';
    case 1:
      return 'D-2';
    case 2:
      return 'D-3';
    case 3:
      return 'D-4';
    case 4:
      return 'D-5';
    case 5:
      return 'D-6';
    case 6:
      return 'D-7';
    case 7:
      return 'D-8';
    default:
      return '당일종료';
  }
};

export default timeLimitHandler;
