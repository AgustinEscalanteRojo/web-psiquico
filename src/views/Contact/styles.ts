import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  padding-bottom: 50px;
`;

export const Text = styled.div`
  font-family: 'Courgette', cursive;
  font-size: 16px;
  text-align: justify;
  margin: 15px 0;
  max-width: 400px;
`;


export const Title = styled.p`
  color: #1b94ab;
  font-weight: bold;
  font-style: 'Courgette', cursive ;
  font-size: 42px;
  text-decoration: underline;
  margin-bottom: 10px;
`;

export const FormLabel = styled.label`
  color: #1b94ab;
  margin-bottom: 5px; 
  font-family: 'Courgette', cursive;
`;

export const FormContainer = styled.form`
  width: 100%;
  max-width: 400px;
  margin: 20px auto;
  padding: 0 10px; 

  @media (max-width: 480px) {
    padding: 0 10px; 
    max-width: 200px;
  }
`;

export const FormInput = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 5px;
  border-color: #1b94ab;
  border: 2px solid;
`;

export const FormTextArea = styled.textarea`
  width: 100%;
  padding: 30px;
  margin-bottom: 10px; 
  border-radius: 5px;
  border-color: #1b94ab;
  border: 2px solid;

  @media (max-width: 480px) {
    margin-bottom: 10px; 
  }
`;

export const FormButton = styled.button`
  background-color: #1b94ab;
  color: white;
  padding: 10px;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: bold;
  border-radius: 5px;
  margin-right: 30px; 

  &:hover {
    background-color: #155e6e;
  }
`;


export const MapsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  width: 100%; 
  max-width: 1200px; 
  padding: 0 20px;
  height: 20vh;

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

export const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

