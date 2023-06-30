import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import { WrapperBio, WrapperButtons, BioImage, BioName, BioDescription, ButtonBioActive } from "./styledBio";


const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);
  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <ButtonBioActive
      key={nombre as string}
      onClick={() => onClick(nombre as NombresSimpsons)}
      isActive = {
        bioActiva.id === nombre
      }     
      >
        {nombre}
      </ButtonBioActive>
    ));
    
  };

  return (
    <WrapperBio >
      <WrapperButtons >{crearBotones()}</WrapperButtons>
      <div>
        <div>
          <BioImage
            src={bioActiva.image}
            alt={bioActiva.nombre}
          />
        </div>
        <div>
          <BioName >{bioActiva.nombre}</BioName>
          <BioDescription >{bioActiva.descripcion}</BioDescription>
        </div>
      </div>
    </WrapperBio>
  );
};

export default Bio;
