import { Formik } from 'formik'
import { useContext, useState } from 'react'
import { v4 } from 'uuid'
import { useCategories } from '../../../hooks/useCategories'
import { URLS } from '../../../services/CONSTANTS'
import { post } from '../../../services/post'
import { ProductsContext } from '../../../store/products.context'
import { ButtonSubmit } from '../../Buttons/ButtonSubmit/ButtonSubmit'
import { CircleLoader } from '../../CircleLoader/CircleLoader'
import { InputField } from '../Fields/InputField/InputField'
import { FormRegistrationStyled } from './styles/FormRegistrationStyled'

export const RegistrationForm = () => {
    const [data, setData] = useContext(ProductsContext)
    const [categories, setCategories] = useState<string[]>()
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isProductCreated, setIsProductCreated] = useState<boolean>(false)

    useCategories(setCategories)
    
    return (
        <Formik
            initialValues={{ name: '', description: '', category: '', price: '' }}
            onSubmit={(values, { resetForm }) => {
                const dataFromUser = { 
                    ...values, 
                    id: Number((Date.now() * Math.random()).toFixed(0)) 
                }
               
                post({setData, url:URLS.register, dataFromUser,setIsProductCreated})
                post({setData:setCategories, url:URLS.getCategories})
                resetForm()
            }}
        >
            {(props) => {
                return (
                    <>

                        <FormRegistrationStyled
                            onReset={props.handleReset}
                            onSubmit={props.handleSubmit}
                            autoComplete="false"
                        >
                            <h1 className='form-title'>Rejestracja nowego produktu</h1>
                            <InputField
                                id="name"
                                label="Nazwa produktu"
                                name="name"
                                type="text"
                                autoComplete="false"
                                as="input"
                                value={props.values.name}
                                placeholder="Wpisz nazwe produktu"
                                required
                            />
                            <InputField
                                id="description"
                                label="Opis produktu"
                                name="description"
                                autoComplete="false"
                                type="text"
                                as="input"
                                value={props.values.description}
                                placeholder="Wpisz opis produktu"
                                required
                            />
                            <InputField
                                id="category"
                                label="Kategoria"
                                list="categories"
                                name="category"
                                type="text"
                                autoComplete="false"
                                required
                            />
                            <datalist id="categories">
                                <option value="">Wybierz kategori?? produktu</option>
                                <option value="Podzespo??y komputera">Podzespo??y komputera</option>
                                <option value="Urz??dzenia peryferyjne">Urz??dzenia peryferyjne</option>
                                <option value="Oprogramowanie">Oprogramowanie</option>
                                <option value="Inne">Inne</option>
                                {categories && categories.map((item) =>
                                    <option key={v4()} value={item}>
                                        {item}
                                    </option>
                                )}
                            </datalist>
                            <InputField
                                id="price"
                                label="Wpisz cen?? produktu:"
                                name="price"
                                autoComplete="false"
                                type="number"
                                as="input"
                                value={props.values.price}
                                placeholder="Wpisz cen?? produktu"
                                required
                            />
                            <ButtonSubmit>{isLoading?   <CircleLoader/> : 'Utw??rz produkt'}</ButtonSubmit>
                            <span className={isProductCreated? 'text-green text-strong-bold': ''}>{isProductCreated?   'Produkt zosta?? stworzony' : null}</span>
                        </FormRegistrationStyled>
                    </>
                )
            }
            }
        </Formik>
    )
}