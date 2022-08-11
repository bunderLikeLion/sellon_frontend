import moment from 'moment';

const isAuctionFinishedHandler = (time) => {
  const eventDate = moment(time);
  const todayDate = moment();

  return eventDate < todayDate;
};

export default isAuctionFinishedHandler;
