import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { store } from "./store";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthLayout from "./layout/AuthLayout";
import Login from "./pages/Login";
import ProtectedLayout from "./layout/ProtectedLayout";
import Signup from "./pages/Signup";
import HomeLayout from "./layout/HomeLayout";
import Home from "./pages/Home";
import Searched from "./pages/Searched";
import Recipe from "./pages/Recipe";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<App />}>
            <Route element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Signup />} />
            </Route>
            <Route element={<ProtectedLayout />}>
              <Route element={<HomeLayout />}>
                <Route index element={<Home />} />
                <Route path="searched/:search" element={<Searched />} />
                <Route path="recipe/:id" element={<Recipe />} />
              </Route>
            </Route>
          </Route>
          <Route
            path="*"
            element={
              <div>
                <h1>Page Not Found</h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
