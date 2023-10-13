import styled from 'styled-components';
import { Container as MUIContainer } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  svg {
    margin-right: 5px; /* Aplica el margen a todos los iconos dentro de ContactInfo */
  }
`;



export const StyledContainer = styled(MUIContainer)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: fit-content;
    background-color: #fff;
    padding: 5px;
    color: #333;
    border: 3px solid #ccc;
    border-radius: 8px;
    margin: 0 auto; /* Centra el contenedor en la página */
  }
`;


export const Title = styled.p`
  color: #1B94AB;
  font-weight: bold; 
  font-style: italic; 
  font-size: 42px; 
  text-decoration: underline;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold; 
  font-style: italic; 
  font-size: 18px;
  margin: 10px;
`;

export const Name = styled.p`
  color: #1B94AB;
  font-weight: bold; 
  font-style: italic; 
  font-size: 22px; 
`;

