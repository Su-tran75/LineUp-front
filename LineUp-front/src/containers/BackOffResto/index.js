import { connect } from 'react-redux';

// on importe le composant de présentation
import BackOffResto from 'src/components/BackOffResto';

import { sendStatusToDb } from 'src/actions/backOffResto';
import { logOut } from 'src/actions/auth';


// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  status: state.backOffResto.status,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  sendStatusToDb: (newValue) => {
    dispatch(sendStatusToDb(newValue));
  },
  handleLogout: () => {
    dispatch(logOut());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(BackOffResto);
