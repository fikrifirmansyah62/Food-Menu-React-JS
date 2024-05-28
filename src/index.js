import React from "react";
import ReactDOM from "react-dom/client";

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
      <Food
        nama="Nasi Goreng"
        harga={20000}
        deskripsi="Nasi goreng dengan rasa pedas"
        foto="food/nasi-goreng.jpg"
        stok={Math.random() >= 0.5 ? true : false}
      />
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
    <div className="food">
      <img
        src={props.foto}
        alt={props.nama}
        width={100}
        height={70}
      />
      <div>
        <h3>{props.nama}</h3>
        <b>Rp. {props.harga}</b>
        <p>{props.deskripsi}</p>
        <p>Stok : {props.stok}</p>
      </div>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
