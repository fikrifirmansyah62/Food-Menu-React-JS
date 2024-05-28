import React from "react";
import ReactDOM from "react-dom/client";
import data from "./data.js";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Warteg Jaya Abadi</h1>
    </header>
  );
}

function Menu() {
  const foods = [];
  // const foods = data;
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h2>Menu items</h2>
      {numFoods > 0 ? (
        <ul className="foods">
          {data.map((food) => (
            <Food
              foodObj={food}
              key={food.nama}
            />
          ))}
        </ul>
      ) : (
        <p>Mohon Maaf Stok Habis, Silahkan Datang Kembali Besok.</p>
      )}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 8;
  const jamTutup = 22;
  const isOpen = hour >= jamBuka && hour <= jamTutup;

  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            {new Date().getFullYear()} Warung Jaya Abadi - All rights reserved. || Buka jam {jamBuka} - Tutup jam {jamTutup}
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="closed">
          <h3>Warung Jaya Abadi TUTUP</h3>
          <p>
            <b>{new Date().getFullYear()}</b> All rights reserved - Warung Jaya Abadi || Buka jam {jamBuka}.00 WIB - Tutup jam {jamTutup}.00 WIB
          </p>
        </div>
      )}
    </footer>
  );
}

function Food(props) {
  console.log(props);
  return (
    <li className="food">
      <img
        src={props.foodObj.foto}
        alt={props.foodObj.nama}
        width={100}
        height={70}
      />
      <div className="">
        <h3>{props.foodObj.nama}</h3>
        <p>{props.foodObj.deskripsi}</p>
        <b>Rp. {props.foodObj.harga}</b>
        <span>Stok : {props.foodObj.stok}</span>
      </div>
    </li>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
