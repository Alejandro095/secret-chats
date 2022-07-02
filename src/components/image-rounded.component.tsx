import Image, { ImageProps as NextImageProps } from 'next/image'

export interface ImageRoundedProps extends NextImageProps {
    size?: 'sm' | 'md' | 'lg' | 'xl';
}

const SIZE_CLASSES = {
  sm: {
    size: 32
  },
  md: {
    size: 48
  },
  lg: {
    size: 60
  },
  xl: {
    size: 88
  }
}

export function ImageRoundedComponent (props: ImageRoundedProps) {
  const { size } = props.size ? SIZE_CLASSES[props.size] : SIZE_CLASSES.lg

  return (
        <div>
            <Image className="rounded-full" width={size} height={size} alt={props.alt} {...props} />
        </div>
  )
}
