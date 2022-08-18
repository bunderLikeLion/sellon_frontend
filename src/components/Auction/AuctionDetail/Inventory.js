import styled from 'styled-components';
import MySuggesting from './MySuggesting';

const InventoryContainer = styled.div`
  position: relative;
`;

const InventorList = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const Inventory = (props) => {
  return (
    <InventoryContainer>
      <InventorList>
        <MySuggesting />
      </InventorList>
    </InventoryContainer>
  );
};

export default Inventory;
