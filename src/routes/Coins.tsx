import styled from "styled-components";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Container = styled.div``;

const Header = styled.header`
  height: 12vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CoinList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
`;

const Coin = styled.li`
  background-color: white;
  color: ${(props) => props.theme.bgColor};
  padding: 22px 20px;
  margin-bottom: 11px;
  border: 5px double ${(props) => props.theme.bgColor};
  border-radius: 12px;
  font-weight: 900;
  a {
    display: flex;
    align-items: center;
    transition: color 0.3s ease-in-out;
  }
  &:hover {
    a {
      color: ${(props) => props.theme.accentColor};
    }
  }
  @media screen and (max-width: 600px) {
    width: 80%;
  }
  @media screen and (min-width: 601px) and (max-width: 900px) {
    width: 70%;
  }
  @media screen and (min-width: 901px) {
    width: 60%;
  }
`;

const Title = styled.h1`
  letter-spacing: 3px;
  font-weight: 600;
  font-size: 48px;
  color: ${(props) => props.theme.accentColor};
`;
const Loader = styled.span`
  height: 88vh;
  color: ${(props) => props.theme.accentColor};
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  font-weight: 900;
  letter-spacing: 3px;
`;

const Img = styled.img`
  width: 25px;
  height: 25px;
  margin-right: 8px;
`;
interface ICoin {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  is_new: boolean;
  is_active: boolean;
  type: string;
}

function Coins() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    (async () => {
      const response = await await fetch("https://api.coinpaprika.com/v1/coins");
      const json = await response.json();
      setCoins(json.slice(0, 30));
      setLoading(false);
    })();
  }, []);
  return (
    <Container>
      <Header>
        <Title>COINS</Title>
      </Header>
      {loading ? (
        <Loader>Loading...</Loader>
      ) : (
        <CoinList>
          {coins.map((coin) => (
            <Coin key={coin.id}>
              <Link to={{ pathname: `/${coin.id}`, state: { name: coin.name } }}>
                <Img src={`https://cryptocurrencyliveprices.com/img/${coin.id}.png`} />
                {coin.name} &rarr;
              </Link>
            </Coin>
          ))}
        </CoinList>
      )}
    </Container>
  );
}

export default Coins;
