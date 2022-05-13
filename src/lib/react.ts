import type {
  ButtonHTMLAttributes,
  FC,
  FormEventHandler,
  HTMLAttributes,
  InputHTMLAttributes,
  ReactNode,
} from 'react'

export type DivHTMLProps = HTMLAttributes<HTMLDivElement>

export type ButtonHTMLProps = ButtonHTMLAttributes<HTMLButtonElement>
export type InputHTMLProps = InputHTMLAttributes<HTMLInputElement>

export type FormSubmitHandler = FormEventHandler<HTMLFormElement>
export type ContainerProps<P extends {} = {}> = P & {
  children: ReactNode
}

export type ContainerFC<P extends {} = {}> = FC<ContainerProps<P>>
