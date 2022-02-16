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
        const parsed = JSON.parse(res);
        setResult(parsed[parsed.length - 1]);
      }
    } catch (error) {
      /*  */
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
