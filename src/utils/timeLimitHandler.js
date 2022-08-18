import moment from 'moment';

const timeLimitHandler = (time, isEnded) => {
  const eventDate = moment(time);
  const todayDate = moment();
  const res = eventDate.diff(todayDate, 'hours');

  if (res === 0) {
    return '종료';
  } else if (0 < res <= 24) {
    return '당일 종료';
  } else if (24 < res <= 48) {
    return 'D - 2';
  } else if (48 < res <= 72) {
    return 'D - 3';
  } else if (72 < res <= 96) {
    return 'D - 4';
  } else if (96 < res <= 120) {
    return 'D - 5';
  } else if (120 < res <= 148) {
    return 'D - 6';
  } else if (148 < res <= 172) {
    return 'D - 7';
  } else if (172 < res <= 196) {
    return 'D - 8';
  }
};

export default timeLimitHandler;
