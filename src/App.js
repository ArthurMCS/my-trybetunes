import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Login from './pages/Login';
import Search from './pages/Search';
import Album from './pages/Album';
import Favorites from './pages/Favorites';
import Profile from './pages/Profile';
import ProfileEdit from './pages/ProfileEdit';
import NotFound from './pages/NotFound';
import Header from './components/Header';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Route
          exact
          path="/"
          render={ (propsRouter) => <Login { ...propsRouter } /> }
        />
        <Route
          path="/search"
          render={ () => (
            <>
              <Header />
              <Search />
            </>
          ) }
        />
        <Route
          path="/album/:id"
          render={ (propsRouter) => (
            <>
              <Header />
              <Album { ...propsRouter } />
            </>
          ) }
        />
        <Route
          path="/favorites"
          render={ () => (
            <>
              <Header />
              <Favorites />
            </>
          ) }
        />
        <Route
          exact
          path="/profile"
          render={ () => (
            <>
              <Header />
              <Profile />
            </>) }
        />
        <Route
          exact
          path="/profile/edit"
          render={ () => (
            <>
              <Header />
              <ProfileEdit />
            </>) }
        />
        <Route
          path="*"
          render={ () => <NotFound /> }
        />
      </BrowserRouter>
    );
  }
}

export default App;
