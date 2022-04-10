// import { CircleLoaderStyled } from "./styles/CircleLoader.styled"
import { CircleLoaderStyled } from "./styles/CircleLoader.styled"
export const CircleLoader:React.FC = () => (
    <CircleLoaderStyled viewBox="0 0 50 50">
        <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
        />
  </CircleLoaderStyled>
)