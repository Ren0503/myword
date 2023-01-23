import { AuthLayout, Input, isLowerCase, useAppDispatch, useAppSelector } from 'base'
import { Button, Spinner } from 'flowbite-react'
import { SyntheticEvent, useCallback, useEffect, useState } from 'react'
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
  <Spinner
  aria-label="Medium sized spinner example"
  size="md"
/>
    ) : (
        <form className="flex flex-col gap-4" onSubmit={submitHandler}>
          <Input
            field='usernameOrEmail'
            autoComplete='email'
            type='text'
            label='Username Or Email'
            setFields={setUsernameOrEmail}
            required={true}
            validation={isLowerCase(usernameOrEmail)}
            message={'This filed is must be lowercase'}
          />

          <Input
            field='password'
            autoComplete='password'
            type='password'
            label='Password'
            required={true}
            setFields={setPassword}
            validation={true}
            message=''
          />

          <Button type='submit'>Login</Button>
        </form>
      )}
    </AuthLayout>
  )
}
