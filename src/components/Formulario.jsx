import styled from "@emotion/styled";

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

const Formulario = () => { 
    return (
        <form action="">
            <Input
                type="submit"
                value="Cotizar" />
        </form>
    )
}

export default Formulario;