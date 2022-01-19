import { connect } from 'react-redux';

// on importe le composant de présentation
import GetTicketModal from 'src/components/GetTicketModal';


import {
  incrementGuest,
  decrementGuest,
  changeField,
  sendTicketToDb,
} from 'src/actions/ticket';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  // nom de la prop à remplir: élément à récupérer dans le state
  guest: state.ticket.guest,
  nom: state.profile.user.firstname,
  comment: state.ticket.comment,
});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
  // nom de la prop à remplir: fonction qui dispatch l'action
  incrementGuest: (newValue) => {
    dispatch(incrementGuest(newValue.currentTarget.name));
  },
  decrementGuest: (newValue) => {
    dispatch(decrementGuest(newValue.currentTarget.name));
  },
  changeField: (newValue) => {
    dispatch(changeField(newValue.currentTarget.value, newValue.currentTarget.name));
  },
  sendTicketToDb: () => {
    dispatch(sendTicketToDb());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(GetTicketModal);
