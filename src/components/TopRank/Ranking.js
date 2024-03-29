import styled from 'styled-components';
import CardMedia from '@mui/material/CardMedia';
import { useDealingRankingQuery } from 'queries/statistics';

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 1.5rem;
  border-radius: 1rem;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  padding-bottom: 1rem;
`;

const RankingTitle = styled.div`
  font-size: 1.4rem;
  font-weight: 700;
`;

const CardContent = styled.div`
  overflow-y: auto;
  width: 100%;
  height: 85%;
  max-height: 25rem;
  border-radius: 0.5rem;
  padding-right: 0.7rem;
`;

const RankerList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
`;

const RankerItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 3rem;
  border-radius: 0.5rem;
  padding: 0.4rem;
  background: ${(props) => props.theme.color_background__secondary};
`;

const RankerContainerLeft = styled.div`
  display: flex;
  align-items: center;
  color: ${(props) => props.theme.color_font__tertiary};
`;

const RankerNumber = styled.p`
  margin: ${(props) =>
    props.isLast ? 'auto 1rem auto 0.45rem' : 'auto 1rem auto 0.8rem'};
`;

const RankerImg = styled(CardMedia)`
  width: 1.7rem;
  height: 1.7rem;
  border-radius: 50%;
`;

const RankerNickname = styled.div`
  margin: 0.7rem;
`;

const RankerDealCount = styled.div`
  margin: 0.7rem;
`;

const Ranking = () => {
  const { data: RankingData, isSuccess: RankingDataFetched } =
    useDealingRankingQuery();

  return (
    <Container>
      <CardHeader>
        <RankingTitle>실시간 거래 랭킹</RankingTitle>
      </CardHeader>
      <CardContent>
        <RankerList>
          {RankingDataFetched &&
            RankingData.map((item, index) => {
              return (
                <RankerItem>
                  <RankerContainerLeft>
                    <RankerNumber
                      isLast={index === RankingData.length - 1 && true}
                    >
                      {index + 1}
                    </RankerNumber>
                    <RankerImg image={item.avatar} />
                    <RankerNickname>{item.username}</RankerNickname>
                  </RankerContainerLeft>
                  <div>
                    <RankerDealCount>
                      총 {item.completed_dealings_count} 회
                    </RankerDealCount>
                  </div>
                </RankerItem>
              );
            })}
        </RankerList>
      </CardContent>
    </Container>
  );
};

export default Ranking;
