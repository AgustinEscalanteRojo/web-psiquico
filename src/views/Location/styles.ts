import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar horizontalmente en el contenedor principal */
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