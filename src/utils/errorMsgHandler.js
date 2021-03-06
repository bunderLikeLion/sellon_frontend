const errorMsgHandler = (errorRes) => {
  const msgArr = [];
  for (let key in errorRes) {
    errorRes[key].forEach((singleMsg) => {
      switch (singleMsg) {
        case 'User with this username already exists.':
          msgArr.push(`π€ κ°μ μμ΄λλ₯Ό κ°μ§ μ μ κ° μ΄λ―Έ μ‘΄μ¬ν©λλ€.`);
          break;
        case 'Enter a valid email address.':
          msgArr.push(`π€ μ ν¨ν email νμμ μ μ΄μ£ΌμΈμ.`);
          break;
        case 'This password is too short. It must contain at least 8 characters.':
          msgArr.push(
            `π€ λΉλ°λ²νΈκ° λλ¬΄ μ§§μ΅λλ€. μ΅μ 8κΈμ μ΄μμΌλ‘ μμ±ν΄μ£ΌμΈμ`
          );
          break;
        case "The two password fields didn't match.":
          msgArr.push(
            `π€ λΉλ°λ²νΈμ λΉλ°λ²νΈ μ¬νμΈ μ λ³΄κ° μΌμΉνμ§ μμ΅λλ€.`
          );
          break;
        case 'This password is too common.':
          msgArr.push(`π€ λΉλ°λ²νΈκ° λλ¬΄ νν©λλ€.`);
          break;
        case 'This password is entirely numeric.':
          msgArr.push(`π€ μ«μλ‘λ§ μ΄λ£¨μ΄μ§ λΉλ°λ²νΈλ λΆκ°λ₯ν©λλ€.`);
          break;
        case 'Unable to log in with provided credentials.':
          msgArr.push(
            `π€ μμ΄λ/λΉλ°λ²νΈλ₯Ό μλͺ» μλ ₯νμ΅λλ€ μλ ₯νμ  λ΄μ©μ λ€μ νμΈν΄μ£ΌμΈμ.`
          );
          break;
        default:
          msgArr.push(`π€ ${singleMsg}`);
          break;
      }
    });
  }
  return msgArr.join('\n');
};

export default errorMsgHandler;
