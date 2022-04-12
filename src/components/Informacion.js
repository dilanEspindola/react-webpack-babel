import React from "react";
import {
  CertificacionesDiv,
  EstudiosDiv,
  H1,
  H3,
  ExperienciaDiv,
  HabilidadesDiv,
  P,
  Herramientas,
  InfoExtra,
} from "./Styles";

export const Informacion = () => {
  return (
    <InfoExtra>
      <Estudios />
      <Experiencia />
      <Certificaciones />
      <Habilidades />
    </InfoExtra>
  );
};

const Estudios = () => {
  return (
    <EstudiosDiv>
      <H1>Mis Estudios</H1>
      <div className="informatico">
        <H3>PCJIC - 2016</H3>
        <P>Ingeniero Informatico</P>
      </div>
      <div className="software">
        <H3>EAFIT - 2020</H3>
        <P>Magister en Ingenieria de Software</P>
      </div>
    </EstudiosDiv>
  );
};

const Experiencia = () => {
  return (
    <ExperienciaDiv>
      <H1>Experiencia</H1>
      <H3>Coordinador Geek</H3>
      <P>Desarrollando Personas en Geek Academy</P>
    </ExperienciaDiv>
  );
};

const Certificaciones = () => {
  return (
    <CertificacionesDiv>
      <H1>Certificaciones</H1>
      <H1>Google Cloud Platform</H1>
    </CertificacionesDiv>
  );
};

const Habilidades = () => {
  return (
    <HabilidadesDiv>
      <H1>Habilidades</H1>
      <Herramientas>
        <H3>HTML</H3>
        <H3>CSS</H3>
        <H3>JavaScript</H3>
        <H3>ReactJs</H3>
      </Herramientas>
    </HabilidadesDiv>
  );
};
