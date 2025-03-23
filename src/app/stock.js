import axios from 'axios';


export async function stockData() {
  const options = {
  method: 'GET',
  url: 'https://yahoo-finance15.p.rapidapi.com/api/v1/markets/stock/quotes',
  params: {
    ticker: 'AAPL,MSFT,^SPX,^NYA,GAZP.ME,SIBN.ME,GEECEE.NS'
  },
  headers: {
    'x-rapidapi-key': process.env.NEXT_PUBLIC_STOCK_API,
    'x-rapidapi-host': process.env.NEXT_PUBLIC_STOCK_HOST,
  },
};

try {
	const response = await axios.request(options);
	console.log(response.data);
  return response.data;
} catch (e) {
    console.error(e);
    return e;
}

}