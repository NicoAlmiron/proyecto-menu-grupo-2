import { Form } from "react-bootstrap";

function SelectCategorias({
  categoria,
  setCategoria,
  setCopiaComidas,
  comidas,
  copiaComidas,
}) {
  const filtroCategoria = (e) => {
    e.preventDefault();
    const categoriaBuscada = e.target.value;
    setCategoria(categoriaBuscada);

    if (categoriaBuscada === "") {
      setCopiaComidas(comidas);
    } else {
      const comidasBuscadas = comidas.filter((comida) =>
        comida.categoria.toLowerCase().includes(categoriaBuscada.toLowerCase())
      );
      if (comidasBuscadas.length > 0) {
        setCopiaComidas(comidasBuscadas);
      }
    }
  };
  return (
    <Form.Select value={categoria} onChange={filtroCategoria}>
      <option value="">Selecciona una categoria</option>
      <option value="Desayunos">Desayunos</option>
      <option value="Entradas">Entradas</option>
      <option value="Platos Principales">Platos Principales</option>
      <option value="Acompañamientos">Acompañamientos</option>
      <option value="Postres">Postres</option>
      <option value="Bebidas">Bebidas</option>
      <option value="Comida Rapida">Comida Rapida</option>
      <option value="Comidas Etnicas">Comidas Etnicas</option>
      <option value="Comidas Saludables">Comidas Saludables</option>
    </Form.Select>
  );
}

export default SelectCategorias;
