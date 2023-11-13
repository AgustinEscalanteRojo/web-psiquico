import { FC, memo } from 'react';
import Header from '../../components/Header';
import Background from '../../components/Background';
import Footer from '../../components/Footer';
import {
  Container as StyledContainer,
  BioContainer,
  Title,
  Subtitle1,
  StyledTypography,
  ContactInfo, 
} from './styles';
import { Grid } from '@mui/material';
import { FcCallback } from 'react-icons/fc';
import { BsLinkedin } from 'react-icons/bs';
import { MdAttachEmail } from 'react-icons/md';
import { RiTwitterXFill } from 'react-icons/ri';
import { FaUserDoctor } from 'react-icons/fa6';

const Who: FC = () => {
  return (
    <>
      <Background />
      <Header />
      <StyledContainer>
        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <BioContainer>
              <Title>María Marín Domínguez</Title>
              <img src="/Mariapsiquico.jpg" alt="María" />

              <div>
                <StyledTypography variant="subtitle1">
                  - Licenciada en Psicología
                </StyledTypography>
                <StyledTypography variant="subtitle1">
                  - Máster en Terapia Cognitivo Conductual
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Sobre mí</Subtitle1>
                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Orientación Teórica</Subtitle1>
                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Me puedes contactar en:</Subtitle1>
                <StyledContainer>
                  <ContactInfo>
                    <MdAttachEmail style={{ color: '#ff5733' }} />
                    <strong>Email: </strong>{' '}
                    <a href="mailto:mariamarinpsicologa@gmail.com">
                      mariamarinpsicologa@gmail.com
                    </a>
                  </ContactInfo>

                  <ContactInfo>
                    <FcCallback />
                    <strong>Teléfono: </strong> 650 775 846
                  </ContactInfo>

                  <ContactInfo>
                    <BsLinkedin style={{ color: '#0e76a8' }} />
                    <strong>Linkedin: </strong>{' '}
                    <a
                      href="https://www.linkedin.com/in/maria-marin-dominguez/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Maria Marin Dominguez
                    </a>
                  </ContactInfo>

                  <ContactInfo>
                    <RiTwitterXFill style={{ color: '#1da1f2' }} />
                    <strong>Twitter: </strong>{' '}
                    <a
                      href="https://twitter.com/MMarinPsicologa"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @MMarinPsicologa
                    </a>
                  </ContactInfo>

                  <ContactInfo>
                    <FaUserDoctor style={{ color: '#1b907e' }} />
                    <strong>Doctoralia: </strong>{' '}
                    <a
                      href="https://www.doctoralia.es/maria-marin-dominguez/psicologo-terapeuta-complementario/sevilla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Maria Marin Dominguez - Doctoralia
                    </a>
                  </ContactInfo>
                </StyledContainer>
              </div>
            </BioContainer>
          </Grid>

          <Grid item xs={12} md={6}>
            <BioContainer>
              <Title>Felix Valderrama </Title>
              <img src="/Felix.jpg" alt="Felix" />

              <div>
                <StyledTypography variant="subtitle1">
                  - Licenciada en Psicología
                </StyledTypography>
                <StyledTypography variant="subtitle1">
                  - Máster en Terapia Cognitivo Conductual
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Sobre mí</Subtitle1>
                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Orientación Teórica</Subtitle1>
                <StyledTypography variant="body1">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum
                  dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                  cupidatat non proident, sunt in culpa qui officia deserunt
                  mollit anim id est laborum.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Me puedes contactar en:</Subtitle1>
                <StyledContainer>
                  <ContactInfo>
                    <MdAttachEmail style={{ color: '#ff5733' }} />
                    <strong>Email: </strong> felix@psiquico.com
                  </ContactInfo>
                  <ContactInfo>
                    <FcCallback />
                    <strong>Teléfono: </strong> 777 777 777
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
              </div>
            </BioContainer>
          </Grid>
        </Grid>
      </StyledContainer>

      <Footer />
    </>
  );
};

export default memo(Who);
