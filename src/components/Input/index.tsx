import { FC, forwardRef, InputHTMLAttributes, RefObject } from 'react'
import { InputCustom } from './styles'

type Ref =
  | ((instance: HTMLInputElement | null) => void)
  | RefObject<HTMLInputElement>
  | null
  | undefined

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  issueRef: Ref
}

export const Input: FC<InputProps> = forwardRef(function Input(
  props,
  ref: Ref,
) {
  return <InputCustom {...props} ref={props.issueRef} />
})
