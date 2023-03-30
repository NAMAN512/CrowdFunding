import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as  Router } from 'react-router-dom';
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import { Goerli } from "@thirdweb-dev/chains";

import { StateContextProvider } from './context';
import App from "./App";
import "./styles/Home.css";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
      <ThirdwebProvider activeChain={ ChainId.Goerli }>
        <Router>
          <StateContextProvider>
            <App />
          </StateContextProvider>
        </Router>
      </ThirdwebProvider>
    
  </React.StrictMode>
);
