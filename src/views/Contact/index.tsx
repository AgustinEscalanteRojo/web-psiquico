import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { RiTwitterXFill } from 'react-icons/ri';
import { BsFillTelephoneForwardFill, BsLinkedin } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import { Container, ContactInfo, Title, Name, Info, StyledContainer } from './styles';

const Contact: FC = () => {
  return (
    <>
      <Header />
      <Container>
        <Title>Contacto</Title>
        <Info>
          Si quieres pedir una cita o deseas más información, puedes ponerte en
          contacto con nosotros en los datos que se indican a continuación
        </Info>

        <StyledContainer>
        <Name>María Marín Domínguez</Name>
        
        <ContactInfo>
          <MdAttachEmail />
          Email: maria@psiquico.com
        </ContactInfo>
        <ContactInfo>
          <BsFillTelephoneForwardFill />
          Teléfono: 666 666 666
        </ContactInfo>
        <ContactInfo>
          <BsLinkedin /> Linkedin: enlace linkedin
        </ContactInfo>
        <ContactInfo>
          <RiTwitterXFill /> Twitter: @marinpsicologa
        </ContactInfo>
        </StyledContainer>


        <StyledContainer>
        <Name>Felix Valderrama Díaz</Name>
        <ContactInfo>
          <MdAttachEmail />
          Email: felix@psiquico.com
        </ContactInfo>
        <ContactInfo>
          <BsFillTelephoneForwardFill />
          Teléfono: 777 777 777
        </ContactInfo>
        <ContactInfo>
          <BsLinkedin />
          Linkedin: enlace linkedin
        </ContactInfo>
        <ContactInfo>
          <RiTwitterXFill />
          Twitter: @felixvalderrama
        </ContactInfo>
        </StyledContainer>

      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Contact);
