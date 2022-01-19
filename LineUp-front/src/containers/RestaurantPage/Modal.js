import { connect } from 'react-redux';

// on importe le composant de présentation
import Modal from 'src/components/RestaurantPage/Modal';
import {isModalOpen} from 'src/actions/restaurant'

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  isLogged: state.auth.isLogged,
  role: state.profile.user.roles,
  ticketInProgress: state.profile.user.current_ticket,
  isModalOpen : state.restaurant.isModalOpen,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  modalOpen: () => {
    dispatch(isModalOpen());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Modal);
