import styled from 'styled-components';
import { Link } from 'react-router-dom';

const PlaceHolder = styled.div`
  text-align: center;
  padding: ${(props) => props.padding || '3rem'};
  margin: ${(props) => props.margin || '1rem 1rem'};
  border-radius: ${(props) => props.borderRadius || '0.5rem'};
  font-size: ${(props) => props.fontSize || '1.1rem;'};
  background-color: ${(props) =>
    props.backgroundColor || props.theme.color_background__secondary};
`;

const StyledLink = styled(Link)`
  &:hover {
    text-decoration: underline;
  }
`;

const EmptyHistoryPlaceholder = ({
  message,
  backgroundColor,
  padding,
  margin,
  borderRadius,
  fontSize,
}) => {
  return (
    <PlaceHolder
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
      borderRadius={borderRadius}
      fontSize={fontSize}
    >
      <p>아직 경매장에서 거래한 물건이 없습니다.🥺</p>
      <StyledLink to="/auction">{message} </StyledLink>
    </PlaceHolder>
  );
};

export default EmptyHistoryPlaceholder;
