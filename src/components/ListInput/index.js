import React, { useEffect, useState } from 'react';
// Styles
import { Wrapper, Input } from './ListInput.styles';

const ListInput = ({ searchTerm, setSearchTerm, fetchData }) => {
  const [options, setOptions] = useState([]);

  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      try {
        const data = { name: searchTerm };
        const response = await fetchData(data);
        if (response.status === 200) {
          setOptions(response.data);
        }
      } catch (e) {}
    }, 500);
    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  const handleChange = async (event) => {
    if (!event.nativeEvent.inputType) {
      event.target.blur();
    }
    setSearchTerm(event.target.value);
  };

  const clear = (event) => {
    event.target.value = '';
  };

  return (
    <Wrapper>
      <Input
        type="input"
        value={searchTerm}
        list="optionsList"
        onChange={handleChange}
        onClick={clear}
        onFocus={clear}
        placeholder="Select an option"
      />
      <datalist id="optionsList">
        {options.slice(0, 5).map((o) => (
          <option key={o.id}>{o.name}</option>
        ))}
      </datalist>
    </Wrapper>
  );
};

export default ListInput;
