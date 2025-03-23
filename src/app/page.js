'use client'



import Image from "next/image";
import {stockData} from './stock.js';
import {useState} from 'react';


import data from './Investment.js';
export default function Home() {

    const [news, setNews] = useState("")
    const [stocks, setStocks] = useState([]);


    function generateNews() {
           const news = "Market is really high today."
           setNews(news)
    }

    async function generateStockinfo() {
        const data = await stockData();
        setStocks(data);
    }

    return (

        <>
        <section>
            <div className="">
                <h1 className="text-3xl font-bold underline">Hello Everyone to some financial news.</h1>

                <h1 className="text-3xl font-bold underline">
                    Here's some Stock Data
                </h1>
                <button onClick={generateStockinfo} className="p-2 bg-green-600 text-white">
                    Fetch Stock Data
                </button>
                <p>{stocks}</p>
            </div>
        </section>

            <section>

                <div className="content-center">
                    <h1 className="text-3xl font-bold underline">
                    Here's some investment insights.
                </h1>
            </div>
            <button onClick={generateNews} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Generate Reports</button>


            {news && <p className="mt-4 p-2 bg-gray-800 text-white">{news}</p>}
        </section>

    </>
    );

}

