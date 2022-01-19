import { connect } from 'react-redux';

// on importe le composant de présentation
import App from 'src/components/App';

import { setToken } from 'src/actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  isLogged: state.auth.isLogged,
  restaurants: state.restaurant.restaurantsArr,
  role: state.profile.user.roles,
  avatar: state.profile.user.avatar,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  setToken: (token) => {
    dispatch(setToken(token));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);
