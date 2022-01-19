import { connect } from 'react-redux';

// on importe le composant de présentation
import Interval from 'src/components/Interval';

import {
  sendIntervalToDb,
  changeField,
  incrementInterval,
  decrementInterval,
} from 'src/actions/backOffResto';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
  intervalValue: state.backOffResto.intervalValue,
  nextTicketHour: state.backOffResto.nextTicketHour,
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
  sendIntervalToDb: (newValue) => {
    dispatch(sendIntervalToDb(newValue));
  },
  changeField: (newValue) => {
    dispatch(changeField(newValue.currentTarget.value, newValue.currentTarget.name));
  },
  incrementInterval: (newValue) => {
    console.log(newValue.currentTarget.name)
    dispatch(incrementInterval(newValue.currentTarget.name));
  },
  decrementInterval: (newValue) => {
    console.log(newValue.currentTarget.name)
    dispatch(decrementInterval(newValue.currentTarget.name));
  },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Interval);
