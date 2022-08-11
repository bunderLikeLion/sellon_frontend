import { axiosInstance } from './config';

const client = axiosInstance;

const auctionRelatedAPI = {
  postAuction: (payload) => {
    return client.post('auctions/', payload).then((res) => res.data);
  },

  getAuctionLists: (sort) => {
    return client
      .get('auctions/?ordering=-product_groups_count/', {
        params: {
          ordering:
            sort === 'popular'
              ? '-product_groups_count'
              : sort === 'oldest'
              ? 'created_at'
              : sort === 'interest'
              ? '-interested_auctions_count'
              : '-created_at',
        },
      })
      .then((res) => res.data);
  },

  getInterestedAuctionLists: () => {
    return client
      .get('auctions/interested/', { params: { page: 1, per_page: 30 } })
      .then((res) => res.data);
  },

  postInterestedAuction: (auctionId) => {
    return client
      .post('auctions/interested/', { auction_id: auctionId })
      .then((res) => res.data);
  },

  deleteInterestedAuction: (auctionId) => {
    return client
      .delete(`auctions/interested/${auctionId}`)
      .then((res) => res.data);
  },

  getSingleAuctionInfo: (id) => {
    return client.get(`auctions/${id}/`).then((res) => res.data);
  },

  getProductGroups: (relatedAuctionId, userId, page, perPage) => {
    return client
      .get(`product_groups/`, {
        params: {
          auction: relatedAuctionId,
          user: userId,
          page: page,
          per_page: perPage,
        },
      })
      .then((res) => res.data);
  },

  postProductGroups: (payload) => {
    return client.post('product_groups/', payload).then((res) => res.data);
  },

  postInventoryItem: (auctionId, payload) => {
    return client
      .post(`auctions/${auctionId}/add_product/`, payload)
      .then((res) => res.data);
  },
};

export default auctionRelatedAPI;
