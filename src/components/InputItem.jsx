import { Input } from 'antd';
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
    <div className='input-group'>
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        name={name}
        pattern={pattern}
        title={title}
        required={required}
      />
    </div>
  );
};

export default InputItem;
