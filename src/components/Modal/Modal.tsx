import { ModalStyled } from "./styles/Modal.styled"

export const Modal: React.FC<{className?:string}> = (props) => (
    <ModalStyled className={props.className}>
        {props.children}
    </ModalStyled>
)