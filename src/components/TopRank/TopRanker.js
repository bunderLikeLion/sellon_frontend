import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CardMedia from '@mui/material/CardMedia';
import { useMostProductGroupDealingQuery } from 'queries/statistics';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  gap: 2rem;
`;

const TopDealer = styled.div`
  position: relative;
  flex: 1;
  height: 13rem;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__success};
`;

const TopDealerImg = styled(CardMedia)`
  position: absolute;
  right: 5%;
  top: -10%;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  box-shadow: 0.2rem 0.2rem 0.6rem 0 #d3d3d3;

  @media screen and (max-width: 1000px) {
    width: 10rem;
    height: 10rem;
  }
`;

const TopDealerInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const TopDealerTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const TopDealerUserContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TopDealerUser = styled.p`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const TopDealCount = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const QuestionIcon = styled(HelpIcon)`
  float: right;
  margin: 0 2rem 1rem 0;
  cursor: pointer;
`;

const MonthlyChampionImg = styled(CardMedia)`
  position: absolute;
  right: 5%;
  top: -10%;
  width: 9rem;
  height: 9rem;
  border-radius: 50%;
  box-shadow: 0.2rem 0.2rem 0.6rem 0 #d3d3d3;

  @media screen and (max-width: 1000px) {
    width: 10rem;
    height: 10rem;
  }
`;

const MonthlyChampion = styled.div`
  position: relative;
  flex: 1;
  height: 13rem;
  margin: 1rem 0;
  padding: 1rem;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__success};
`;

const MonthlyChampionInfo = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const MonthlyTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const MonthlyUserContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MonthlyChampionUser = styled.p`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const MonthlyChampionDealCount = styled.p`
  font-size: 0.8rem;
  line-height: 1.2rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const StyledTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 168,
    cursor: 'pointer',
    color: '#DFDCEF',
    backgroundColor: '#000000',
    fontSize: '0.7rem',
    lineHeight: '1rem',
  },
});


const TopRanker = () => {
  const {
    data: MostProductGroupDealingData,
    isSuccess: MostProductGroupDealingDataFetched,
  } = useMostProductGroupDealingQuery();

  return (
    <Container>
      {MostProductGroupDealingDataFetched && (
        <TopDealer>
          <TopDealerImg
            image={MostProductGroupDealingData?.user?.avatar?.file}
          />
          <TopDealerInfo>
            <TopDealerTitle>이달의 거래왕</TopDealerTitle>
            {MostProductGroupDealingData?.user && (
              <TopDealerUserContainer>
                <TopDealerUser>
                  {MostProductGroupDealingData?.user?.username}
                </TopDealerUser>
                <TopDealCount>
                  총 {MostProductGroupDealingData?.count}회
                </TopDealCount>
              </TopDealerUserContainer>
            )}
            <StyledTooltip title="이 달의 거래왕은 경매에서 거래까지 가장 많이 성사시킨 사람이 가져가는 명예로운 자리입니다. 😎" arrow>
              <QuestionIcon />
            </StyledTooltip>
          </TopDealerInfo>
        </TopDealer>
      )}
      <MonthlyChampion>
        <MonthlyChampionImg image="https://img.animalplanet.co.kr/news/2019/12/29/700/1z668em06l04f8kj0qqm.jpg" />
        <MonthlyChampionInfo>
          <MonthlyTitle>이달의 챔피언</MonthlyTitle>
          <MonthlyUserContainer>
            <MonthlyChampionUser>api X(str이름)</MonthlyChampionUser>
            <MonthlyChampionDealCount>
              총 (int)명 경매 참여
            </MonthlyChampionDealCount>
          </MonthlyUserContainer>
          <StyledTooltip title="이 달의 챔피언은 이번 달 가장 많은 참여자를 보유한 경매에서 낙찰된 사람이 가져가는 명예로운 자리입니다. 😆" arrow>
            <QuestionIcon />
          </StyledTooltip>
        </MonthlyChampionInfo>
      </MonthlyChampion>
    </Container>
  );
};

export default TopRanker;
