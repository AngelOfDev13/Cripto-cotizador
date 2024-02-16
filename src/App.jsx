import styled from "@emotion/styled";
import ImagenCriptos from './img/imagen-criptos.png'
import Formulario from "./components/Formulario";

const Contenedor = styled.div`
  max-width: 900px;
  margin: 0 auto;
  width: 90%;
  @media(min-width: 992px){
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`

const Imagen = styled.img`
  max-width: 400px;
  width: 80%;
  margin: 100px auto 0 auto;
  display: block;
`

const Heading = styled.h1`
  /* tipografia */
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
  color: #FFF;

  font-family: "Lato", sans-serif;
  font-weight: 700;
  font-style: normal;

  font-family: "Lato", sans-serif;
  font-weight: 900;
  font-style: normal;
  /* fin tipografia  */

  text-align: center;
  margin-top: 80px;
  margin-bottom: 50px;
  font-size: 34px;

  &::after {
    content: '';
    width: 100px;
    height: 6px;
    background-color: #66A2FE;
    display: block;
    margin: 10px auto 0 auto;
  }

`

const App = () => {
  return (
    <Contenedor>
      <Imagen src={ImagenCriptos} alt="main image criptos" />
      <div>
      <Heading>Cotiza Criptomonedas al Instante</Heading>
      <Formulario />
      </div>
    </Contenedor>
  )
};

export default App;