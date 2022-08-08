import styled from 'styled-components';
import HelpIcon from '@mui/icons-material/Help';
import CardMedia from '@mui/material/CardMedia';

const Container = styled.div`
  width: 90%;
  height: 50%;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const TopDealer = styled.div`
  width: 18.5rem;
  height: 13rem;
  background: ${(props) => props.theme.color_background__success};
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
  position: relative;
`;

const TopDealerImg = styled(CardMedia)`
  width: 10rem;
  height: 10rem;
  background: red;
  border-radius: 50%;
  float: right;
  position: absolute;
  right: 5%;
  top: -10%;
  box-shadow: 3px 3px 6px 0;
`;

const TopDealerInfo = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
`;

const TopDealerTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const TopDealerUserContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const TopDealerUser = styled.p`
  font-size: 1.2rem;
  margin-right: 0.5rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const TopDealCount = styled.p`
  font-size: 0.8rem;
  color: ${(props) => props.theme.color_font__secondary};
`;

const QuestionIcon = styled(HelpIcon)`
  float: right;
  margin-right: 2rem;
  margin-bottom: 1rem;
`;

const MonthlyChampionImg = styled(CardMedia)`
  width: 10rem;
  height: 10rem;
  background: red;
  border-radius: 50%;
  float: right;
  position: absolute;
  right: 5%;
  top: -10%;
  box-shadow: 3px 3px 6px 0;
`;

const MonthlyChampion = styled.div`
  width: 18.5rem;
  height: 13rem;
  background: ${(props) => props.theme.color_background__success};
  border-radius: 1rem;
  padding: 1rem;
  margin: 1rem 0;
  position: relative;
`;

const MonthlyChampionInfo = styled.div`
  width: 100%;
  height: auto;
  position: absolute;
  bottom: 0;
`;

const MonthlyTitle = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  color: ${(props) => props.theme.color_font__primary};
`;

const MonthlyUserContainer = styled.div`
  display: flex;
  align-items: flex-end;
`;

const MonthlyChampionUser = styled.p`
  font-size: 1.2rem;
  margin-right: 0.5rem;
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
