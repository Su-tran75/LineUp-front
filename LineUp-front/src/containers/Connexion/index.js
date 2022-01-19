import { connect } from 'react-redux';

// on importe le composant de présentation
import Connexion from 'src/components/Connexion';

import { displayLogin, } from 'src/actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  toDisplay: state.auth.toDisplay,
  isLogged: state.auth.isLogged,
  role: state.profile.user.roles,
  
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Connexion);
