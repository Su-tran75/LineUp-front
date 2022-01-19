import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

import { NavLink } from 'react-router-dom';

// == Import
import './home.scss';
import Infos from 'src/containers/Infos';
import SearchBar from 'src/containers/SearchBar';
import CardRestaurant from './CardRestaurant';
import LoaderHome from './LoaderHome';

// == Composant
const Home = ({
  loadRestaurants,
  restaurantsArr,
  isOpenInfosDisplay,
  isLoadingHome,
}) => {
  useEffect(() => {
    loadRestaurants();
  }, []);

  const cssClassSearch = classNames('home-searchBar', { open: isOpenInfosDisplay });
  const cssClassInfos = classNames('home-burger', { open: isOpenInfosDisplay });
  const cssCLassRestaurantList = classNames('home-list', { open: isOpenInfosDisplay });
  return (
    <div className="home">
      <div className="home-header">
        <div className={cssClassInfos}>
          <Infos />
        </div>
        <div className={cssClassSearch}>
          <SearchBar />
        </div>
      </div>
      {isLoadingHome && <LoaderHome />}
      {!isLoadingHome && (
      <div className={cssCLassRestaurantList}>
        {restaurantsArr.map((restaurant) => (
          <NavLink to={`/${restaurant.id}/${restaurant.name}`} key={restaurant.id}>
            <CardRestaurant {...restaurant} />
          </NavLink>
        ))}
      </div>
      )}
      {!isLoadingHome && restaurantsArr.length < 1 && (
        <div className="home-list">
          <div className="home-no-result">
            La recherche n'a renvoyé aucun résultat
          </div>
        </div>
      )}
    </div>
  );
};

Home.propTypes = {
  isOpenInfosDisplay: PropTypes.bool.isRequired,
  isLoadingHome: PropTypes.bool.isRequired,
  loadRestaurants: PropTypes.func.isRequired,
  restaurantsArr: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

// == Export
export default Home;
