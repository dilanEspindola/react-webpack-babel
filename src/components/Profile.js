import React from "react";
import { Informacion } from "./Informacion";
import { Portafolio, Perfil, InfoPerfil, H1, H3, Image, P } from "./Styles";

export const Profile = () => {
  return (
    <Portafolio>
      <Perfil>
        <Image src="https://res.cloudinary.com/dp9zv16le/image/upload/v1637532904/personal1_djmufy.png" />
        <InfoPerfil>
          <H1>John Faber Flórez Vasco</H1>
          <H3>Consultor instructo de software</H3>
          <P>Desarrollando futuros programadores</P>
          <P>Medellin, Colombia</P>
        </InfoPerfil>
      </Perfil>
      <Informacion />
    </Portafolio>
  );
};
