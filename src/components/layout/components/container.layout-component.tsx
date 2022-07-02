import { BaseProps } from '@interfaces/base-props.interface'

interface ContainerProps extends BaseProps {}

export function ContainerLayoutComponent ({ children } : ContainerProps) {
  return (
        <div className="bg-custom-blue-100 h-[100vh] w-full sm:rounded-md sm:aspect-[9/19] sm:h-[800px] sm:w-auto overflow-hidden flex flex-row">
            {children}
        </div>
  )
}
