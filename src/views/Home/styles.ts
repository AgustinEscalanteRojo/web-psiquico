import styled from 'styled-components';
import { Container as MUIContainer } from '@mui/material';

export const StyledContainer = styled(MUIContainer)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    background: linear-gradient(to right, #d2f4f9, transparent);
    padding: 5px 20px 20px 20px;
    color: #333;
    border: 1px solid #ccc;
    border-radius: 10px;
    max-width: 100%; 
    margin: 0; 

    @media (min-width: 600px) {
      max-width: 600px; 
      margin: 0 auto;
    }
  }
`;

export const Text = styled.p`
  text-align: justify;
  margin-top: 3px;
  font-family: 'Courgette', cursive;

`;

export const SubText = styled.p`
  text-align: justify;
  margin-top: 5px;
  font-size: 1em;
  font-family: 'Courgette', cursive;

`;

export const MapsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 80%; 
  max-width: 1200px; 
  padding: 0 20px; 

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

export const Image = styled.img`
  width: calc(50% - 10px);
  max-width: 400px;
  margin: 5px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

