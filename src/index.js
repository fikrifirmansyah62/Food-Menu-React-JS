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
      <Food />
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

function Food() {
  return (
    <div>
      <img
        src="food/ayam-penyet.jpg"
        alt="ayam penyet"
        width={100}
        height={70}
      />
      <h3>Ayam Penyet</h3>
      <p>Ayam Penyet adalah makanan khas Indonesia yang terbuat dari daging ayam yang telah diberi bumbu khas Indonesia. Daging ayam yang digunakan dalam makanan ini adalah daging ayam yang sudah dikukus.</p>
      <img
        src="food/bakso.jpg"
        alt="bakso"
        width={100}
        height={70}
      />
      <h3>Bakso</h3>
      <p>Bakso adalah makanan khas Indonesia yang terbuat dari daging kambing yang telah diberi bumbu khas Indonesia. Daging kambing yang digunakan dalam makanan ini adalah daging kambing yang sudah dikukus.</p>
      <img
        src="food/gado-gado.jpg"
        alt="gado-gado"
        width={100}
        height={70}
      />
      <h3>Gado-gado</h3>
      <p>Gado-gado adalah makanan khas Indonesia yang terbuat dari daging sapi yang telah diberi bumbu khas Indonesia. Daging sapi yang digunakan dalam makanan ini adalah daging sapi yang sudah dikukus.</p>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
