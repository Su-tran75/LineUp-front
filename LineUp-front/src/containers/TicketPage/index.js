import { connect } from 'react-redux';

// on importe le composant de présentation
import TicketPage from 'src/components/TicketPage';

import { loadTicketInfos, updateUserTicket } from 'src/actions/profile';
import { archiveTicketResto, loadTicketList } from 'src/actions/ticket';
import {updateUserInfo } from 'src/actions/auth';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  ticketInProgress: state.profile.user.current_ticket,
  status: state.profile.ticket.status,
  estimatedTime: state.profile.ticket.estimated_time,
  isLogged: state.auth.isLogged,
  ticket: state.profile.ticket,
  // il faut que je recupere la liste des tickets du restau correpsondant
  ticketsCount: state.profile.ticketList,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  loadTicketInfos: () => {
    dispatch(loadTicketInfos());
  },

  archiveTicket: () => {
    dispatch(archiveTicketResto());
  },

  updateUserTicket: () => {
    dispatch(updateUserTicket());
  },

  loadTicketList: () => {
    dispatch(loadTicketList());
  },

  updateUserInfo: () => {
    dispatch(updateUserInfo());
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(TicketPage);
