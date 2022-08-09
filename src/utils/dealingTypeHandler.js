const dealingTypeHandler = (type) => {
  return type === 'delivery' ? '배송거래' : '직거래';
};

export default dealingTypeHandler;
