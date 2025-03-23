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
      className='input input-primary mb-2'
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
