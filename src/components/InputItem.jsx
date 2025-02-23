const InputItem = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  pattern,
  title,
  required,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      pattern={pattern}
      title={title}
      required={required}
    />
  );
};

export default InputItem;
