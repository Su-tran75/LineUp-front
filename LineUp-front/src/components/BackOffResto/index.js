import React, { useEffect } from 'react';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import { withStyles } from '@material-ui/core/styles';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

import LineTickets from 'src/containers/TicketLine';
import Interval from 'src/containers/Interval';
import GetTicket from 'src/containers/GetTicket';
import Logout from 'src/components/Logout';

import './backOffResto.scss';

const BackOffResto = ({ status, sendStatusToDb, }) => {
  useEffect(() => {

  }, [<Interval />]);
  const handleChange = () => {
    // Send an action to backOffRestoMiddleware
    sendStatusToDb();
  };
  const IOSSwitch = withStyles((theme) => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      '&$checked': {
        transform: 'translateX(16px)',
        color: theme.palette.common.white,
        '& + $track': {
          backgroundColor: '#52d869',
          opacity: 1,
          border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#52d869',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => (
    <Switch
      focusVisibleClassName={classes.focusVisible}
      disableRipple
      classes={{
        root: classes.root,
        switchBase: classes.switchBase,
        thumb: classes.thumb,
        track: classes.track,
        checked: classes.checked,
      }}
      {...props}
    />
  ));
  return (
    <div className="back-off-resto-container">
      <div className="back-off-resto-header">
        <div className="header-title">
          <h2>Mon espace de travail</h2>
        </div>
        <div className="header-status">
          <FormControlLabel
            control={<IOSSwitch checked={status} onChange={handleChange} name="status" />}
            label=""
          />
        </div>
      </div>
      <div className="back-off-resto-body">
        <div className="line-ticket-container">
          <LineTickets />
        </div>
        <div className="back-off-resto-body-bottom">
          <div className="interval-container">
            <Interval />
          </div>
          <div className="get-ticket-container">
            <GetTicket />
          </div>
        </div>
      </div>
    </div>
  );
};
export default BackOffResto;
