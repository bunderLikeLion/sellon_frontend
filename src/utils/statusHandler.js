const statusHandler = (status) => {
  switch (status) {
    case 1:
      return '최하';
    case 2:
      return '중하';
    case 3:
      return '중';
    case 4:
      return '중상';
    case 5:
      return '최상';
    default:
      return '최상';
  }
};

export default statusHandler;
