import Head from 'next/head';
import CoinGecko from 'coingecko-api';
const coinGeckoClient = new CoinGecko();

import {
  Button,
  Container,
  Segment,
  Grid,
  Icon,
  Image
} from "semantic-ui-react";

export default function Price(props) {
  const { data } = props.result;

  const formatPercent = number => 
    `${new Number(number).toFixed(2)}%`

  const formatDollar = (number, maximumSignificantDigits) =>
    new Intl.NumberFormat(
      'en-US', 
      { 
        style: 'currency', 
        currency: 'USD',
        maximumSignificantDigits
      })
      .format(number);

  return (
    <div >
      <Head>
        <title> Ginger: Crypto Dashboard</title>

      </Head>

      <p> </p>
      <p> </p>
    <Segment padded> 
      <h1>Ginger: Crypto Dashboard</h1>

      <p> </p>
      <p> </p>
      <p> </p>
      

      <table className="table">
        <thead>
          <tr>
            <th>Symbol</th>
            <th>24H Change</th>
            <th>Price</th>
            <th>Market cap</th>
          </tr>
        </thead>
        <tbody>
          {data.map(coin => (
            <tr key={coin.id}>
              <td>
                <img 
                  src={coin.image} 
                  style={{width: 20, height: 20, marginRight: 20}} 
                />
                {coin.symbol.toUpperCase()}
              </td>
              <td> 
                <span
                  className={coin.price_change_percentage_24h > 0 ? (
                    'text-success' 
                  ) : 'text-danger'}
                >
                {formatPercent(coin.price_change_percentage_24h)}
                </span>
              </td>
              <td>{formatDollar(coin.current_price, 20)}</td>
              <td>{formatDollar(coin.market_cap, 12)}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </Segment> 
    </div>
  )
}

export async function getServerSideProps(context) {
  const params = {
    order: CoinGecko.ORDER.MARKET_CAP_DESC
  };
  const result = await coinGeckoClient.coins.markets({params});
  return {
    props: {
      result
    },
  }
}