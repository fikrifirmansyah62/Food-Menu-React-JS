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
  // const foods = [];
  const foods = data;
  const numFoods = foods.length;

  return (
    <main className="menu">
      <h2>Menu items</h2>
      {numFoods > 0 ? (
        <React.Fragment>
          <p>Aneka makanan indonesia yang disajikan oleh warteg jaya abadi sebagai pemenuhan makanan kesehatan yang diperlukan dalam kehidupan sehari-hari.</p>

          <ul className="foods">
            {data.map((food) => (
              <Food
                foodObj={food}
                key={food.nama}
              />
            ))}
          </ul>
        </React.Fragment>
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

  if (isOpen) {
    return (
      <FooterOpenHour
        jamBuka={jamBuka}
        jamTutup={jamTutup}
      />
    );
  } else {
    return (
      <FooterClosedHour
        jamBuka={jamBuka}
        jamTutup={jamTutup}
      />
    );
  }
}

function FooterOpenHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="order">
        <button className="btn">Order</button>
        <p>
          {new Date().getFullYear()} - All rights reserved - Warung Jaya Abadi || Buka jam {jamBuka}.00 - Tutup jam {jamTutup}.00
        </p>
      </div>
    </footer>
  );
}

function FooterClosedHour({ jamBuka, jamTutup }) {
  return (
    <footer className="footer">
      <div className="closed">
        <h3>Warung Jaya Abadi TUTUP</h3>
        <p>
          <b>{new Date().getFullYear()}</b> - All rights reserved - Warung Jaya Abadi || Buka jam {jamBuka}.00 WIB - Tutup jam {jamTutup}.00 WIB
        </p>
      </div>
    </footer>
  );
}

function Food(props) {
  const { nama, deskripsi, harga, foto, stok } = props.foodObj;
  return (
    <li className={`food ${!stok ? "sold-out" : ""}`}>
      <img
        src={foto}
        alt={nama}
      />
      <div>
        <h3>{nama}</h3>
        <p>{deskripsi}</p>
        <p>
          <b>{stok ? harga : "Habis"}</b>
        </p>
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
