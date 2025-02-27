import React from "react";
import { createRoot } from "react-dom";
import Pizza from "./Pizza.jsx";

const App = () => {
  return React.createElement(
    "div",
    {},
    React.createElement("h1", {}, "Padre Gino's"),
    React.createElement(Pizza, { name: "Hawaiian", ingredients: "Pineapple" }),
    React.createElement(Pizza, {
      name: "Cheese",
      ingredients: "Mozzarella cheese",
    }),
    React.createElement(Pizza, {
      name: "Tandoori chicken",
      ingredients: "Chicken",
    }),
    React.createElement(Pizza, {
      name: "Veggie Delight",
      ingredients: "Veggies",
    }),
    React.createElement(Pizza, {
      name: "BBQ chicken",
      ingredients: "Bbq sauce",
    }),
  );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(React.createElement(App));
