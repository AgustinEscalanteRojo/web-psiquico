import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { Link } from 'react-router-dom';
import { Container, Title, Text, ImageContainer, Image } from './styles';


const Consult: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Consulta de Psicología</Title>
        <Text>
          Centro psicológico autorizado por la Consejería de Salud de la Junta
          de Andalucía con el nº de Registro 60556 <br />
          Avda. San Francisco Javier 9, planta 2, módulo 24, Sevilla
          <br />
          <Link to="/Contact">(Solicitar cita previa)</Link>
        </Text>
        <ImageContainer>
          <Image src="/Entrada.jpg" alt="Entrada" />
          <Image src="/Recepción.jpg" alt="Recepción" />
          <Image src="/Sala1.jpg" alt="Sala1" />
          <Image src="/Sala2.jpg" alt="Sala2" />
        </ImageContainer>
      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Consult);
