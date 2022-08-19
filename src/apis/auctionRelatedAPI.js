import { axiosInstance } from './config';

const client = axiosInstance;

const auctionRelatedAPI = {
  // 옥션 리스트
  getAuctionLists: (
    sort,
    pageNum,
    cat,
    filterKeyword,
    dealingType,
    showAll
  ) => {
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
          per_page: 12,
          page: pageNum,
          product__product_category_id: cat === '전체' ? null : cat,
          search: filterKeyword,
          include_ended_auction: showAll === '1',
          // dealing_type:  +dealingType,
          dealing_type: dealingType === '2' ? null : +dealingType,
        },
      })
      .then((res) => res.data);
  },

  postAuction: (payload) => {
    return client.post('auctions/', payload).then((res) => res.data);
  },

  getInterestedAuctionLists: (pageNum) => {
    return client
      .get('auctions/interested/', { params: { page: pageNum, per_page: 12 } })
      .then((res) => res.data);
  },

  postInterestedAuction: (auctionId) => {
    return client
      .post('auctions/interested/', { auction_id: auctionId })
      .then((res) => res.data);
  },

  getMyAuctionList: (page, perPage) => {
    return client
      .get('auctions/my/', { params: { page: page, per_page: perPage } })
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

  deleteInventoryItem: (auctionId, payload) => {
    return client
      .post(`auctions/${auctionId}/remove_product/`, payload)
      .then((res) => res.data);
  },

  getPopularAuctions: () => {
    return client.get('auctions/popular/').then((res) => res.data);
  },

  postAllIn: (auctionId) => {
    return client.post(`auctions/${auctionId}/all_in/`).then((res) => res.data);
  },

  deleteAuction: (auctionId) => {
    return client.delete(`auctions/${auctionId}/`).then((res) => res.data);
  },
};

export default auctionRelatedAPI;
