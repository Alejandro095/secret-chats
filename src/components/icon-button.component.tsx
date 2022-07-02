import { IconType } from 'react-icons'

export interface IconButtonProps {
    icon: IconType,
    onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export function IconButtonComponent ({ icon: Icon, onClick, ...rest }: IconButtonProps) {
  return (
        <button className="bg-custom-blue-150 rounded-full inline-block p-2" onClick={onClick} {...rest}>
            <Icon className="fill-custom-blue-1500" />
        </button>
  )
}
