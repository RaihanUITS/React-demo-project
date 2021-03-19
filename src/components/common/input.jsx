import React from "react";

const Input = ({ type, name, label, value, error, onChange }) => {
  return (
    <div className="form-group">
      <label htmlFor={name} className="form-label">
        {label}
      </label>
      <input
        value={value}
        onChange={onChange}
        id={name}
        type={type}
        name={name}
        className="form-control"
      />

      {error && <div className="alert alert-danger">{error}</div>}
    </div>
  );
};

export default Input;
