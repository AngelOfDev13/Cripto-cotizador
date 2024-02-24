import styled from "@emotion/styled";

const Mensaje = styled.div`
    background-color: #B7322C;
    color: #FFF;
    padding: 15px;
    font-size: 18px;
    text-transform: uppercase;
    font-family: "Lato", sans-serif;
    font-weight: 400;
    font-style: normal;
    color: #FFF;
    font-family: "Lato", sans-serif;
    font-weight: 700;
    font-style: normal;
    text-align: center;
`

const Error = ({ children }) => { 
    return (
        <Mensaje>{ children }</Mensaje>
    )
};

export default Error;