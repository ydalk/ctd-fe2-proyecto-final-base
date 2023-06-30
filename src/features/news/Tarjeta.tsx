import { useState } from "react";
import { INoticiasNormalizadas, useNoticias } from "../../hook/useNoticias";
import {
    TarjetaNoticia,
    FechaTarjetaNoticia,
    DescripcionTarjetaNoticia,
    ImagenTarjetaNoticia,
    TituloTarjetaNoticia,
    BotonLectura,
} from "./styled";
import { Modal } from "./Modal";

export const Tarjeta = () => {
    
    const noticias = useNoticias();
    const [modal, setModal] = useState<INoticiasNormalizadas | null>(null);  

    return(
        <>
        {noticias.map((n) => (
          <TarjetaNoticia key={n.id}>
            <ImagenTarjetaNoticia src={n.imagen} />
            <TituloTarjetaNoticia>{n.titulo}</TituloTarjetaNoticia>
            <FechaTarjetaNoticia>{n.fecha}</FechaTarjetaNoticia>
            <DescripcionTarjetaNoticia>
              {n.descripcionCorta}
            </DescripcionTarjetaNoticia>
            <BotonLectura onClick={() => setModal(n)}>Ver más</BotonLectura>
          </TarjetaNoticia>
        ))}
        <Modal setModal={setModal} modal={modal}/>
        </>
    )

}