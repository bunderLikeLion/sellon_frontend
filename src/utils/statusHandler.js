const statusHandler = (status) => {
  switch (status) {
    case 1:
      return '최하';
      break;
    case 2:
      return '중하';
      break;
    case 3:
      return '중';
      break;
    case 4:
      return '중상';
      break;
    case 5:
      return '최상';
      break;
    default:
      break;
  }
};

export default statusHandler;
