import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
  clear: both;
  padding: 1rem;
  background: blue;
  margin: 1rem;
`;

const ByerSingleBox = () => {
  return <Container>ByerSingleBox입니다</Container>;
};

export default ByerSingleBox;
