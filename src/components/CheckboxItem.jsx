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
        className='checkbox checkbox-primary'
      />
      <label htmlFor={id} className='ms-2 text-sm font-medium'>
        {label}
      </label>
    </div>
  );
};

export default CheckboxItem;
