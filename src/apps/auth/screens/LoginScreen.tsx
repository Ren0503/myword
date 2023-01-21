import { AuthLayout, Input, isLowerCase, isNotEmpty, useAppDispatch, useAppSelector } from 'base'
import React, { useState, useEffect, useCallback, SyntheticEvent } from 'react'
import { Button, Form, Spinner } from 'react-bootstrap'
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
        <Spinner />
      ) : (
        <Form onSubmit={submitHandler}>
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

          <Button type='submit'>Login</Button>
        </Form>
      )}
    </AuthLayout>
  )
}
