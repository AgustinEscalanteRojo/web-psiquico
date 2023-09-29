import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar horizontalmente en el contenedor principal */
  min-height: 100vh; /* Asegura que Container tenga al menos el 100% de la altura de la ventana gráfica */
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
`;