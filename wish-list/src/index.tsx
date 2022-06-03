import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/app.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import WishForm from "./pages/AddWish/WishForm";
import WishList from "./pages/WishList/WishList";
import { Archive } from "@mui/icons-material";
import NoPage from "./pages/NoPage";
import WishArchive from "./pages/Archive/WishArchive";
import Navbar from "./pages/Navbar";
import { WishModel } from "./models/WishModel";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<App />}></Route>
      <Route path="wish-list" element={<WishList />}></Route>
      <Route
        path="add-wish"
        element={<WishForm model={{} as WishModel} />}
      ></Route>
      <Route path="archive" element={<WishArchive />}></Route>
      <Route path="*" element={<NoPage />}></Route>
    </Routes>
  </BrowserRouter>
);

reportWebVitals();
