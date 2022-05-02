import React from "react";
import "./App.css";
import { Route } from "wouter";
import { PlayersPage } from "./pages/playersPage";
import StaticContex from "./context/StaticContex";
import { PlayersContextProvider } from "./context/PlayersContext";
import { AppBar , Toolbar , IconButton , Typography, Button , BottomNavigation , BottomNavigationAction } from '@material-ui/core';
import RestoreIcon from '@material-ui/icons/Restore';
import FavoriteIcon from '@material-ui/icons/Favorite';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import { useTranslation } from "react-i18next";
import Amplify from 'aws-amplify';
import aws_exports from './aws-exports';
Amplify.configure(aws_exports);

function App() {
  const { t } = useTranslation();

  return (
    //objeto de static context creado para usar las variables globales en toda la app
    <StaticContex.Provider
      value={{
        name: "Facu",
        lastName: "Chaves",
        isAdult: true,
      }}
    >
      <div className="App">
        <section className="App-content">
          <AppBar position="static">
            <Toolbar>
              <IconButton edge="start" color="inherit" aria-label="menu">
              </IconButton>
              <Typography variant="h6" >
                {t('common.news')}
              </Typography>
              <Button color="inherit">{t('common.login')}</Button>
            </Toolbar>
          </AppBar>
        </section>
        <section className="">

          {/* objeto de static context creado para usar las variables globales en toda la app
              tener en cuenta que tiene que "envolver" los componentes donde voy a querer consumirlo
          */}
          
          <PlayersContextProvider>
            <Route
              component={PlayersPage}
              path="/players"
            />
          </PlayersContextProvider>
          
        </section>
        <section>
          <BottomNavigation>
            <BottomNavigationAction label="Recents" icon={<RestoreIcon />} />
            <BottomNavigationAction label="Favorites" icon={<FavoriteIcon />} />
            <BottomNavigationAction label="Nearby" icon={<LocationOnIcon />} />
          </BottomNavigation>
        </section>

      </div>
    </StaticContex.Provider>
  );
}

 export default App;
