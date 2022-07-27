const errorMsgHandler = (errorRes) => {
  const msgArr = [];
  for (let key in errorRes) {
    errorRes[key].forEach((singleMsg) => {
      msgArr.push(singleMsg);
    });
  }
  return msgArr.join('\n');
};

export default errorMsgHandler;
