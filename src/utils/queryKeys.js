const queryKeys = {
  myProductGroup: (auctionId) => {
    return `myProductGroup${auctionId}`;
  },

  productGroups: (auctionId) => {
    return `productGroups${auctionId}`;
  },
};

export default queryKeys;
