import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import { RiTwitterXFill } from 'react-icons/ri';
import { BsLinkedin } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import { FcCallback } from "react-icons/fc";
import { FaUserDoctor } from "react-icons/fa6";

import {
  Container,
  ContactInfo,
  Title,
  Name,
  Info,
  StyledContainer,
} from './styles';

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
          <MdAttachEmail style={{ color: '#ff5733' }} />
          <strong>Email:</strong>  maria@psiquico.com
          </ContactInfo>
          <ContactInfo>
            <FcCallback />
            <strong>Teléfono:</strong>  666 666 666
          </ContactInfo>
          <ContactInfo>
          <BsLinkedin style={{ color: '#0e76a8' }} /> 
          <strong>Linkedin:</strong>  enlace linkedin
          </ContactInfo>
          <ContactInfo>
          <RiTwitterXFill style={{ color: '#1da1f2' }} />
          <strong>Twitter:</strong>  @marinpsicologa
          </ContactInfo>
          <ContactInfo>
          <FaUserDoctor style={{ color: '#1b907e' }} />
          <strong>Doctoralia:</strong>  enlace Doctoralia
          </ContactInfo>
        </StyledContainer>

        <StyledContainer>
          <Name>Felix Valderrama Díaz</Name>
          <ContactInfo>
          <MdAttachEmail style={{ color: '#ff5733' }} />
          <strong>Email: </strong> felix@psiquico.com
          </ContactInfo>
          <ContactInfo>
            <FcCallback />
            <strong>Teléfono: </strong>  777 777 777
          </ContactInfo>
          <ContactInfo>
          <BsLinkedin style={{ color: '#0e76a8' }} />
          <strong>Linkedin:</strong> enlace linkedin
          </ContactInfo>
          <ContactInfo>
          <RiTwitterXFill style={{ color: '#1da1f2' }} />
          <strong>Twitter:</strong> @felixvalderrama
          </ContactInfo>
          <ContactInfo>
          <FaUserDoctor style={{ color: '#1b907e' }} />
          <strong>Doctoralia:</strong> enlace Doctoralia
          </ContactInfo>
        
        </StyledContainer>
      </Container>
      <Background />
      <Footer />
    </>
  );
};

export default memo(Contact);
