import { Asset } from 'contentful'
import styled, { StyledComponent, DefaultTheme } from 'styled-components'

type ImageProps = Asset & {
  api?: {
    focus?:
      | 'center'
      | 'top'
      | 'right'
      | 'left'
      | 'bottom'
      | 'top_right'
      | 'top_left'
      | 'bottom_right'
      | 'bottom_left'
      | 'face'
      | 'faces'
    fit?: 'pad' | 'fill' | 'scale' | 'crop' | 'thumb'
    height?: number
    width?: number
    radius?: number | 'max'
    quality?: number
  }
}

export const Image: StyledComponent<
  'img',
  DefaultTheme,
  ImageProps
> = styled.img.attrs<ImageProps>(({ fields, ...props }) => {
  // const argsObject = { focus: f, fit, h, w, r, q }
  const args: string[] = []
  if (props.api) {
    if ('focus' in props.api) {
      args.push(`f=${props.api.focus}`)
    }
    if ('fit' in props.api) {
      args.push(`fit=${props.api.fit}`)
    }
    if ('height' in props.api) {
      args.push(`h=${props.api.height}`)
    }
    if ('width' in props.api) {
      args.push(`w=${props.api.width}`)
    }
    if ('radius' in props.api) {
      args.push(`r=${props.api.radius}`)
    }
    if ('quality' in props.api) {
      args.push(`q=${props.api.quality}`)
    }
  }
  console.log()
  return {
    alt: fields.description,
    src: args ? `${fields.file.url}?${args.join('&')}` : fields.file.url,
  }
})`
  max-width: 100%;
`
