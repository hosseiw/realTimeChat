import React from "react";
import ReactDOM from "react-dom/client";
import App from "./views/app/App"
import "./assets/css/style.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <div className="w-full h-full flex flex-col justify-center items-center align-middle bg-[#212121] text-white text-xl">
      <App/>
    </div>
  </React.StrictMode>
);
