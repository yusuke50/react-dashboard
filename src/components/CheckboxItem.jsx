const CheckboxItem = ({
  value: Value,
  id: inputId,
  for: For,
  label: Label,
}) => {
  return (
    <div className='check-box'>
      <input type='checkbox' value={Value} id={inputId} />
      <label htmlFor={For}>{Label}</label>
    </div>
  );
};

export default CheckboxItem;
