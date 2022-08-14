import "./styles.css";
import styled from 'styled-components';
import PlayButton from "./PlayButton";
import MotionSvgs from "./MotionSvgs";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`

const PlayGround = () => {
  return (
    <Container>
      <PlayButton />

      <MotionSvgs />
    </Container>
  )
};

export default PlayGround;