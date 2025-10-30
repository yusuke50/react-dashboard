type InputItemProps = {
  type?: string;
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name?: string;
  pattern?: string;
  title?: string;
  required?: boolean;
};

const InputItem = ({
  type,
  placeholder,
  value,
  onChange,
  name,
  pattern,
  title,
  required,
}: InputItemProps) => {
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
