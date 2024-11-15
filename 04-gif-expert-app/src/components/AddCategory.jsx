import { useState } from "react";

export const AddCategory = ({ setCategories }) => {

  const [inputValue, setInputValue] = useState('');

  const onInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const onSubmitInput = (e) => {
    e.preventDefault();

    if ( inputValue.trim().length < 1 ) return;

    setCategories( categories => [inputValue, ...categories] );
    setInputValue('');
  }

  return (
    <form onSubmit={ onSubmitInput }>
      <input 
        type="text" 
        placeholder="Buscar Gifs"
        value={ inputValue }
        onChange={ onInputChange }
      />

      <button type="submit">Agregar</button>
    </form>
  )
}
