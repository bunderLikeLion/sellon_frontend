import React, { useCallback, useRef } from 'react';
import Slick from 'react-slick';
import styled, { css } from 'styled-components';
import { LeftOutlined, RightOutlined } from '@ant-design/icons';
import 'css/slick.css';
import 'css/slick-theme.css';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userAtom } from '../../states';
const Container = styled.div`
  width: 100%;
`;
const Wrap = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 30rem !important;
  margin-top: 1%;
`;

const SlickItems = styled.div`
  position: relative;
  width: 100%;
  padding-bottom: 56.26%;
  border-radius: 1rem;

  >img {
    border-radius: 1rem;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
`;

const defaultButtonStyle = css`
  position: absolute;
  top: calc(50% - 1rem);
  padding: 0;
  width: 30px;
  height: 30px;
  line-height: 1;
  border: none;
  border-radius: 50%;
  background: none;
  outline: none;
  cursor: pointer;
  @media screen and (max-width: 700px) {
    top: calc(50% - 4rem);
  }
  @media screen and (max-width: 600px) {
    top: calc(50% - 7rem);
  }
`;

const PrevButton = styled.button`
  ${defaultButtonStyle};
  left: 0;
`;

const NextButton = styled.button`
  ${defaultButtonStyle};
  right: 1rem;
`;

const defaultIconStyle = css`
  font-size: 22px;
  color: #dedede;

  &:focus,
  &:hover {
    color: #666;
  }
`;

const PrevIcon = styled(LeftOutlined)`
  ${defaultIconStyle}
  display: flex;
  align-items: center;
  width: 3rem;
  height: 3rem;
  padding-left: 1rem;
  font-size: 2rem;
  font-weight: bold !important;
`;

const NextIcon = styled(RightOutlined)`
  ${defaultIconStyle}
  display: flex;
  align-items: center;
  width: 3rem;
  height: 3rem;
  font-size: 2rem;
`;

const AuctionItemContainer = styled.div`
  z-index: 1;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const AuctionTitleContainer = styled.div`
  display: block;
  position: absolute;
  top: 18.5rem;
  left: 10%;
  width: 37%;
  @media screen and (max-width: 800px) {
    top: 17rem;
  }

  @media screen and (max-width: 700px) {
    top: 11.5rem;
  }
`;

const AuctionTitle = styled.div`
  color: ${(props) => props.theme.color_white};
  font-size: 1.9rem;
  font-weight: bold;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  @media screen and (max-width: 700px) {
    font-size: 1.4rem;
  }
`;

const ProductThumbnail = styled.img`
  width: 20rem !important;
  aspect-ratio: 1 / 1;
  position: absolute !important;
  left: 55% !important;
  top: 1.6rem !important;
  border-radius: 6%;
  box-shadow: 0 0 6px ${(props) => props.theme.color_white};
  overflow: visible !important;
  @media screen and (max-width: 1400px) {
    flex-basis: calc((100% - 4rem) / 3);
    max-width: calc((100% - 4rem) / 3);
  }
`;

//TODO: 유저 프로필 들어가 있는 상태에서 테스트 해봐야함
const UserAvatar = styled.img`
  width: 9% !important;
  aspect-ratio: 1 / 1;
  position: absolute !important;
  left: 10% !important;
  top: 12rem !important;
  border-radius: 50%;

  @media screen and (max-width: 700px) {
    top: 8rem !important;
  }
`;

const ParticipantUserAvatar = styled.img`
  width: 12% !important;
  aspect-ratio: 1 / 1;
  border-radius: 50%;
  position: relative !important;
  margin-right: 0.5rem;
`;

const ParticipatedUserContainer = styled.div`
  display: flex;
  position: absolute;
  top: 22rem;
  left: 10%;
  height: fit-content;
  width: 55%;
  @media screen and (max-width: 700px) {
    top: 13.5rem;
  }
`;

const OverSpan = styled.span`
  position: absolute;
  z-index: 2;
  left: 72%;
  top: 35%;
  @media screen and (max-width: 800px) {
    left: 73.5%;
  }
  @media screen and (max-width: 600px) {
    left: 77.5%;
    top: 33%;
  }
`;

const images = [
  {
    src: '/popular/background_1.jpg',
    title: '1',
  },
  {
    src: '/popular/background_2.jpg',
    title: '2',
  },
  {
    src: '/popular/background_3.jpg',
    title: '3',
  },
];

const AuctionSlider = ({ items }) => {
  const slickRef = useRef(null);
  const settings = {
    centerMode: true,
    centerPadding: '0px',
    speed: 500,
    dots: true,
    arrows: false,
    infinite: true,
    autoplaySpeed: 3000,
    // autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const previous = useCallback(() => slickRef.current.slickPrev(), []);
  const next = useCallback(() => slickRef.current.slickNext(), []);
  const USER_MAX_COUNT = 6;
  const user = useRecoilValue(userAtom);

  return (
    <Wrap>
      <Container>
        <Slick ref={slickRef} {...settings}>
          {images.map((v, i) => {
            return (
              <SlickItems key={`${v.title}_${i}`}>
                <img src={v.src} />

                <AuctionItemContainer>
                  <UserAvatar src={items[i]?.owner?.avatar} />
                  <Link
                    to={
                      items[i]?.owner?.id === user?.id
                        ? `/auctioneer/${items[i]?.id}/${items[i]?.product?.id}`
                        : `/auction/${items[i]?.id}`
                    }
                  >
                    <AuctionTitleContainer>
                      <AuctionTitle>{items[i]?.title}</AuctionTitle>
                    </AuctionTitleContainer>
                  </Link>
                  <Link
                    to={
                      items[i]?.owner?.id === user?.id
                        ? `/auctioneer/${items[i]?.id}/${items[i]?.product?.id}`
                        : `/auction/${items[i]?.id}`
                    }
                  >
                    <ProductThumbnail
                      src={items[i]?.product?.thumbnail?.file}
                    />
                  </Link>
                  {items[i]?.participants.length > 0 && (
                    <ParticipatedUserContainer>
                      {items[i].participants
                        .slice(0, USER_MAX_COUNT)
                        .map((el, index) => {
                          if (index == USER_MAX_COUNT - 1) {
                            return (
                              <>
                                <ParticipantUserAvatar
                                  style={{ opacity: '0.7' }}
                                  src={el.avatar}
                                />
                                <OverSpan>
                                  +
                                  {items[i].participants.length -
                                    USER_MAX_COUNT}
                                </OverSpan>
                              </>
                            );
                          }
                          return (
                            <>
                              <ParticipantUserAvatar src={el.avatar} />
                            </>
                          );
                        })}
                    </ParticipatedUserContainer>
                  )}
                </AuctionItemContainer>
              </SlickItems>
            );
          })}
        </Slick>
        <>
          <PrevButton onClick={previous}>
            <PrevIcon />
          </PrevButton>

          <NextButton onClick={next}>
            <NextIcon />
          </NextButton>
        </>
      </Container>
    </Wrap>
  );
};
export default AuctionSlider;
