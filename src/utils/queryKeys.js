const queryKeys = {
  myProductGroup: (auctionId) => {
    return `myProductGroup${auctionId}`;
  },

  productGroups: (auctionId) => {
    return `productGroups${auctionId}`;
  },

  auctionInfo: (auctionId) => {
    return `auctionInfo${auctionId}`;
  },
};

export default queryKeys;
