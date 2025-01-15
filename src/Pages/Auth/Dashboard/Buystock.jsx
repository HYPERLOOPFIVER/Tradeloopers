import React, { useEffect, useState } from "react";
import { db } from "../../../Firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../../Firebase";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "../BuySellPage.module.css";
import BottomNavbar from "./BottomNavbar";

const Buy = () => {
  const [user] = useAuthState(auth);
  const [portfolio, setPortfolio] = useState(null);
  const [userData, setUserData] = useState(null);
  const [stockPrices, setStockPrices] = useState({});
  const [symbol, setSymbol] = useState("");
  const [quantity, setQuantity] = useState(1);
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
        } else {
          console.log("Portfolio not found");
        }
      }
    };

    const fetchUserData = async () => {
      if (user) {
        const userRef = doc(db, "users", user.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setUserData(userSnap.data());
        } else {
          console.log("User data not found");
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

  return (
    <>
     <center className={styles.cent}>
        <h3 className={styles.head}>StockSimHub</h3>
      </center>
      <div className={styles.dashboard}>
        <h1>Welcome back, {userData?.Name}</h1>
        <p>Email: {userData?.email}</p>

        <h2>"Money Isn’t Just Currency, It’s Power."</h2>

        <h3>Buy Stocks</h3>
        <div className={styles.buyStock}>
          <input
            type="text"
            placeholder="Stock Symbol (e.g., AMZN)"
            value={symbol}
            onChange={(e) => setSymbol(e.target.value)}
            onBlur={() => fetchStockPrice(symbol)}
          />
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            min="1"
            placeholder="Quantity"
          />
          <button onClick={handleBuyStock}>Buy</button>
          <p>Current Price: ${stockPrices[symbol] || "Type Stock Symbol...."}</p>
        </div>
<h3 className={styles.bk}>disiplaytest</h3>
        <BottomNavbar />
      </div>
    </>
  );
};

export default Buy;
