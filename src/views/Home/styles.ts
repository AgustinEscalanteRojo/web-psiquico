import styled from 'styled-components';
import { Container as MUIContainer } from '@mui/material';

export const StyledContainer = styled(MUIContainer)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 10vh;
    background: linear-gradient(to right, #d2f4f9, transparent);
    padding: 30px;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 80%; /* Ajusta el valor según tus necesidades */
    margin: 0; /*Centra el contenedor en la página */
    padding-bottom: 200px;

    @media (min-width: 600px) {
      max-width: 600px; /* Restaura el ancho máximo en dispositivos más grandes si es necesario */
      margin: 0 auto;
    }
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 3px;
  font-family: 'Pacifico', cursive;

`;

export const SubText = styled.p`
  text-align: center;
  margin-top: 5px;
  font-size: 1em;
  font-family: 'Pacifico', cursive;

`;

export const MapsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%; /* Asegura que el contenedor Maps ocupe todo el ancho disponible */
  max-width: 1200px; /* Establece un ancho máximo para el contenedor si es necesario */
  padding: 0 20px; /* Agrega espacio alrededor del contenido si lo deseas */
  height: 20vh;

  @media (min-width: 600px) {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: center;
    width: 100%;
    max-width: 100%;
    padding: 0 20px;
    }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

