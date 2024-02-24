import styled from "@emotion/styled";
import useSelectMonedas from "../hooks/useSelectMonedas";
import monedas from "../data/monedas";
import { useEffect, useState } from "react";
import Error from "./Error";

const Input = styled.input`
    background-color: #9497FF;
    border: none;
    width: 100%;
    padding: 10px;
    color: #FFF;
    font-weight: 700;
    text-transform: uppercase;
    font-size: 20px;
    border-radius: 5px;
    transition: background-color .3s ease;
    margin-top: 30px;
    margin-bottom: 1rem;
    
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #FFF;

    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-style: normal;

    font-family: "Lato", sans-serif;
    font-weight: 900;
    font-style: normal;

    &:hover {
        background-color: #7A7DFE;
        cursor: pointer;
    }
`

const Formulario = ({ setMonedas }) => { 

    const [ cryptos, setCryptos ] = useState([]);
    const [ error, setError ] = useState(false);

    const [ moneda, SelectMonedas ] = useSelectMonedas('Elige tu moneda', monedas);
    const [ criptoMoneda, SelectCriptoMoneda ] = useSelectMonedas('Elige tu Cripto Moneda', cryptos);

    useEffect(() => { 
        const consultarApi = async () => {
            const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&tsym=usd`;
            const res = await fetch(url);
            const coinCode = await res.json();

            const arrayCripto = coinCode.Data.map( crypto => {

                const cryptoObject = {
                    id: crypto.CoinInfo.Name,
                    nombre: crypto.CoinInfo.FullName
                };

                return cryptoObject;
            });

            setCryptos(arrayCripto);
        };

        consultarApi();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if ([moneda, criptoMoneda].includes('')) {
            setError(true)

            return;

        } else {
            setError(false);
            setMonedas({
                moneda, 
                criptoMoneda
            });
        }
    };

    return (
        <>
        {error && <Error>Todos los campos son obligatorios</Error>}
        <form 
            action=""
            onSubmit={ handleSubmit }>
            <SelectMonedas />
            <SelectCriptoMoneda />

            <Input
                type="submit"
                value="Cotizar" />
        </form>
        </>
    )
}

export default Formulario;