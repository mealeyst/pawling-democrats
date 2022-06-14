import { Sys } from 'contentful';

export const isHero = (sys: Sys): boolean =>
  sys.contentType.sys.id === 'hero';
