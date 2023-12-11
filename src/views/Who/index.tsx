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
                  - Psicóloga General sanitario. Nº colegiado Psicólogo: AN
                  *****
                </StyledTypography>
                <StyledTypography variant="subtitle1">
                  - Máster en Terapia Cognitivo Conductual
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Sobre mí</Subtitle1>
                <StyledTypography variant="body1">
                  "Como psicóloga clínica, me dedico apasionadamente a guiar a
                  las personas en su viaje hacia el bienestar emocional y
                  mental. Con un enfoque cálido y compasivo, creo un espacio
                  seguro donde mis clientes pueden explorar sus pensamientos,
                  emociones y comportamientos. Mi objetivo es brindar apoyo
                  experto mientras colaboramos en el descubrimiento de
                  fortalezas personales y estrategias efectivas para superar
                  desafíos. Con una formación sólida y una amplia experiencia en
                  psicología clínica, utilizo enfoques basados en la evidencia y
                  técnicas personalizadas para abordar una variedad de
                  preocupaciones, desde el manejo del estrés hasta la gestión de
                  trastornos emocionales. Mi enfoque integrador reconoce la
                  singularidad de cada individuo, adaptando las intervenciones
                  para satisfacer sus necesidades específicas. Creo firmemente
                  en la importancia de la empatía y la conexión genuina en el
                  proceso terapéutico. Colaborar con mis clientes para lograr un
                  mayor autoconocimiento y empoderamiento es la piedra angular
                  de mi práctica. Si estás listo para embarcarte en un viaje de
                  autoexploración y crecimiento personal, estoy aquí para
                  apoyarte en cada paso del camino."
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Orientación Teórica</Subtitle1>
                <StyledTypography variant="body1">
                  Como psicóloga, mi objetivo es brindar apoyo experto para
                  guiar a las personas en su proceso terapéutico. Dentro de un
                  espacio seguro, los pacientes pueden explorar sus
                  pensamientos, emociones y comportamientos. Con amplia
                  formación y experiencia en psicología, utilizo enfoques
                  basados en la evidencia científica y técnicas personalizadas
                  para abordar la demanda de cada paciente. Mi enfoque
                  integrador tiene en consideración la singularidad individual,
                  adaptando las intervenciones para satisfacer sus necesidades
                  específicas.
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
                  Soy un psicólogo con pasión por la psicología. Graduado en
                  Psicología por la Universidad Nacional de Educación a
                  Distancia (UNED), enfocándome en el área de Psicología
                  Clínica, Personalidad, Evaluación y Tratamientos Psicológicos,
                  además del área de psicología educativa. Continué mi formación
                  con un Máster en Psicología General Sanitaria (UNIR),
                  consolidando mis conocimientos y habilidades para ofrecer una
                  atención integral a aquellos que buscan apoyo psicológico.
                  Desde 2019, he estado comprometido en el ámbito de la
                  protección de menores, desempeñando roles de psicólogo en
                  diversas entidades del Sistema de Protección de Menores y en
                  Centros de Internamiento de Menores Infractores. También he
                  contribuido como Psicólogo Voluntario en programas de Cruz
                  Roja, brindando mi ayuda en diferentes iniciativas. En 2021,
                  materializamos el sueño de crear el Centro Sanitario
                  PSIQUI&CO, donde actualmente ejerzo como psicólogo sanitario.
                  En este espacio, comparto experiencias junto a otras
                  profesionales, ofrezco consultas individuales, de pareja y
                  familia para menores y adultos A lo largo de mi carrera, he
                  mantenido un compromiso constante con mi desarrollo
                  profesional, participando activamente en cursos, talleres,
                  congresos y seminarios especializados en Psicología Clínica y
                  de la Salud, Dirección de Psicodrama, y obteniendo
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
                  conocimiento más actualizado.Mi orientación y metodología de
                  trabajo podría definirse como Psicodrama y Cognitivo
                  Conductual / Contextual. En la práctica clínica integro
                  estrategias y técnicas terapéuticas provenientes de distintas
                  orientaciones psicológicas que han mostrado su eficacia
                  (siempre desde una óptica científica, avalada por los datos
                  empíricos). Estoy aquí para acompañarte en tu viaje hacia el
                  bienestar emocional y el crecimiento personal.
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
                    <a
                      href="https://www.facebook.com/felix.valderramadiaz/?locale=es_LA"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Facebook</strong>{' '}
                    </a>
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
