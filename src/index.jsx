import "./style.css";
import { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./app";

const root = ReactDOM.createRoot(document.querySelector("#root"));

root.render(
    <App />
);
