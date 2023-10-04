import styled from 'styled-components';
import { Container as MUIContainer } from '@mui/material';

export const StyledContainer = styled(MUIContainer)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    background: linear-gradient(to right, #D2F4F9, transparent);
    padding: 30px;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 8px;
    max-width: 600px; /* Ajusta el valor según tus necesidades */
    margin: 0 auto; /* Centra el contenedor en la página */
    margin-top: 10px; 
  }
`;

export const Text = styled.p`
  text-align: center;
  margin-top: 3px;
`;

export const SubText = styled.p`
  text-align: center;
  margin-top: 5px;
  font-size: 1em;
`;

export const MapsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 80%; /* Asegura que el contenedor Maps ocupe todo el ancho disponible */
  max-width: 1200px; /* Establece un ancho máximo para el contenedor si es necesario */
  padding: 0 20px; /* Agrega espacio alrededor del contenido si lo deseas */
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
`;

