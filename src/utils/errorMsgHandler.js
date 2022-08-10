const errorMsgHandler = (errorRes) => {
  const givenMsg = errorRes.response.data.error.details;
  const msgArr = [];
  for (let key in givenMsg) {
    givenMsg[key].forEach((singleMsg) => {
      msgArr.push(`🤔 ${singleMsg}`);
    });
  }
  return msgArr.join('\n');
};

export default errorMsgHandler;
