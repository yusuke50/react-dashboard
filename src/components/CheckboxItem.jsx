const CheckboxItem = ({ value, id, name, checked, onChange, label }) => {
  return (
    <div className='check-box'>
      <input
        type='checkbox'
        value={value}
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
};

export default CheckboxItem;
