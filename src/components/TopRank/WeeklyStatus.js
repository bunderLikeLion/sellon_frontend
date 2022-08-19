import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CardMedia from '@mui/material/CardMedia';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { usePopularAuctionsQuery } from 'queries/auction';

const Container = styled.div`
  flex: 1;
  height: 50%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
  padding: 1rem;
  @media screen and (max-width: 700px) {
    height: 50%;
  }
`;

const WeeklyStatusContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-right: 1rem;
`;

const WeeklyStatusTitle = styled.p`
  padding: 1rem 1rem 0rem 1rem;
  font-weight: 700;
  font-size: 1.4rem;
`;

const WeeklyStatusBottomContainer = styled.div`
  display: inline-flex;
  justify-content: center;
  padding: 0.7rem;
  width: 100%;
`;

const WeeklyStatusUserContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  height: 75%;
`;

const PopularAuctionCard = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 33%;
  align-items: center;
  height: 8rem;
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__third};
`;

const UserTopContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
`;

const UserImg = styled(CardMedia)`
  width: 2.5rem;
  height: 2.5rem;
  margin: 0.5rem;
  border-radius: 50%;
`;

const UserNickname = styled.p`
  color: ${(props) => props.theme.color_font__secondary};
`;

const UserBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  margin-top: 0.3rem;
`;

const ParticipantUserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  min-width: 2rem;
  border-radius: 50%;
  position: relative !important;
  margin-right: 0.5rem;
  @media screen and (max-width: 700px) {
  }
`;

const LastImageBox = styled.div`
  width: fit-content;
  position: relative;
`;

const OverSpan = styled.span`
  position: absolute;
  z-index: 2;
  left: 15%;
  top: 30%;
  @media screen and (max-width: 700px) {
    font-size: 0.5rem;
  }
`;

const WeeklyStatus = () => {
  const { data: popularAuctionList, isSuccess: popularAuctionListFetched } =
    usePopularAuctionsQuery();
  const USER_MAX_COUNT = 3;
  return (
    <Container>
      <WeeklyStatusContainer>
        <WeeklyStatusTitle>실시간 인기 경매</WeeklyStatusTitle>
      </WeeklyStatusContainer>
      <WeeklyStatusBottomContainer>
        <WeeklyStatusUserContainer>
          {popularAuctionListFetched &&
            popularAuctionList.map((auctionItem) => {
              return (
                <PopularAuctionCard>
                  <UserTopContainer>
                    <UserImg image={auctionItem.owner?.avatar} />
                    <UserNickname>{auctionItem.owner?.username}</UserNickname>
                  </UserTopContainer>
                  <UserBottomContainer>
                    {auctionItem.participants
                      ?.slice(0, USER_MAX_COUNT)
                      .map((user, index) => {
                        if (index === USER_MAX_COUNT - 1) {
                          return (
                            <LastImageBox>
                              <ParticipantUserAvatar
                                style={{ opacity: '0.7' }}
                                src={user.avatar}
                              />

                              {
                                (auctionItem.participants.length - USER_MAX_COUNT > 0) && (
                                  <OverSpan>
                                    +
                                    {auctionItem.participants.length -
                                      USER_MAX_COUNT}
                                  </OverSpan>
                                )
                              }
                            </LastImageBox>
                          );
                        }
                        return (
                          <>
                            <ParticipantUserAvatar src={user.avatar} />
                          </>
                        );
                      })}
                  </UserBottomContainer>
                </PopularAuctionCard>
              );
            })}
        </WeeklyStatusUserContainer>
      </WeeklyStatusBottomContainer>
    </Container>
  );
};

export default WeeklyStatus;
