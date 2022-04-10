import { Modal } from "../../components/Modal/Modal"
import { Error404Styled, LinkStyled } from "./styles/Error404.styled"

export const Error404 = () => (
    <Modal>
        <Error404Styled>
            <h1>404 - Nie znaleziono takiej strony!</h1>
            <LinkStyled to="/">Wróć do strony głównej</LinkStyled>
        </Error404Styled>
    </Modal>
)