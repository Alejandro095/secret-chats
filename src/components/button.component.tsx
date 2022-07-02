import { BaseProps } from '@interfaces/base-props.interface'

export interface ButtonProps extends BaseProps {
    as?: 'button' | 'a';
    href?: string;
    outline?: boolean;
    fullWidth?: boolean;
    type?: 'outline' | 'white' | 'primary' | 'dark';
    size?: 'sm' | 'md' | 'lg' | 'xl';
    onClick?: () => void;
}

const TYPE_CLASSES = {
  outline: 'bg-transparent text-custom-blue-1200 border border-solid border-custom-blue-1200',
  white: 'bg-custom-blue-100',
  primary: 'bg-custom-blue-1200 text-custom-blue-200',
  dark: 'bg-custom-blue-1600 text-custom-blue-200'
}

const SIZE_CLASSES = {
  sm: 'font-medium px-5 py-1',
  md: 'font-medium px-6 py-1',
  lg: 'font-semibold px-8 py-2',
  xl: 'font-semibold px-10 py-3'
}

export function ButtonComponent ({ type = 'primary', size = 'md', as = 'button', children, fullWidth, onClick, href, ...rest }: ButtonProps) {
  const CustomTag = as

  if (as === 'a' && href === undefined) {
    throw new Error("ButtonComponent: href is required when parameter 'as' is set to 'a'")
  }

  return (
        <CustomTag onClick={onClick} className={`rounded-3xl text-center ${TYPE_CLASSES[type]} ${SIZE_CLASSES[size]} ${fullWidth && 'w-full'}`} href={href} {...rest}>
            {children}
        </CustomTag>
  )
}
