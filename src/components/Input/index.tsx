import { FC, InputHTMLAttributes } from 'react'
import { InputCustom } from './styles'

export const Input: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  return <InputCustom {...props} />
}
