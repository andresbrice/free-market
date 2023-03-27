import React from "react";

const Input = ({
  label,
  htmlFor,
  id,
  name,
  type,
  pattern,
  onChange,
  maxLength,
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          id={id}
          name={name}
          type={type}
          autoComplete="off"
          required
          className="w-full border border-gray-200 px-3 py-2 rounded-lg shadow-sm focus:outline-none focus:border-gray-900 focus:ring-1 focus:ring-gray-900"
          pattern={pattern}
          onChange={onChange}
          maxLength={maxLength}
        />
      </div>
    </div>
  );
};

export default Input;
