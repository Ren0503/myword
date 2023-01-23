import { Label, TextInput } from 'flowbite-react'
import React, { HTMLInputTypeAttribute, useState } from 'react'

interface InputProps {
  field: string
  autoComplete?: string
  label: string
  setFields: (value: React.SetStateAction<string>) => void
  required: boolean
  validation: boolean
  message: string
  type?: HTMLInputTypeAttribute
}

export const Input: React.FC<InputProps> = ({
  field,
  autoComplete,
  label,
  setFields,
  required,
  validation,
  message,
  type,
}: InputProps) => {
  const [isFocus, setIsFocus] = useState(false)
  let color 

  if (isFocus) {
    if (validation) {
      color = 'success'
    } else {
      color = 'failure'
    }
  } else {
    color = 'info'
  }

  return (
    <div>
      <div className="mb-2 block">
        <Label htmlFor={field} value={label} />
      </div>
      <TextInput 
        id={field}
        value={field}
        color={color}
        required={required}
        type={type || 'text'}
        autoComplete={autoComplete}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(e) => setFields(e.target.value)}
        helperText={
          <React.Fragment>
            <span className='font-medium'>{message}</span>
          </React.Fragment>
        }
      />
    </div>
  )
}
