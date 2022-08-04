import WrapContainer from 'layouts/WrapContainer';
import { Link } from 'react-router-dom';

const Auction = () => {
  return (
    <WrapContainer>
      <h1>경매장</h1>
      <Link to="/auction/detail">
        <button>경매장 상세</button>
      </Link>
    </WrapContainer>
  );
};

export default Auction;
