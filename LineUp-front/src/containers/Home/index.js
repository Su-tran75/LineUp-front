import { connect } from 'react-redux';

// on importe le composant de présentation
import Home from 'src/components/Home';

import { loadRestaurants } from 'src/actions/restaurant';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  restaurantsArr: state.restaurant.restaurantsArr,
  isOpenInfosDisplay: state.restaurant.isOpenInfosDisplay,
  isLoadingHome: state.restaurant.isLoadingHome,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadRestaurants: () => {
    dispatch(loadRestaurants());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Home);
