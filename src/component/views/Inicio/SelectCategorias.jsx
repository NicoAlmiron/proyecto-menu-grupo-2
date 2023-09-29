import Form from 'react-bootstrap/Form';

function SelectCategorias({ categoria, setCategoria, setCopiaComidas, comidas, copiaComidas }) {
    
    const filtroCategoria = (e) =>{
        e.preventDefault();
        const categoriaBuscada = e.target.value;
        setCategoria(categoriaBuscada)

        if(categoriaBuscada === ''){
            setCopiaComidas(comidas)
          }else{
              const comidasBuscadas = comidas.filter((comida)=> comida.categoria.toLowerCase().includes(categoriaBuscada.toLowerCase())) 
              if(comidasBuscadas.length > 0){
                setCopiaComidas(comidasBuscadas)
                console.log('entre al filtro')
                console.log(copiaComidas)
              }
          }
    }
  return (
    <Form.Select value={categoria} onChange={filtroCategoria}>
      <option value=''>Selecciona una categoria</option>
      <option value="Comida Rapida">Comida Rapida</option>
      <option value="Comidas Saludables">Comidas Saludables</option>
      <option value="Postres">Postres</option>
    </Form.Select>
  );
}

export default SelectCategorias;