import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import TicketMini from 'src/components/TicketMini';
import ConfirmationNumberIcon from '@material-ui/icons/ConfirmationNumber';
import LoaderTicketLine from './LoaderTicketLine';

// import { tickets } from 'src/assets/data';

import './ticketLine.scss';

const TicketLine = ({
  loadTickets,
  ticketCounter,
  archiveTicketFromBo,
  tickets,
  setCurrentTicket,
  updateUserFromBo,
  isLoadingTickets,
}) => {
  // useEffect(() => {

  // }, [archiveTicketFromBo]);

  useEffect(() => {
    loadTickets();
  }, []);

  return (
    <div className="ticket-line-component">
      {isLoadingTickets && <LoaderTicketLine />}
      {!isLoadingTickets && (
      <>
        <div className="ticket-line-header">
          <div className="ticket-line-counter">{ticketCounter}</div>
          <div className="ticket-line-infos">Tickets en attente</div>
        </div>
        <div className="ticket-line-list">
          {tickets.map((ticket) => (
            <TicketMini
              {...ticket}
              key={ticket.id}
              ticket={ticket}
              archiveTicketFromBo={archiveTicketFromBo}
              setCurrentTicket={setCurrentTicket}
              updateUserFromBo={updateUserFromBo}
            />
          ))}
        </div>
      </>
      )}
    </div>
  );
};

TicketLine.propTypes = {
  isLoadingTickets: PropTypes.bool.isRequired,
  archiveTicketFromBo: PropTypes.func.isRequired,
  setCurrentTicket: PropTypes.func.isRequired,
  updateUserFromBo: PropTypes.func.isRequired,
  loadTickets: PropTypes.func.isRequired,
  ticketCounter: PropTypes.number.isRequired,
  tickets: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    }).isRequired,
  ).isRequired,
};

export default TicketLine;
