import React, { memo } from "react";
import PropTypes from "prop-types";

function SelectIItem(props) {
  const { name, label, message } = props;
  return (
    <div className="list__select">
      <select className="select__item" defaultValue name={name} onChange={props.handleChange}>
        <option value="" hidden>
          {label}
        </option>
        <option value={message} disabled>
          {message}
        </option>
      </select>
    </div>
  );
}

SelectIItem.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
};

export default memo(SelectIItem);