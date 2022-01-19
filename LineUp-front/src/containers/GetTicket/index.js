import { connect } from 'react-redux';

// on importe le composant de présentation
import GetTicket from 'src/components/GetTicket';

import {
  changeField,
  incrementGuest,
  decrementGuest,
  sendTicketToDbFromBo,
  loadTickets
} from 'src/actions/backOffResto';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  nbOfGuest: state.backOffResto.nbOfGuest,
  nameOnTicket: state.backOffResto.nameOnTicket,
  commentOnTicket: state.backOffResto.commentOnTicket,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue) => {
    dispatch(changeField(newValue.currentTarget.value, newValue.currentTarget.name));
  },
  incrementGuest: (newValue) => {
    dispatch(incrementGuest(newValue.currentTarget.name));
  },
  decrementGuest: (newValue) => {
    dispatch(decrementGuest(newValue.currentTarget.name));
  },
  sendTicketToDbFromBo: () => {
    console.log(1)
    dispatch(sendTicketToDbFromBo());
  },

  loadTickets: () => {
    dispatch(loadTickets());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(GetTicket);
