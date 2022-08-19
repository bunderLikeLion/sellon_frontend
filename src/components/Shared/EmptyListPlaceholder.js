import styled from 'styled-components';

const PlaceHolder = styled.div`
  text-align: center;
  padding: ${(props) => props.padding || '3rem'};
  margin-top: 0.7rem;
  border-radius: ${(props) => props.borderRadius || '0.5rem'};
  font-size: ${(props) => props.fontSize || '1.1rem;'};
  color: 'white' !important;
  background-color: ${(props) => props.backgroundColor || props.theme.color_background__secondary};
`;

const EmptyListPlaceHolder = ({
  message,
  backgroundColor,
  padding,
  margin,
  borderRadius,
  fontSize,
  color,
}) => {
  return (
    <PlaceHolder
      backgroundColor={backgroundColor}
      padding={padding}
      margin={margin}
      borderRadius={borderRadius}
      fontSize={fontSize}
      color={color}
    >
      {message}
    </PlaceHolder>
  )
};

export default EmptyListPlaceHolder;
