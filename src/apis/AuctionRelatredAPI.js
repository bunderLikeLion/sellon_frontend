import { axiosInstance } from './config';

const client = axiosInstance;

const AuctionRelatedAPI = {
  getAuctionLists: () => {
    return client.get('auctions/').then((res) => res.data);
  },
};

export default AuctionRelatedAPI;
