import React from "react";
import { Link } from "react-router-dom";

import App from "./App";
import { Category } from "./pages/Category";

export default function Routes() {
    return (
        <div>
          <h1>Home</h1>
          <nav>
            <Link to="/">Home</Link> |{" "}
            <Link to="category">Category</Link>
          </nav>
        </div>
      );
  }