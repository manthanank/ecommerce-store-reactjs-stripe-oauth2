import React from "react";
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import App from "./App";
import { CartProvider } from "./context/cart_context";
import { ProductsProvider } from "./context/products_context";
import { UserProvider } from "./context/user_context";

ReactDOM.render(
  <Auth0Provider
  domain="manthanank.us.auth0.com"
  clientId="KI8AjySzCfIcktkBi9XuhnakaB7wcmud"
  redirectUri={window.location.origin}
  cacheLocation="localstorage"
  >
    <UserProvider>
      <CartProvider>
        <ProductsProvider>
          <App />
        </ProductsProvider>
      </CartProvider>
    </UserProvider>
  </Auth0Provider>,
  document.getElementById("root")
);
