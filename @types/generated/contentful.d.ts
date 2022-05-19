// THIS FILE IS AUTOMATICALLY GENERATED. DO NOT MODIFY IT.

import { Asset, Entry } from 'contentful'
import { Document } from '@contentful/rich-text-types'

export interface IBlogPostFields {
  /** Title */
  title?: string | undefined

  /** Slug */
  slug: string

  /** Body */
  body?: Document | undefined
}

/** This is content lives under Updates section of the site and is used for more short lived content. This content will not appear in the navigation of the site, but lives in the Updates section of the site. */

export interface IBlogPost extends Entry<IBlogPostFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'blogPost'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IHeroFields {
  /** Name */
  name?: string | undefined

  /** Display */
  display?: 'Full Bleed' | 'Fit to Container' | 'Default Image Size' | undefined

  /** Hero Image */
  heroImage?: Asset | undefined

  /** Content Region */
  contentRegion?: Document | undefined
}

/** This content type designates a region of a webpage. It tends to have, but is not required to have a background image. */

export interface IHero extends Entry<IHeroFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'hero'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface INavigationMenuFields {
  /** Name */
  name?: string | undefined

  /** Menu Items */
  menuItems: Entry<{ [fieldId: string]: unknown }>[]
}

/** This content type simply references Page content types and is used to render Navigation Menus (e.g. the Site Navigation at the top of the site) */

export interface INavigationMenu extends Entry<INavigationMenuFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'navigationMenu'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export interface IPageFields {
  /** Title */
  title?: string | undefined

  /** Slug */
  slug: string

  /** Body */
  body?: Document | undefined
}

/** This content serves as more static content, think of pages such as "About Us" "What We Stand For", "Members", etc. These pages will be loaded in to the top navigation of the site. */

export interface IPage extends Entry<IPageFields> {
  sys: {
    id: string
    type: string
    createdAt: string
    updatedAt: string
    locale: string
    contentType: {
      sys: {
        id: 'page'
        linkType: 'ContentType'
        type: 'Link'
      }
    }
  }
}

export type CONTENT_TYPE = 'blogPost' | 'hero' | 'navigationMenu' | 'page'

export type LOCALE_CODE = 'en-US'

export type CONTENTFUL_DEFAULT_LOCALE_CODE = 'en-US'
