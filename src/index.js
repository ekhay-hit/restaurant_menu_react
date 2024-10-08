import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// data
const menuData = [
  {
    name: "Tagine ",
    ingredients: "Split Chicken Breasts with a Saucy, Moroccan Twist",
    price: 16,
    photoName: "menu_items/chicken_tagine.jpg",
    soldOut: false,
  },
  {
    name: "Couscous",
    ingredients: "Couscous with vegetables, meat, and tfaya,",
    price: 15,
    photoName: "menu_items/couscous.jpg",
    soldOut: false,
  },
  {
    name: "Mixed platter",
    ingredients: "Chicken Kabob, beef and merguez ",
    price: 12,
    photoName: "menu_items/mixed_platter.jpg",
    soldOut: false,
  },
  {
    name: "Chicken Kabob",
    ingredients: "Chicken Kabob, rice, salad",
    price: 13,
    photoName: "menu_items/chicken_kabob.jpg",
    soldOut: false,
  },
  {
    name: "Kofta Sandwich",
    ingredients: "Ground beef, mixed-salad, and frize",
    price: 15,
    photoName: "menu_items/Kofta_Sandwich.jpg",
    soldOut: true,
  },
  {
    name: "Vegetable Pizza",
    ingredients: "olives, spinach, and mozarella cheese",
    price: 18,
    photoName: "menu_items/pizza_vegetable.jpg",
    soldOut: false,
  },
];

// Main app
function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

// selecting where the main up should be rendered
const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering main app
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// componenets that are added to main app
// header component
function Header() {
  return (
    <header className="header">
      <h1
        style={{ color: "red", fontSize: "48px", textTransform: "uppercase" }}
      >
        Fast React Moroccan Co.
      </h1>
    </header>
  );
}

// Menu component
function Menu() {
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {menuData.length > 0 ? (
        <ul className="foods">
          {menuData.map((food) => (
            <Food objectFood={food} key={food.name} />
          ))}
        </ul>
      ) : null}
    </main>
  );
}

// footer component
function Footer() {
  //   return React.createElement("footer", null, "Wea are currently open");
  const hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p> We are open until {closeHour}:00.</p>
          <span>Come visit us or order online.</span>
          <button className="btn">Order</button>
        </div>
      ) : (
        <p>
          Sorry we are closed now; we are happy to welcome you between{" "}
          {openHour}am and {closeHour}pm
        </p>
      )}
    </footer>
  );
}

// Pizza component This will be render in Menu component, and menu will be render in main app
function Food({ objectFood }) {
  return (
    <li className={`food ${objectFood.soldOut ? "sold-out" : ""}`}>
      <img src={objectFood.photoName} alt={objectFood.name} />
      <div>
        <h3>{objectFood.name}</h3>
        <p>{objectFood.ingredients} </p>
        <span>{objectFood.soldOut ? "SOLD OUT" : objectFood.price}</span>
      </div>
    </li>
  );
}
