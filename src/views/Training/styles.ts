import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center; 
  min-height: 100vh; 
  padding-bottom: 50px;
`;

export const Title = styled.p`
  color: #1b94ab;
  font-weight: bold;
  font-family: 'Courgette', cursive;
  font-size: 42px;
  text-decoration: underline;

  @media screen and (max-width: 768px) {
    font-size: 32px;
  }
`;

export const ImageContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 20px;
  width: 50%;
`;

export const Image = styled.img`
  width: calc(70% - 10px);
  max-width: 500px;
  margin: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

export const TextImage = styled.p`
  text-align: justify;
  color: #555;
  font-size: 18px;
  max-width: 300px;

  @media screen and (max-width: 768px) {
    width: calc(100% - 20px);
    font-size: 14px;
    margin-left: 20px;
  }
`;

export const Text = styled.p`
  text-align: justify;
  color: #555;
  font-size: 18px;
  max-width: 700px;

  @media screen and (max-width: 768px) {
    width: calc(100% - 20px);
    font-size: 14px;
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

// export const MariaBioContainer = styled(BioContainer)`
//   display: flex;
//   flex-direction: column;
//   align-items: center; // Esto centrará el contenido horizontalmente
//   text-align: justify; // Esto alineará el texto justificado
//   margin: auto; // Esto centrará el contenedor horizontalmente en la pantalla
//   max-width: 800px; // Establece el ancho máximo del contenedor
//   padding: 20px; // Añade un espacio interno al contenedor
// `;