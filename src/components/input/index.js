import React from 'react'

import { InputContainer } from './style'

export default function Input ({ placeholder, defaultValue, value, type, required, onChange }) {
  return <InputContainer value={value} defaultValue={defaultValue} placeholder={placeholder} type={type} required={required} onChange={e => onChange(e.target.value.trim())} />
}
