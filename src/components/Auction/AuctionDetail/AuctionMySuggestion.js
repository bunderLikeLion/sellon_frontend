import styled from 'styled-components';
import MySuggested from './MySuggested';
import MySuggesting from './MySuggesting';

const InventoryContainer = styled.div`
  position: relative;
  transition: 1s;
  transform: ${(props) =>
    props.isInventoryOpened ? 'translateY(101%)' : 'translateY(0rem)'};
`;

const Inventory = styled.div`
  position: relative;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 27vh;
  width: 100%;
  border-radius: 1rem;
  background: ${(props) => props.theme.color_background__primary};
`;

const AuctionMySuggestion = (props) => {
  return (
    <InventoryContainer isInventoryOpened={props.isInventoryOpened}>
      <Inventory>
        <MySuggested
          isInventoryOpened={props.isInventoryOpened}
          handleInventory={props.handleInventory}
        />
        <MySuggesting />
      </Inventory>
    </InventoryContainer>
  );
};

export default AuctionMySuggestion;
