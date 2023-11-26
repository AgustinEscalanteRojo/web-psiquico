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
import { FaFacebookSquare } from 'react-icons/fa';

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
                    <a
                      href="https://www.linkedin.com/in/maria-marin-dominguez/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Linkedin </strong>{' '}
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
                    <a
                      href="https://www.doctoralia.es/maria-marin-dominguez/psicologo-terapeuta-complementario/sevilla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Doctoralia </strong>{' '}
                    </a>
                  </ContactInfo>

                  <ContactInfo>
                    <FaUserDoctor style={{ color: '#1d1b90' }} />
                    <a
                      href="https://www.doctoralia.es/maria-marin-dominguez/psicologo-terapeuta-complementario/sevilla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>TopDoctors </strong>{' '}
                    </a>
                  </ContactInfo>
                </StyledContainer>
              </div>
            </BioContainer>
          </Grid>

          <Grid item xs={12} md={6}>
            <BioContainer>
              <Title>Felix Valderrama Díaz</Title>
              <img src="/Felix.jpg" alt="Felix" />

              <div>
                <StyledTypography variant="subtitle1">
                  - Psicólogo General sanitario. Nº colegiado Psicólogo: AN
                  10259
                </StyledTypography>
                <StyledTypography variant="subtitle1">
                  - Director de Psicodrama / Psicodramatista Asociación Española
                  de Psicodrama.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Sobre mí</Subtitle1>
                <StyledTypography variant="body1">
                  ¡Bienvenid@ a mi página web! Mi nombre es Félix Valderrama
                  Díaz, y soy un apasionado psicólogo dedicado a la comprensión
                  y tratamiento efectivo de diversos problemas y trastornos
                  psicológicos. Mi viaje académico comenzó con mi graduación en
                  Psicología por la Universidad Nacional de Educación a
                  Distancia (UNED) entre los años 2014 y 2018, enfocándome en el
                  área de Psicología Clínica, Personalidad, Evaluación y
                  Tratamientos Psicológicos. Después de obtener mi graduación,
                  continué mi formación con un Máster en Psicología General
                  Sanitaria (2020-2021), consolidando mis conocimientos y
                  habilidades para ofrecer una atención integral a aquellos que
                  buscan apoyo psicológico. Desde 2019, he estado comprometido
                  en el ámbito de la protección de menores, desempeñando roles
                  de psicólogo en diversas entidades del Sistema de Protección
                  de Menores y en Centros de Internamiento de Menores
                  Infractores. También he contribuido como Psicólogo Voluntario
                  en programas de Cruz Roja, brindando mi ayuda en diferentes
                  iniciativas. En 2021, materializamos el sueño de crear el
                  Centro Sanitario PSIQUI&CO, donde actualmente ejerzo como
                  psicólogo sanitario. En este espacio, comparto experiencias y
                  trabajo junto a otros profesionales. Además de ofrecer
                  consultas individuales, de pareja y familia para menores y
                  adultos, tengo el honor de codirigir clínicamente el centro
                  junto a la psicóloga María Marín Domínguez. A lo largo de mi
                  carrera, he mantenido un compromiso constante con mi
                  desarrollo profesional, participando activamente en cursos,
                  talleres, congresos y seminarios especializados en Psicología
                  Clínica y de la Salud, Dirección de Psicodrama, y obteniendo
                  certificaciones como Experto Universitario en violencia filio
                  parental, Experto Universitario en Intervención con menores,
                  Protección y conflicto con la Ley, Experto Universitario en el
                  perito judicial, social, educativo y psicológico, y
                  Especialista Universitario en Intervención en Trauma. Creo
                  firmemente que la práctica de la psicología requiere un
                  compromiso continuo con la formación y la actualización, dado
                  su constante proceso de evolución. Por esta razón, me esfuerzo
                  por mantenerme al día con los últimos avances en psicología,
                  garantizando así un servicio de calidad basado en el
                  conocimiento más actualizado. Estoy aquí para acompañarte en
                  tu viaje hacia el bienestar emocional y el crecimiento
                  personal. ¡Gracias por visitar mi página!
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Orientación Teórica</Subtitle1>
                <StyledTypography variant="body1">
                  Mi orientación y metodología de trabajo podría definirse como
                  Psicodrama y Cognitivo Conductual / Contextual. En la práctica
                  clínica integro estrategias y técnicas terapéuticas
                  provenientes de distintas orientaciones psicológicas que han
                  mostrado su eficacia (siempre desde una óptica científica,
                  avalada por los datos empíricos).
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Me puedes contactar en:</Subtitle1>
                <StyledContainer>
                  <ContactInfo>
                    <MdAttachEmail style={{ color: '#ff5733' }} />
                    <strong>Email: </strong>{' '}
                    <a href="psicologofelixvalderramadiaz@gmail.com">
                      psicologofelixvalderramadiaz@gmail.com
                    </a>
                  </ContactInfo>

                  <ContactInfo>
                    <FcCallback />
                    <strong>Teléfono: </strong> 627 060 203
                  </ContactInfo>

                  <ContactInfo>
                    <BsLinkedin style={{ color: '#0e76a8' }} />
                    <a
                      href="https://es.linkedin.com/in/felixvalderramadiaz"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Linkedin </strong>{' '}
                    </a>
                  </ContactInfo>

                  <ContactInfo>
                    <FaFacebookSquare style={{ color: '#1da1f2' }} />
                    <strong>Facebook:</strong> facebook enlace
                  </ContactInfo>

                  <ContactInfo>
                    <FaUserDoctor style={{ color: '#1b907e' }} />
                    <a
                      href="https://www.doctoralia.es/felix-valderrama-diaz/psicologo-psicologo-infantil-terapeuta-complementario/sevilla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Doctoralia </strong>{' '}
                    </a>
                  </ContactInfo>

                  <ContactInfo>
                    <FaUserDoctor style={{ color: '#1d1b90' }} />
                    <a
                      href="https://www.doctoralia.es/felix-valderrama-diaz/psicologo-psicologo-infantil-terapeuta-complementario/sevilla"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>TopDoctors </strong>{' '}
                    </a>
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
