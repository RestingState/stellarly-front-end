import React from 'react';
// Styles
import { Wrapper } from './InputSection.styles';

const InputSection = ({ title, value, onChange }) => {
  return (
    <Wrapper>
      <h3>{title}</h3>
      <input type="text" value={value} onChange={onChange} />
    </Wrapper>
  );
};

export default InputSection;
