import styled from 'styled-components';
import { Container as MUIContainer } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 20vh;
  padding-bottom: 60px;
  padding: 0 20px; /* Añadido padding para dar espacio en los bordes */
`;

export const ContactInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  min-height: 2vh;
  svg {
    margin-right: 5px;
  }
`;

export const StyledContainer = styled(MUIContainer)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #fff;
    padding: 20px;
    color: #333;
    border: 3px solid #ccc;
    border-radius: 8px;
    border-color: #1b94ab;
    margin: 20px auto;
    min-height: 20vh;
    width: 100%;
    max-width: 600px;
  }

  @media screen and (max-width: 768px) {
    padding: 10px;
    margin: 10px auto;
  }
`;

export const Title = styled.p`
  color: #1b94ab;
  font-weight: bold;
  font-style: italic;
  font-size: 24px;
  text-decoration: underline;
  margin-bottom: 10px;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-weight: bold;
  font-style: italic;
  font-size: 16px;
  margin: 10px;
`;

export const Name = styled.p`
  color: #1b94ab;
  font-weight: bold;
  font-style: italic;
  font-size: 18px;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
