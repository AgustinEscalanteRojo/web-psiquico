import styled from 'styled-components';
import { Container as MUIContainer } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 20vh;
  padding-bottom: 60px;
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  min-height: 2vh;
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
    min-height: 20vh;
  }
`;

export const Title = styled.p`
  color: #1b94ab;
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
  color: #1b94ab;
  font-weight: bold;
  font-style: italic;
  font-size: 22px;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;