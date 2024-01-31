import styled from "@emotion/styled"

const Contenedor = styled.div`
    color: #FFF;
    font-family: 'LATO', sans-serif;
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 30px;
`

const Imagen = styled.img`
    display: block;
    width: 125px;
`

const Texto = styled.p`
    font-size: 18px;
    span {
        font-weight: 700;
    }
`

const Precio = styled.p`
    font-size: 24px;
    span {
        font-weight: 700;
    }
`

const Resultado = ({ resultado }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = resultado

    return (
        <Contenedor>
            <Imagen src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen Cripto" />
            <div>
                <Precio>Precio: <br /><span>{PRICE}</span></Precio>
                <Texto>Precio más alto del día: <br /><span>{HIGHDAY}</span></Texto>
                <Texto>Precio más bajo del día: <br /><span>{LOWDAY}</span></Texto>
                <Texto>Variación últimas 24 horas: <br /><span>{CHANGEPCT24HOUR}</span></Texto>
                <Texto>Última Actualización: <br /><span>{LASTUPDATE}</span></Texto>
            </div>
        </Contenedor>
    )
}

export default Resultado