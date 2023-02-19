import axios from "axios";
import React, { useState, useEffect } from "react";

export default function HookCounterThree() {
  const [name, setName] = useState("INITIAL");
  useEffect(() => {
    const fetchAllCoins = async () => {
      const { data } = await axios.get(
        "https://api.coingecko.com/api/v3/coins/list"
      );
      console.log(data);
    };
    fetchAllCoins();
  }, []);
  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Name"
          onChange={(e) => setName(e.target.value)}
        />
        <input type="email" placeholder="Email" />
      </form>
      <button onClick={() => console.log(name)}>Press</button>
      <p>{name}</p>
    </div>
  );
}
