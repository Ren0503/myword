import { MDBInput } from 'mdb-react-ui-kit'
import React, { HTMLInputTypeAttribute, useState } from 'react'
import { Form } from 'react-bootstrap'

interface InputProps {
  field: string
  autoComplete?: string
  label: string
  setFields: (value: React.SetStateAction<string>) => void
  validation: boolean
  message: string
  type?: HTMLInputTypeAttribute
}

export const Input: React.FC<InputProps> = ({
  field,
  autoComplete,
  label,
  setFields,
  validation,
  message,
  type,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false)

  return (
    <Form.Group className='py-3'>
      <Form.Label>{label}</Form.Label>
      <MDBInput
        type={type || 'text'}
        autoComplete={autoComplete}
        name={field}
        id={field}
        onFocus={() => setIsFocus(true)}
        onChange={(e) => setFields(e.target.value)}
        required
      />
      {validation && isFocus
        ? <Form.Text>{message}</Form.Text>
        : <></>
      }
    </Form.Group>
  )
}
