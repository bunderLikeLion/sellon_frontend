import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CardMedia from '@mui/material/CardMedia';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  width: 90%;
  height: 50%;
`;

const TopDealer = styled.div`
  position: relative;
  width: 18.5rem;
  height: 13rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${(props) => props.theme.color_background__success};
  border-radius: 1rem;
`;

const TopDealerImg = styled(CardMedia)`
  position: absolute;
  width: 10rem;
  height: 10rem;
  background: red;
  border-radius: 50%;
  float: right;
  right: 5%;
  top: -10%;
  box-shadow: 0.2rem 0.2rem 0.6rem 0 lightgray;
`;

const TopDealerInfo = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
`;

const TopDealerTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const TopDealerUserContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TopDealerUser = styled.p`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const TopDealCount = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const QuestionIcon = styled(HelpIcon)`
  margin-right: 2rem;
  margin-bottom: 1rem;
  float: right;
`;

const MonthlyChampionImg = styled(CardMedia)`
  position: absolute;
  width: 10rem;
  height: 10rem;
  float: right;
  right: 5%;
  top: -10%;
  border-radius: 50%;
  box-shadow: 0.2rem 0.2rem 0.6rem 0 lightgray;
`;

const MonthlyChampion = styled.div`
  position: relative;
  width: 18.5rem;
  height: 13rem;
  margin: 1rem 0;
  padding: 1rem;
  background: ${(props) => props.theme.color_background__success};
  border-radius: 1rem;
`;

const MonthlyChampionInfo = styled.div`
  position: absolute;
  width: 100%;
  height: auto;
  bottom: 0;
`;

const MonthlyTitle = styled.p`
  margin-bottom: 1rem;
  font-size: 1rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const MonthlyUserContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MonthlyChampionUser = styled.p`
  margin-right: 0.5rem;
  font-size: 1.2rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const MonthlyChampionDealCount = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const TopRanker = () => {
  return (
    <Container>
      <TopDealer>
        <TopDealerImg image="https://pbs.twimg.com/media/EBq0k5qUEAE3h1u.jpg" />
        <TopDealerInfo>
          <TopDealerTitle>이달의 거래왕</TopDealerTitle>
          <TopDealerUserContainer>
            <TopDealerUser>김지형</TopDealerUser>
            <TopDealCount>총 53회</TopDealCount>
          </TopDealerUserContainer>
          <QuestionIcon />
        </TopDealerInfo>
      </TopDealer>
      <MonthlyChampion>
        <MonthlyChampionImg image="https://img.animalplanet.co.kr/news/2019/12/29/700/1z668em06l04f8kj0qqm.jpg" />
        <MonthlyChampionInfo>
          <MonthlyTitle>이달의 챔피언</MonthlyTitle>
          <MonthlyUserContainer>
            <MonthlyChampionUser>남채원</MonthlyChampionUser>
            <MonthlyChampionDealCount>
              총 92명 참여 경매
            </MonthlyChampionDealCount>
          </MonthlyUserContainer>
          <QuestionIcon />
        </MonthlyChampionInfo>
      </MonthlyChampion>
    </Container>
  );
};

export default TopRanker;
