import { useEffect } from 'react';
// Styles
import { Wrapper, Input } from './ListInput.styles';

const ListInput = ({ searchTerm, setSearchTerm, data, fetchData }) => {
  useEffect(() => {
    const timeOutId = setTimeout(async () => {
      await fetchData(searchTerm);
    }, 500);

    return () => clearTimeout(timeOutId);
  }, [searchTerm]);

  const handleChange = async (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Wrapper>
      <Input value={searchTerm} list="optionsList" onChange={handleChange} />
      <datalist id="optionsList">
        {data.slice(0, 5).map((o) => (
          <option key={o.id}>{o.name}</option>
        ))}
      </datalist>
    </Wrapper>
  );
};

export default ListInput;
