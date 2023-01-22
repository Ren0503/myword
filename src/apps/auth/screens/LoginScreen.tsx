import { AuthLayout, Input, isLowerCase, isNotEmpty, useAppDispatch, useAppSelector } from 'base'
import { MDBBtn, MDBSpinner } from 'mdb-react-ui-kit'
import { SyntheticEvent, useCallback, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import { login } from '../actions'
export const LoginScreen = () => {
  const navigate = useNavigate()

  const [usernameOrEmail, setUsernameOrEmail] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useAppDispatch()
  const userLogin = useAppSelector((state) => state.userLogin)
  const { loading, token } = userLogin

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [token, navigate])

  const submitHandler = useCallback(
    (e: SyntheticEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(login({ usernameOrEmail, password }))
    },
    [dispatch, usernameOrEmail, password]
  )


  return (
    <AuthLayout>
      {loading ? (
        <MDBSpinner />
      ) : (
        <Form validated={false} onSubmit={submitHandler}>
          <Input
            field='usernameOrEmail'
            autoComplete='email'
            type='text'
            label='Username Or Email'
            setFields={setUsernameOrEmail}
            validation={isNotEmpty(usernameOrEmail) || isLowerCase(usernameOrEmail)}
            message={
              isNotEmpty(usernameOrEmail)
                ? 'This field is required'
                : isLowerCase(usernameOrEmail)
                  ? 'This field only lowercase'
                  : ''
            }
          />

          <Input
            field='password'
            autoComplete='password'
            type='password'
            label='Password'
            setFields={setPassword}
            validation={isNotEmpty(password)}
            message={
              isNotEmpty(password)
                ? 'This field is required'
                : ''
            }
          />

          <MDBBtn type='submit'>Login</MDBBtn>
        </Form>
      )}
    </AuthLayout>
  )
}
