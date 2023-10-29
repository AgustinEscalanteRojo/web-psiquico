import styled from 'styled-components';
import { Typography } from '@mui/material';
import { Container as MUIContainer } from '@mui/material';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  margin: 0 30px;
  padding-bottom: 60px;
`;

export const BioContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  margin-bottom: 16px;

  img {
    margin-left: 15px;
    max-width: 230px;
  }
`;

export const Title = styled.p`
  color: #1b94ab;
  font-weight: bold;
  font-size: 22px;
  font-family: 'Pacifico', cursive; /* Agrega la fuente aquí */
`;

export const Subtitle1 = styled.p`
  color: #1b94ab;
  font-weight: bold;
  font-size: 14px;
  font-family: 'Pacifico', cursive; /* Agrega la fuente aquí */
  text-align: justify;
`;

export const StyledTypography = styled(Typography)`
  && {
    font-family: 'Pacifico', cursive;
    text-align: justify;
  }
`;

export const StyledContainer = styled(MUIContainer)`
  && {
    display: flex;
    flex-direction: column;
    align-items: center;
    /* justify-content: center; */
    text-align: justify;
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

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
