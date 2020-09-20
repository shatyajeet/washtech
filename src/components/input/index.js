import React from 'react'

import { InputContainer } from './style'

export default function Input ({ placeholder, defaultValue, type, required, onChange }) {
  return <InputContainer defaultValue={defaultValue} placeholder={placeholder} type={type} required={required} onChange={e => onChange(e.target.value.trim())} />
}
