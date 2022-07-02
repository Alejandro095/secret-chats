import { BaseProps } from '../../interfaces/base-props.interface'
import { BackgroundLayoutComponent } from './components/background.layout-component'
import { ContainerLayoutComponent } from './components/container.layout-component'

interface LayoutComponentProps extends BaseProps {}

export function LayoutComponent ({ children }: LayoutComponentProps) {
  return (
        <BackgroundLayoutComponent>
            <ContainerLayoutComponent>
                {children}
            </ContainerLayoutComponent>
        </BackgroundLayoutComponent>
  )
}
