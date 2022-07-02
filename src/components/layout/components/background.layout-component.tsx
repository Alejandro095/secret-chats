import { BaseProps } from '@interfaces/base-props.interface'

interface BackgroundProps extends BaseProps {}

export function BackgroundLayoutComponent ({ children }: BackgroundProps) {
  return (
        <div className="flex-1 bg-custom-blue-100 flex justify-center items-center relative">
            {children}
        </div>
  )
}
