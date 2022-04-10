// import { ModalUserRegistered } from '../../components/ModalUserRegistered/ModalUserRegistered';
import { RegistrationForm } from '../../components/Forms/RegistrationForm/RegistrationForm';
import { ProductsTable } from '../../components/Tables/ProductsTable';
import { HomeStyled } from './styles/Home.styled';

export const Home = () => {

  return (
      <HomeStyled id="homeBox">
        <RegistrationForm />
        <ProductsTable />
      </HomeStyled>
  )
}

 {/* {isUserRegistrationConfirmed? <ModalUserRegistered/>: null} */}
