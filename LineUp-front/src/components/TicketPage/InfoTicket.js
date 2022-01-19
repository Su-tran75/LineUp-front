import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const InfoTicket = ({
  ticketsCount,
  ticket,
  archiveTicket,
  updateUserTicket,
  loadTicketInfos,
  loadTicketList,
  ticketInProgress,
  estimatedTime,
}) => {
  let realPosition = null;

  // Computing position of the ticket with the tickets array
  const position = () => {
    const find = ticketsCount.find((t) => t.id === ticketInProgress);
    realPosition = ticketsCount.indexOf(find);
    realPosition += 1;
    return realPosition;
  };
  const handleClick = () => {
    archiveTicket();
    updateUserTicket();
  };

  return (
    <div className="info-ticket-container">
      {/* Ternary needed to avoid a script error cause undefined */}
      <div className="ticket-top-container">
        {
          ticket.restaurant ? (
            <img
              className="ticket-picture"
              alt=""
              src={ticket.restaurant.picture}
            />
          ) : null
        }

        {
          ticket.restaurant ? <h2 className="ticket-title">{ticket.restaurant.name} </h2> : null
        }

      </div>
      <div className="ticket-main-container">
        <div className="ticket-position">
          Position : {position()}
        </div>
        <div className="ticket-guests">
          Guests : {ticket.guest}
        </div>
        <div className="ticket-estimated-time">
          Temps d'attente estimé : {estimatedTime} - {estimatedTime + 10 } min
        </div>
        <div className="ticket-paragraph">
          {position() > 1 && (
            <div className="paragraph-top">
              Vous êtes dans la file d'attente ! Pensez à surveiller
              cette page pour recevoir les mises à jour.
            </div>
          )}
          {/* Message is changing when user ticket is the next one */}
          {position() === 1 && (
            <div className="paragraph-top">
              Vous êtes le suivant ! Merci de vous diriger vers le restaurant.
            </div>
          )}
          <div className="paragraph-bottom">
            Veuillez noter que votre temps d'attente peut éventuellement varier.
            Nous vous conseillons d'arriver
            avec votre groupe complet pour pouvoir prendre votre table.
          </div>
        </div>
      </div>
      <div className="ticket-bottom-container">
        <button className="delete-btn" type="button" onClick={() => handleClick()}>Quitter la file</button>
        {
          ticket.restaurant ? (
            <NavLink className="restaurant-link" to={`/${ticket.restaurant.id}/${ticket.restaurant.name}`}>
              <button className="restaurant-btn" type="button">Voir le restaurant</button>
            </NavLink>
          )
            : null

        }

      </div>
    </div>
  );
};

InfoTicket.propTypes = {
  ticketsCount: PropTypes.array.isRequired,
  ticket: PropTypes.object.isRequired,
  archiveTicket: PropTypes.func.isRequired,
  updateUserTicket: PropTypes.func.isRequired,
  loadTicketInfos: PropTypes.func.isRequired,
  loadTicketList: PropTypes.func.isRequired,
  ticketInProgress: PropTypes.number.isRequired,
  estimatedTime: PropTypes.number,
};

InfoTicket.defaultProps = {
  estimatedTime: null,
};

export default InfoTicket;
