const errorMsgHandler = (errorRes) => {
  const msgArr = [];
  for (let key in errorRes) {
    errorRes[key].forEach((singleMsg) => {
      switch (singleMsg) {
        case 'User with this username already exists.':
          msgArr.push(`🤔 같은 아이디를 가진 유저가 이미 존재합니다.`);
          break;
        case 'Enter a valid email address.':
          msgArr.push(`🤔 유효한 email 형식을 적어주세요.`);
          break;
        case 'This password is too short. It must contain at least 8 characters.':
          msgArr.push(
            `🤔 비밀번호가 너무 짧습니다. 최소 8글자 이상으로 생성해주세요`
          );
          break;
        case "The two password fields didn't match.":
          msgArr.push(
            `🤔 비밀번호와 비밀번호 재확인 정보가 일치하지 않습니다.`
          );
          break;
        case 'This password is too common.':
          msgArr.push(`🤔 비밀번호가 너무 흔합니다.`);
          break;
        case 'This password is entirely numeric.':
          msgArr.push(`🤔 숫자로만 이루어진 비밀번호는 불가능합니다.`);
          break;
        case 'Unable to log in with provided credentials.':
          msgArr.push(
            `🤔 아이디/비밀번호를 잘못 입력했습니다 입력하신 내용을 다시 확인해주세요.`
          );
          break;
        default:
          msgArr.push(`🤔 ${singleMsg}`);
          break;
      }
    });
  }
  return msgArr.join('\n');
};

export default errorMsgHandler;
