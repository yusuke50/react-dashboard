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
      className='mb-2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-theme-500 focus:border-theme-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-theme-500 dark:focus:border-theme-500'
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
