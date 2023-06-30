import {
  ContenedorNoticias,
  ListaNoticias,
  TituloNoticias,
} from "./styled";
import { Tarjeta} from "./Tarjeta"


const Noticias = () => {
  return (
    <ContenedorNoticias>
      <TituloNoticias>Noticias de los Simpsons</TituloNoticias>
      <ListaNoticias>
        <Tarjeta />
      </ListaNoticias>
    </ContenedorNoticias>
  );
};

export default Noticias;
