import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import './style.css';

export default function App() {
  const [selectedOptions, setSelectedOptions] = useState();
  const optionList = [
    { value: 'red', label: 'Red' },
    { value: 'green', label: 'Green' },
    { value: 'yellow', label: 'Yellow' },
    { value: 'blue', label: 'Blue' },
    { value: 'white', label: 'White' },
  ];
  const changeHandler = (data) => {
    setSelectedOptions(data);
  };

  useEffect(() => {
    console.log(selectedOptions);
  }, [selectedOptions]);

  return (
    <div>
      <Select
        options={optionList}
        value={selectedOptions}
        onChange={changeHandler}
        placeholder="Select color"
        isSearchable={true}
        isMulti
      />
    </div>
  );
}
