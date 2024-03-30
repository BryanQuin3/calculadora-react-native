/* eslint-disable react-hooks/exhaustive-deps */
import {useEffect, useRef, useState} from 'react';
import {ButtonFunctionsType} from '../../utils/types.definitions';

enum Operator {
  add = '+',
  subtract = '-',
  multiply = 'x',
  divide = '÷',
}

export const useCalculator = () => {
  const [number, setNumber] = useState('0');
  const [previousNumber, setPreviousNumber] = useState('0');
  const [formula, setFormula] = useState('');
  const lastOperation = useRef<Operator>();

  useEffect(() => {
    if (lastOperation.current) {
      const firstPart = formula.split(' ').at(0);
      setFormula(`${firstPart} ${lastOperation.current} ${number}`);
    } else {
      setFormula(number);
    }
  }, [number]);

  useEffect(() => {
    const subResult = calculateSubResult();
    if (isNaN(subResult)) {
      setPreviousNumber('undefined');
      return;
    }
    setPreviousNumber(`${subResult}`);
  }, [formula]);

  const buildNumber = (textNumber: string) => {
    if (number === '0' && textNumber === '-') {
      setNumber('-0');
      return;
    }
    if (isNaN(Number(textNumber)) && textNumber !== '.') {
      return;
    }
    if (number === '-0' && textNumber !== '.') {
      setNumber('-' + textNumber);
      return;
    }
    if (number.includes('.') && textNumber === '.') {
      return;
    }
    if (number === '0' && textNumber !== '.') {
      setNumber(textNumber);
      return;
    }
    if (number.length > 2 && number.includes('.') && textNumber !== '.') {
      setNumber(number + textNumber);
      return;
    }

    setNumber(number + textNumber);
  };

  const clear = () => {
    if (formula !== '0') {
      setNumber('0');
      setPreviousNumber('0');
      lastOperation.current = undefined;
      setFormula('');
    }
  };

  const deleteLast = () => {
    if (number.length === 1) {
      setNumber('0');
      return;
    }
    if (number.length === 2 && number.includes('-')) {
      setNumber('0');
      return;
    } else {
      setNumber(number.slice(0, -1));
      return;
    }
  };

  const positiveNegative = () => {
    if (number.includes('-')) {
      setNumber(number.replace('-', ''));
    } else {
      setNumber('-' + number);
    }
  };

  const setLastNumber = () => {
    if (number.endsWith('.')) {
      setPreviousNumber(number.slice(0, -1));
    } else {
      setPreviousNumber(number);
    }
    setNumber('0');
  };

  const divideOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.divide;
  };

  const multiplyOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.multiply;
  };

  const subtractOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.subtract;
  };

  const addOperation = () => {
    setLastNumber();
    lastOperation.current = Operator.add;
  };

  const calculateSubResult = () => {
    const [firstValue, operation, secondValue] = formula.split(' ');
    const num1 = Number(firstValue);
    const num2 = Number(secondValue);

    if (isNaN(num2)) {
      return num1;
    }

    switch (operation) {
      case Operator.add:
        return num1 + num2;
      case Operator.subtract:
        return num1 - num2;
      case Operator.multiply:
        return num1 * num2;
      case Operator.divide:
        return num1 / num2;
      default:
        throw new Error('Invalid operation');
    }
  };

  const calculateResult = () => {
    const result = calculateSubResult();
    if (isNaN(result)) {
      setFormula('undefined');
    } else {
      setFormula(`${result}`);
    }
    lastOperation.current = undefined;
    setPreviousNumber('0');
  };

  const buttonFunctions: ButtonFunctionsType = {
    C: clear,
    del: deleteLast,
    '+/-': positiveNegative,
    '÷': divideOperation,
    '×': multiplyOperation,
    '+': addOperation,
    '−': subtractOperation,
    '=': calculateResult,
    default: buildNumber,
  };
  const getAction = (label: string) => {
    return buttonFunctions[label] || buildNumber;
  };

  return {
    previousNumber,
    getAction,
    formula,
  };
};
