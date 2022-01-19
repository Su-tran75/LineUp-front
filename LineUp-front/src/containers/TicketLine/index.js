import { connect } from 'react-redux';

// on importe le composant de présentation
import TicketLine from 'src/components/TicketLine';

import {
  loadTickets,
  archiveTicketFromBo,
  setCurrentTicket,
  updateUserFromBo,
} from 'src/actions/backOffResto';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  tickets: state.backOffResto.tickets,
  ticketCounter: state.backOffResto.ticketCounter,
  isLoadingTickets: state.backOffResto.isLoadingTickets,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadTickets: () => {
    dispatch(loadTickets());
  },
  archiveTicketFromBo: () => {
    dispatch(archiveTicketFromBo());
  },
  setCurrentTicket: (newId) => {
    dispatch(setCurrentTicket(newId));
  },
  updateUserFromBo: () => {
    dispatch(updateUserFromBo());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(TicketLine);
