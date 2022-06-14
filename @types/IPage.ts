import { IPage, IPageFields } from './generated/contentful'
import { isObj } from '../util'

export const hasAllIPageFieldKeys = (raw: unknown): raw is IPageFields =>
  isObj(raw) &&
  isObj(raw.body) &&
  (typeof raw.title === 'string' || typeof raw.title === 'undefined') &&
  typeof raw.slug === 'string'

export const hasAllIPageKeys = (raw: unknown): raw is Record<string, unknown> =>
  isObj(raw) &&
  isObj(raw.fields) &&
  hasAllIPageFieldKeys(raw.fields) &&
  isObj(raw.sys) &&
  typeof raw.sys.id === 'string' &&
  typeof raw.sys.type === 'string' &&
  typeof raw.sys.createdAt === 'string' &&
  typeof raw.sys.updatedAt === 'string' &&
  typeof raw.sys.locale === 'string' &&
  isObj(raw.sys.contentType) &&
  isObj(raw.sys.contentType.sys) &&
  typeof raw.sys.contentType.sys.id === 'string' &&
  typeof raw.sys.contentType.sys.linkType === 'string' &&
  typeof raw.sys.contentType.sys.type === 'string'

export const isIPage = (raw: unknown): raw is IPage =>
  isObj(raw) && hasAllIPageKeys(raw)
