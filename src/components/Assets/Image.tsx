import { Asset } from 'contentful';
import styled, { StyledComponent, DefaultTheme } from 'styled-components';

export const Image: StyledComponent<'img', DefaultTheme, Asset> = styled.img.attrs<Asset>(({ fields }) =>
  ({
    alt: fields.description,
    src: fields.file.url,
  }))`
  max-width: 100%;
`;
