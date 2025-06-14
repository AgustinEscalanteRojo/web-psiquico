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
                  - Psicóloga General sanitario. Nº colegiada Psicóloga: AN09932
                </StyledTypography>
                <StyledTypography variant="subtitle1">
                  - Experta en trastornos de personalidad, psicología legal y
                  forense, intervención en trauma (EMDR), adicciones y violencia
                  de género.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Sobre mí</Subtitle1>
                <StyledTypography variant="body1">
                  Soy una psicóloga con amplia formación y experiencia. Tras
                  graduarme en Psicología por la Universidad Nacional de
                  Educación a Distancia (UNED) y habilitarme como psicóloga
                  sanitaria con el Máster en Psicología General Sanitaria por la
                  UNIR, continúe mi formación enfocada en la intervención y
                  prevención de adicciones, la violencia de género, el trauma y
                  personalidad.
                  <br />
                  <br />
                  Para poder ofrecer un excelente tratamiento a mis pacientes,
                  mantengo mis conocimientos en continua actualización. Pudiendo
                  así ofrecer la terapia que cuente más evidencia empírica. Mi
                  formación como psicóloga sanitaria la he completado
                  especializándome en las áreas que más interés me suscitan
                  cursando para ello el Experto Universitario en Intervención en
                  Trauma, la Especialidad en psicología legal y forense, en
                  Intervención en adicciones y como Agente en Violencia de
                  Género. Además de múltiples cursos relacionados con esta
                  temática y asistencia a congresos.
                  <br />
                  <br />
                  En mi enfoque integrador, con una metodología en la que aplico
                  las técnicas más adecuadas según las necesidades de cada
                  individuo, prima la terapia{' '}
                  <strong>Cognitivo-conductual</strong> entre otras, y las
                  intervenciones están adaptadas para satisfacer la demanda
                  particular de cada caso.
                  <br />
                  <br />
                  En 2015 comenzó mi andadura en el tratamiento de las
                  adicciones, desde 2018 fui involucrándome en la atención a
                  víctimas de Violencia de Género teniendo la oportunidad de
                  participar en programas de la Cruz Roja e interviniendo en
                  estudios sobre esto en otras asociaciones. Estos dos ámbitos
                  profesionales que tanto me apasionan, me llevaron a
                  interesarme por la perspectiva de género en el tratamiento de
                  las adicciones y hoy en día es una variable a considerar en el
                  tratamiento que ofrezco en adicciones, así como la
                  intervención en patología dual.
                  <br />
                  <br />
                  En 2021, tras muchos años de ir dando forma a nuestra idea de
                  centro sanitario de psicología nació PSIQUI&CO. Un centro en
                  el que ejerzo como psicóloga y puedo hacer realidad mi gran
                  pasión, en este espacio seguro atiendo de forma individual, de
                  pareja o familias a todas aquellos adultos que lo necesiten.
                  <br />
                  <br />
                  Creo firmemente en la importancia de la empatía y la conexión
                  genuina en el proceso terapéutico. Acompañar a mis pacientes
                  para lograr un mayor autoconocimiento y empoderamiento es la
                  piedra angular de mi práctica.
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

          {/* <Grid item xs={12} md={6}>
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
                  además del área de psicología educativa.
                  <br />
                  <br />
                  Continué mi formación con un Máster en Psicología General
                  Sanitaria (UNIR), consolidando mis conocimientos y habilidades
                  para ofrecer una atención integral a aquellos que buscan apoyo
                  psicológico.
                  <br />
                  <br />
                  Desde 2019, he estado comprometido en el ámbito de la
                  protección de menores, desempeñando roles de psicólogo en
                  diversas entidades del Sistema de Protección de Menores y en
                  Centros de Internamiento de Menores Infractores. También he
                  contribuido como Psicólogo Voluntario en programas de Cruz
                  Roja, brindando mi ayuda en diferentes iniciativas.
                  <br />
                  <br />
                  En 2021, materializamos el sueño de crear el Centro Sanitario
                  PSIQUI&CO, donde actualmente ejerzo como psicólogo sanitario.
                  En este espacio, comparto experiencias junto a otras
                  profesionales, ofrezco consultas individuales, de pareja y
                  familia para menores y adultos.
                  <br />
                  <br />
                  A lo largo de mi carrera, he mantenido un compromiso constante
                  con mi desarrollo profesional, participando activamente en
                  cursos, talleres, congresos y seminarios especializados en
                  Psicología Clínica y de la Salud, Dirección de Psicodrama, y
                  obteniendo certificaciones como Experto Universitario en
                  violencia filio parental, Experto Universitario en
                  Intervención con menores, Protección y conflicto con la Ley,
                  Experto Universitario en el perito judicial, social, educativo
                  y psicológico, y Especialista Universitario en Intervención en
                  Trauma.
                  <br />
                  <br />
                  Creo firmemente que la práctica de la psicología requiere un
                  compromiso continuo con la formación y la actualización, dado
                  su constante proceso de evolución. Por esta razón, me esfuerzo
                  por mantenerme al día con los últimos avances en psicología,
                  garantizando así un servicio de calidad basado en el
                  conocimiento más actualizado.Mi orientación y metodología de
                  trabajo podría definirse como{' '}
                  <strong>Psicodrama y Cognitivo Conductual </strong>/
                  Contextual. En la práctica clínica integro estrategias y
                  técnicas terapéuticas provenientes de distintas orientaciones
                  psicológicas que han mostrado su eficacia (siempre desde una
                  óptica científica, avalada por los datos empíricos).
                  <br />
                  <br />
                  Estoy aquí para acompañarte en tu viaje hacia el bienestar
                  emocional y el crecimiento personal.
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
          </Grid> */}

          <Grid item xs={12} md={6}>
            <BioContainer>
              <Title>María Balbás Ocaña</Title>
              <img src="/MariaBalbas.jpg" alt="MariaBalbas" />

              <div>
                <StyledTypography variant="subtitle1">
                  - Psicóloga General sanitario. Nº colegiada Psicóloga: AN12528
                </StyledTypography>
                <StyledTypography variant="subtitle1">
                  - Especialista en Tratamiento Integral de los Trastornos de la
                  Conducta Alimentaria (TCA) y Trastornos de la Personalidad
                  (TP).
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Sobre mí</Subtitle1>
                <StyledTypography variant="body1">
                  Me llamo María Balbás Ocaña, soy una psicóloga sanitaria con
                  mucha pasión innata por ayudar a los demás, y en ejercer mi
                  profesión de la manera más profesional posible. Elegí este
                  camino porque siempre me ha impresionado las diferentes formas
                  de gestionar los conflictos de cada persona y las capacidades
                  que tenemos de esforzarnos en superar las dificultades que nos
                  acontecen. Como se puede observar, otorgo especial importancia
                  al poder que le concedemos a nuestros pensamientos y creo
                  firmemente en la capacidad individual e innata de las personas
                  de superación, para responsabilizarse de sus vidas en momentos
                  difíciles y buscar una salida que nos devuelva hacia el
                  bienestar personal.
                  <br />
                  <br />
                  Desde que comencé, llevo años formándome de manera
                  autodidacta, leyendo y estando actualizada sobre los avances
                  en las investigaciones. Me interesa conocer en detalle los
                  diferentes modelos de tratamiento desde visiones más clásicas
                  hasta los últimos descubrimientos, para poder ofrecer el
                  tratamiento más personalizado según las necesidades de cada
                  persona. El enfoque Cognitivo- Conductual es el más acorde a
                  mi manera de trabajar, aunque soy flexible siempre intentando
                  abordar la problemática de la persona que tengo delante
                  teniendo en mente diferentes opciones de abordaje acordes a su
                  caso concreto.
                  <br />
                  <br />
                  Estoy especializada en la rama de los Trastornos de la
                  conducta Alimentaria (TCA) y Trastornos de Personalidad (TP).
                  He trabajado en un hospital dedicado en exclusiva al
                  tratamiento de TCA, dándome experiencia en el campo y sobre
                  todo ayudando a adolescentes. Por todos los estímulos
                  amenazantes que recibimos constantemente, estoy muy
                  concienciada con lo difícil que es mantener una imagen
                  corporal y una relación con la comida sana. Estamos expuestos
                  a que nuestra autoestima y confianza en nosotros se pueda ver
                  vulnerable cada vez que nos relacionamos y no nos hace
                  personas débiles el caer en las redes del sistema en algún
                  momento crítico de nuestras vidas.
                  <br />
                  <br />
                  Desearía que confiara en mí y en usted, para que juntos
                  superemos cualquier adversidad que le esté aconteciendo y
                  pudiésemos recuperar con un trabajo conjunto una vida
                  orientada a su bienestar personal.
                </StyledTypography>
              </div>

              <div>
                <Subtitle1>Me puedes contactar en:</Subtitle1>
                <StyledContainer>
                  <ContactInfo>
                    <MdAttachEmail style={{ color: '#ff5733' }} />
                    <strong>Email: </strong>{' '}
                    <a href="mariabogutierrez2000@gmail.com">
                      mariabogutierrez2000@gmail.com
                    </a>
                  </ContactInfo>

                  <ContactInfo>
                    <FcCallback />
                    <strong>Teléfono:</strong> 686 982 198
                  </ContactInfo>

                  <ContactInfo>
                    <BsLinkedin style={{ color: '#0e76a8' }} />
                    <a
                      href="https://www.linkedin.com/in/mar%C3%ADa-balb%C3%A1s-oca%C3%B1a-587956258/"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <strong>Linkedin </strong>{' '}
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
