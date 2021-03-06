import React from "react";
import { Route } from "wouter";
import EntityPage from "./pages/EntityPage";
import {AddEntityPage} from "./pages/AddEntityPage";
import EntitiesPage from "./pages/EntitiesPage";
import { EntitiesContextProvider } from "./context/EntitiesContext";
import constants from "./constants/router.constants";

const Router = () => {
  return (
    <>
        <EntitiesContextProvider>
          <Route
              component={EntitiesPage}
              path={constants.router.entities}
          />
          <Route
              component={EntityPage}
              path={constants.router.entity}
          />
        </EntitiesContextProvider>
    </>
  );
}

export default Router;