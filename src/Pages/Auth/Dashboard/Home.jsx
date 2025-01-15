import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios"; 
import styles from './HomePage.module.css';
import { Link } from "react-router-dom";
import BottomNavbar from "./BottomNavbar";
import Chart from "react-apexcharts"; // Charting library to add real-time graphs for stocks

const HomePage = () => {
  const [user] = useAuthState(auth);
  const [portfolio, setPortfolio] = useState(null);
  const [userData, setUserData] = useState(null);
  const [stockPrices, setStockPrices] = useState({});
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [amountToSell, setAmountToSell] = useState(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    const fetchPortfolio = async () => {
      if (user) {
        const portfolioRef = doc(db, "portfolio", user.uid);
        const portfolioSnap = await getDoc(portfolioRef);
        if (portfolioSnap.exists()) {
          setPortfolio(portfolioSnap.data());
        }
      }
    };

    const fetchUserData = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        }
      }
    };

    fetchPortfolio();
    fetchUserData();
  }, [user, navigate]);

  const fetchStockPrice = async (symbol) => {
    if (!symbol) return;
    const apiKey = "ctg0chhr01qi0nfef030ctg0chhr01qi0nfef03g";

    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/quote?symbol=${symbol}&token=${apiKey}`
      );
      const { c } = response.data;
      setStockPrices((prevState) => ({
        ...prevState,
        [symbol]: c,
      }));
    } catch (error) {
      console.error("Error fetching stock price:", error);
    }
  };

  useEffect(() => {
    if (portfolio) {
      portfolio.stocks.forEach((stock) => {
        fetchStockPrice(stock.symbol);
      });
    }
  }, [portfolio]);

  const handleBuyStock = async () => {
    if (portfolio && symbol && stockPrices[symbol] > 0 && quantity > 0 && userData) {
      const totalCost = stockPrices[symbol] * quantity;
      if (userData.balance < totalCost) {
        alert("Insufficient funds to purchase stock.");
        return;
      }

      const portfolioRef = doc(db, "portfolio", user.uid);
      const userRef = doc(db, "users", user.uid);
      const updatedStocks = [...portfolio.stocks];
      const stockIndex = updatedStocks.findIndex((item) => item.symbol === symbol);

      if (stockIndex !== -1) {
        updatedStocks[stockIndex].quantity += quantity;
      } else {
        updatedStocks.push({
          symbol,
          quantity,
          averagePrice: stockPrices[symbol],
          investment: totalCost,
        });
      }

      await updateDoc(userRef, { balance: userData.balance - totalCost });
      await updateDoc(portfolioRef, { stocks: updatedStocks });

      const portfolioSnap = await getDoc(portfolioRef);
      setPortfolio(portfolioSnap.data());

      const userSnap = await getDoc(userRef);
      setUserData(userSnap.data());

      setSymbol("");
      setQuantity(1);
    }
  };

  const totalGainLoss = portfolio ? portfolio.stocks.reduce((acc, stock) => {
    return acc + (stock.quantity * (stockPrices[stock.symbol] || 0) - stock.investment);
  }, 0).toFixed(2) : 0;

  return (
    <>
    <div className={styles.homePageWrapper}>
      <center className={styles.cent}>
        <h3 className={styles.head}>StockSimHub</h3>
      </center>
      <div className={styles.dashboard}>
        <h1>Welcome {userData?.Name}</h1>
        <p>Email: {userData?.email}</p>
        <h3>Start Your Day with Moneyy</h3>

        <div className={styles.stats}>
          <div className={styles.gainLoss}>
            <h3>Total Gain/Loss Today: ${totalGainLoss}</h3>
          </div>
          <div className={styles.portfolioValue}>
            <h3>Portfolio Value</h3>
            <p>Invested Value: ${portfolio?.stocks.reduce((acc, stock) => acc + stock.investment, 0).toFixed(2)}</p>
            <p>Current Value: ${portfolio?.stocks.reduce(
              (acc, stock) => acc + stock.quantity * (stockPrices[stock.symbol] || 0),
              0
            ).toFixed(2)}</p>
          </div>
        </div>

        <div className={styles.chart}>
          <Chart
            options={{
              chart: {
                id: "portfolio-chart",
                background: "transparent",
              },
              xaxis: {
                categories: portfolio?.stocks.map(stock => stock.symbol) || [],
              },
              colors: ['#00aaff'],
              tooltip: {
                theme: 'dark',
              },
            }}
            series={[
              {
                name: "Portfolio Value",
                data: portfolio?.stocks.map(stock => stock.quantity * (stockPrices[stock.symbol] || 0)) || [],
              },
            ]}
            type="line"
            height="250"
          />
        
        </div>

        <center className={styles.cento}>
        <div className={styles.linnk}>
            <Link to="/bsp">Purchase Stocks</Link>
            
          </div>
        </center>
      </div>
      </div>
      <div><h3>blank</h3></div>
      <BottomNavbar/>
    </>
  );
};

export default HomePage;
