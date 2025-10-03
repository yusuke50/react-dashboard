import { useState } from 'react';
import InputItem from '../components/InputItem';
import WorkerClass from '../services/worker.js?worker';

const Dolor = () => {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [resultValue, setResultValue] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (window.Worker) {
      const myWorker = new WorkerClass();

      if (name == 'number1') {
        setNumber1(value);
        myWorker.postMessage([value, number2]);
      } else {
        setNumber2(value);
        myWorker.postMessage([number1, value]);
      }

      console.log('Message posted to worker');

      myWorker.onmessage = (e) => {
        console.log('🚀 ~ handleChange ~ e:', e);

        setResultValue(e.data);
        console.log('Message received from worker');
      };
    } else {
      console.log("Your browser doesn't support web workers.");

      if (name === 'number1') {
        setNumber1(value);
      } else {
        setNumber2(value);
      }
    }
  };

  return (
    <>
      <h1>Dolor</h1>
      <form>
        <InputItem
          type='text'
          id='number1'
          name='number1'
          value={number1}
          placeHolder='Multiply number 1'
          pattern='^[0-9]*$'
          onChange={handleChange}
        />
        <InputItem
          type='text'
          id='number2'
          name='number2'
          value={number2}
          placeHolder='Multiply number 2'
          pattern='^[0-9]*$'
          onChange={handleChange}
        />
      </form>

      <p>Result: {resultValue}</p>
    </>
  );
};

export default Dolor;
