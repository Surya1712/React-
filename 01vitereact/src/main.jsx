import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <App />

// );

function MyApp() {
  return (
    <div>
      <h1>Custom App!</h1>
    </div>
  );
}
// ReactDOM.createRoot(document.getElementById("root")).render(
// <MyApp />
// );

// const reactElement = {
//   type: "a",
//   props: {
//     href: "https://google.com",
//     target: "_blank",
//   },
//   children: "Click eme to visit google",
// };

const anotherUser = "Chai aur React";
const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_blank" },
  "Click me to visit google ",
  anotherUser
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    Visit google
  </a>
);

// ReactDOM.createRoot(document.getElementById("root")).render(anotherElement);
