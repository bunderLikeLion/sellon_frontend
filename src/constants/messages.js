
const messages = {
  user: {
    signin: {
      success: '로그인되었습니다.',
    },
    signout: {
      success: '로그아웃되었습니다.',
    },
    signup: {
      success: '회원가입되었습니다.',
    },
  },
  auction: {
    create: {
      success: '경매장을 만들었습니다.',
    },
    destroy: {
      success: '경매장을 삭제했습니다.',
    },
    allIn: {
      success: '아이템을 모두 경매장에 등록하였습니다.',
    },
    addItem: {
      success: '경매장에 아이템을 등록했습니다.',
    },
    removeItem: {
      success: '경매장에서 아이템 등록을 취소했습니다.', // FIXME: 좀더 자연스러운 문구?
    },
  },
  product: {
    create: {
      success: '아이템을 생성했습니다.',
    },
    destroy: {
      success: '아이템을 삭제했습니다.',
    },
  },
  productGroup: {
    create: {
      succes: '경매장에 아이템을 등록했습니다.',
    },
  },
  interestedAuction: {
    create: {
      success: '관심 경매로 등록되었습니다.',
    },
    destroy: {
      success: '관심 경매 등록을 해제했습니다.', // FIXME: 좀더 자연스러운 문구
    },
  },
  dealing: {
    create: {
      success: '경매가 체결되었습니다.',
    },
    finish: {
      success: '거래가 종료되었습니다.',
    },
  },
  evaluation: {
    create: {
      success: '사용자 평가가 완료되었습니다.',
    },
  },
  message: {
    create: {
      success: '메세지가 전송되었습니다.',
    },
  }
}


export default messages;
