import styled from "styled-components";

export const Portafolio = styled.div`
  width: 60%;
  margin: 50px auto;
  display: flex;
`;

export const Perfil = styled.div`
  margin-top: 20px;
  flex-basis: calc(30%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;

export const InfoPerfil = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
`;

export const H1 = styled.h1`
  color: rgb(22, 95, 190);
  font-size: 24px;
`;

export const H3 = styled.h3`
  color: rgb(22, 95, 190);
  font-size: 24px;
`;

export const Image = styled.img`
  width: 80%;
  border-radius: 50%;
  box-shadow: 0 1px 10px 3px rgba(0, 0, 0, 0.5);
`;

export const P = styled.p`
  color: rgba(0, 0, 0, 0.5);
`;

export const InfoExtra = styled.div`
  flex-basis: calc(60%);
  padding: 10px 30px;
`;

export const EstudiosDiv = styled.div`
  display: flex;
  flex-direction: column;
  border: 2px solid orange;
  padding: 10px;
`;

export const ExperienciaDiv = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
  border: 2px solid purple;
`;

export const CertificacionesDiv = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
  border: 2px solid lightgreen;
`;

export const HabilidadesDiv = styled.div`
  margin-top: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 10px 20px;
  border: 2px solid rgb(63, 20, 34);
`;

export const Herramientas = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
`;
