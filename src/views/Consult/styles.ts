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
  width: calc(50% - 20px);
  max-width: 300px;
  margin: 10px;
  box-sizing: border-box;

  @media screen and (max-width: 768px) {
    width: calc(100% - 20px);
  }
`;

export const Text = styled.p`
  text-align: center;
`;

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;
