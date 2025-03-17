import { Checkbox } from 'antd';

const CheckboxItem = ({ value, id, name, checked, onChange, label }) => {
  return (
    <div className='check-box'>
      <Checkbox
        value={value}
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
      >
        {label}
      </Checkbox>
    </div>
  );
};

export default CheckboxItem;
