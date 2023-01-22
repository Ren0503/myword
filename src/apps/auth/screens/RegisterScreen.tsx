import { GENDER_OPTIONS } from 'apps/profile'
import { AuthLayout, isAlpha, isLowerCase, isEmail, match } from 'base'
import { MDBBtnGroup, MDBInput, MDBRadio, MDBValidation, MDBValidationItem } from 'mdb-react-ui-kit'
import { ChangeEvent, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { IRegisterRequest } from '../interfaces'

export const LoginScreen = () => {
  const navigate = useNavigate()

  const regexPass = new RegExp(
    /((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
  )

  const [register, setRegister] = useState<IRegisterRequest>({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    birth: '',
  })

  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setRegister({
      ...register,
      [e.target.name]: e.target.value
    })
  }


  return (
    <AuthLayout>
      <MDBValidation className='row g-3'>
        <MDBValidationItem
          className='col-md-6'
          invalid={isAlpha(register.firstName)}
          feedback='First Name must be alphabet'
        >
          <MDBInput
            value={register.firstName}
            name='firstName'
            onChange={onChange}
            id='firstName'
            required
            label='First Name'
          />
        </MDBValidationItem>

        <MDBValidationItem
          className='col-md-6'
          invalid={isAlpha(register.lastName)}
          feedback='Last Name must be alphabet'
        >
          <MDBInput
            value={register.lastName}
            name='lastName'
            onChange={onChange}
            id='lastName'
            required
            label='Last Name'
          />
        </MDBValidationItem>

        <MDBValidationItem
          className='col-md-12'
          invalid={isLowerCase(register.username)}
          feedback='Username must be lowercase'
        >
          <MDBInput
            value={register.username}
            name='username'
            onChange={onChange}
            id='username'
            required
            label='User Name'
          />
        </MDBValidationItem>

        <MDBValidationItem
          className='col-md-12'
          invalid={isEmail(register.email)}
          feedback='Email is invalid'
        >
          <MDBInput
            value={register.email}
            name='email'
            onChange={onChange}
            id='email'
            required
            label='Email'
            type='email'
          />
        </MDBValidationItem>

        <MDBValidationItem
          className='col-md-12'
          invalid={match(register.password, regexPass)}
          feedback='Password too weak'
        >
          <MDBInput
            value={register.password}
            name='password'
            onChange={onChange}
            id='password'
            required
            label='Password'
            type='password'
          />
        </MDBValidationItem>

        <MDBValidationItem>
          {Object.values(GENDER_OPTIONS).map((x) => (
            <MDBRadio name={x} id={x} value={x} label={x} onChange={onChange} inline />
          ))}
        </MDBValidationItem>

        <MDBValidationItem>

        </MDBValidationItem>

      </MDBValidation>
    </AuthLayout>
  )
}
