import React, { useState } from 'react';
import calculator from '../calculator';
import Editor from './Editor';

const styles = {
  result: {
    padding: '10px',
  },
};

const Calculator = () => {
  const [result, setResult] = useState();

  const calculate = (expression) => {
    try {
      const res = calculator.evaluate({
        expression,
      });

      if (res) {
        setResult(res);
      }
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error(error);
    }
  };

  return (
    <div style={styles.container}>
      <Editor onChange={calculate} />

      <div style={styles.result}>= {result}</div>
    </div>
  );
};

export default Calculator;
