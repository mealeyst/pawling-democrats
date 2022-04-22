import React from 'react';
import { Asset } from 'contentful';
import styled from 'styled-components';

export const Image = styled.img.attrs(({ fields }: Asset) => ({
  alt: fields.description,
  src: fields.file.url
}))`
`