import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import InfoTicket from './InfoTicket';

import './ticketPage.scss';
import { UPDATE_USER_TICKET } from '../../actions/ticket';

const TicketPage = ({
  ticketInProgress,
  loadTicketInfos,
  isLogged,
  ticket,
  ticketsCount,
  archiveTicket,
  status,
  updateUserTicket,
  loadTicketList,
  estimatedTime,
  updateUserInfo,
}) => {
  if (isLogged && ticketInProgress) {
    useEffect(() => {
      loadTicketInfos();
      updateUserInfo();
    }, []);
  }

  return (
    <div className="ticket-page-container">
      <h1 className="ticket-page-title">Mon Ticket</h1>
      {!isLogged && <NavLink to="/login"><div className="noTicket">Veuillez vous connecter ou vous inscrire pour prendre un ticket </div></NavLink>}
      {isLogged && ticketInProgress
        && (
        <InfoTicket
          ticketsCount={ticketsCount}
          ticket={ticket}
          archiveTicket={archiveTicket}
          updateUserTicket={updateUserTicket}
          loadTicketList={loadTicketList}
          loadTicketInfos={loadTicketInfos}
          ticketInProgress={ticketInProgress}
          estimatedTime={estimatedTime}
        />
        )}
      {isLogged && !ticketInProgress && <div className="noTicket">Vous n'avez pas de ticket en cours...</div>}
    </div>
  );
};

TicketPage.propTypes = {
  isLogged: PropTypes.bool.isRequired,
  ticketsCount: PropTypes.array.isRequired,
  loadTicketInfos: PropTypes.func.isRequired,
  archiveTicket: PropTypes.func.isRequired,
  updateUserTicket: PropTypes.func.isRequired,
  loadTicketList: PropTypes.func.isRequired,
  updateUserInfo: PropTypes.func.isRequired,
  ticket: PropTypes.object,
  status: PropTypes.number,
  estimatedTime: PropTypes.number,
  ticketInProgress: PropTypes.number,
};

TicketPage.defaultProps = {
  ticket: {},
  status: null,
  ticketInProgress: null,
  estimatedTime: null,
};

export default TicketPage;
