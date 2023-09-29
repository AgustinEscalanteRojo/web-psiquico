import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; /* Centrar horizontalmente en el contenedor principal */
  min-height: 100vh; /* Asegura que Container tenga al menos el 100% de la altura de la ventana gráfica */
  margin: 0 30px; /* Agrega margen de 20px a ambos lados */
`;

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 16px;
  /* Agrega cualquier estilo adicional que desees para las biografías */
`;

export const Title = styled.p`
  color: #1B94AB;
  font-weight: bold; 
  font-style: italic; 
  font-size: 22px; 
`;

export const Subtitle1 = styled.p`
  color: #1B94AB;
  font-weight: bold; 
  font-style: italic; 
  font-size: 14px; 
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;