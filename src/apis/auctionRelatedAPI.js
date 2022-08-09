import { axiosInstance } from './config';

const client = axiosInstance;

const auctionRelatedAPI = {
  getAuctionLists: (sort) => {
    if (sort === 'popular')
      return client
        .get('auctions/?ordering=-product_groups_count')
        .then((res) => res.data);
    if (sort === 'oldest')
      return client
        .get('auctions/?ordering=created_at')
        .then((res) => res.data);
    return client.get('auctions/?ordering=-created_at').then((res) => res.data);
  },

  getSingleAuctionInfo: (id) => {
    return client.get(`auctions/${id}`).then((res) => res.data);
  },
};

export default auctionRelatedAPI;
