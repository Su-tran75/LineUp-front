import { connect } from 'react-redux';

// on importe le composant de présentation
import PrivateRoute from 'src/components/PrivateRoute';

const mapStateToProps = (state) => ({

  isLogged: state.auth.isLogged,
  role: state.profile.user.roles,
});

// === création de l'assistant
export default connect(mapStateToProps, null)(PrivateRoute);
