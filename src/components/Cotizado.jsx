import styled from "@emotion/styled";

const BoxPrice = styled.div`
    color: #FFF;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    display: flex;
    gap: 1rem;
    margin-bottom: 2rem;  
    align-items: center;
`

const Imagen = styled.img`
    display: block;
    width: 120px;
`

const Text = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-top: .5rem;
`

const Precio = styled.span`
    font-size: 25px;
    font-weight: 700;
`

const Cotizado = ({ cotizado }) => { 
    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = cotizado

    return(
        <BoxPrice>
            <Imagen src={`https://www.cryptocompare.com/${IMAGEURL}`} alt="imagen de las criptomonedas" />
            <div>
                <Precio>El precio es de: <span>{ PRICE }</span></Precio>
                <Text>El precio mas alto del dia: <span>{ HIGHDAY }</span></Text>
                <Text>El precio mas bajo del dia: <span>{ LOWDAY }</span></Text>
                <Text>El precio es de: <span>{ CHANGEPCT24HOUR }</span></Text>
                <Text>Ultima actualizacion: <span>{ LASTUPDATE }</span></Text>
            </div>
        </BoxPrice>
    )
};

export default Cotizado;
