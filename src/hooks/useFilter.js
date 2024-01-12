import { useState } from 'react';
import unorm from 'unorm';

const useFilter = ({ data, filterKeys }) => {
  const [filteredText, setFilteredText] = useState('');

  const handleTextChange = (text) => {
    setFilteredText(text);
  };

  const removeAccents = (str) => {
    return unorm.nfd(str).replace(/[\u0300-\u036f]/g, '');
  };

  const filterData = () => {
    const normalizedText = removeAccents(filteredText.toLowerCase());

    return data.filter((item) =>
      filterKeys.some(
        (key) =>
          removeAccents(item[key].toLowerCase()).includes(normalizedText)
      )
    );
  };

  return { filteredText, handleTextChange, filterData };
};

export default useFilter;
