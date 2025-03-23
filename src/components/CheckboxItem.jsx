const CheckboxItem = ({ value, id, name, checked, onChange, label }) => {
  return (
    <div className='flex items-center mb-4'>
      <input
        id={id}
        type='checkbox'
        value={value}
        name={name}
        checked={checked}
        onChange={onChange}
        className='w-4 h-4 text-theme-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-theme-500 dark:focus:ring-theme-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
      />
      <label
        htmlFor={id}
        className='ms-2 text-sm font-medium text-gray-900 dark:text-gray-300'
      >
        {label}
      </label>
    </div>
  );
};

export default CheckboxItem;
