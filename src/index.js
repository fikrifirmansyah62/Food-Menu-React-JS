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
  return (
    <main className="menu">
      <h2>Menu items</h2>

      <ul className="foods">
        {data.map((food) => (
          <Food
            foodObj={food}
            key={food.nama}
          />
        ))}
      </ul>

      {/* <Food
        nama="Nasi Goreng"
        harga={20000}
        deskripsi="Nasi goreng dengan rasa pedas"
        foto="food/nasi-goreng.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      /> */}
    </main>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const jamBuka = 8;
  const jamTutup = 20;

  if (hour < jamBuka || hour > jamTutup) {
    alert("Warteg Jaya Abadi Tutup");
  } else {
    alert("Warteg Jaya Abadi Buka");
  }

  return (
    <footer className="footer">
      {new Date().getFullYear()} Warteg Jaya Abadi || Jam Buka {jamBuka} - Jam Tutup {jamTutup}{" "}
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
