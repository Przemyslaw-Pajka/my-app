import styled from 'styled-components'

export const ModalStyled = styled.div`
    background: #fff;
    min-width: min-content;
    max-width: max-content;
    height: max-content;
    margin: auto;
    border-radius: 7px;
    border: 1px solid #b9b9b9;
    position: absolute;
    inset: 0;
    
    @media (max-width: 450px) {
        border: none;
    }
`