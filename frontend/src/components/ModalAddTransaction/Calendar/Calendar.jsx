import PropTypes from "prop-types";
import Datetime from "react-datetime";
import "react-datetime/css/react-datetime.css";
import css from "./Calendar.module.css";

export const Calendar = ({ date, onChange }) => {
  return (
    <Datetime
      className={css.calendar}
      initialValue={date}
      onChange={(newDate) => onChange(newDate)}
      dateFormat="DD.MM.YYYY"
      timeFormat={false}
      closeOnSelect="true"
    />
  );
};

Calendar.propTypes = {
  date: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};
