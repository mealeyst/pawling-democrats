import React from 'react'
import {
  BLOCKS,
  Document,
  MARKS,
  Inline,
  Block,
  INLINES,
} from '@contentful/rich-text-types'
import {
  documentToReactComponents as defaultDocumentToReactComponents,
  Options,
} from '@contentful/rich-text-react-renderer'
import * as Typography from '../theme/Typography'
import { Image as ImageComponent } from '../Assets/Image'
import { Hero as HeroComponent } from '../Entries/Hero/Hero'
import { Card as CardComponent } from '../Entries/Card/Card'
import { Deck as DeckComponent } from '../Entries/Deck/Deck'
import { Link as LinkComponent } from '../theme/Link'
import { Asset, Card, Deck, Hero } from '../../@types/generated'
export function documentToReactComponents(json: Document, links?: any) {
  const EMBEDDABLE_ENTRY = {
    CARD: 'Card',
    DECK: 'Deck',
    HERO: 'Hero',
  }

  const renderEmbededAsset = (node: Block | Inline) => {
    const embeddedAsset = node.data.target as Asset
    if (
      embeddedAsset &&
      embeddedAsset.contentType &&
      embeddedAsset.contentType.includes('image')
    ) {
      return <ImageComponent {...embeddedAsset} />
    }
    return null
  }

  const renderEmbededEntry = (node: Block | Inline) => {
    const {
      data: {
        target: {
          sys: { id },
        },
      },
      nodeType,
    } = node
    const embeddedEntry = links.entries[
      nodeType === 'embedded-entry-block' ? 'block' : 'inline'
    ].find((link) => link.sys.id === id)
    const renderEntry = {
      [EMBEDDABLE_ENTRY.HERO]: (entry: Hero) => <HeroComponent entry={entry} />,
      [EMBEDDABLE_ENTRY.CARD]: (fields: Card) => (
        <CardComponent fields={fields} />
      ),
      [EMBEDDABLE_ENTRY.DECK]: (entry: Deck) => <DeckComponent entry={entry} />,
    }
    return renderEntry[embeddedEntry['__typename']](embeddedEntry)
  }

  const options: Options = {
    renderMark: {
      [MARKS.BOLD]: (text) => <Typography.Bold>{text}</Typography.Bold>,
      [MARKS.ITALIC]: (text) => <Typography.Italic>{text}</Typography.Italic>,
      [MARKS.UNDERLINE]: (text) => (
        <Typography.Underline>{text}</Typography.Underline>
      ),
    },
    renderNode: {
      [BLOCKS.HEADING_1]: (_node, children) => (
        <Typography.H1>{children}</Typography.H1>
      ),
      [BLOCKS.HEADING_2]: (_node, children) => (
        <Typography.H2>{children}</Typography.H2>
      ),
      [BLOCKS.HEADING_3]: (_node, children) => (
        <Typography.H3>{children}</Typography.H3>
      ),
      [BLOCKS.HEADING_4]: (_node, children) => (
        <Typography.H4>{children}</Typography.H4>
      ),
      [BLOCKS.HEADING_5]: (_node, children) => (
        <Typography.H5>{children}</Typography.H5>
      ),
      [BLOCKS.HEADING_6]: (_node, children) => (
        <Typography.H6>{children}</Typography.H6>
      ),
      [BLOCKS.PARAGRAPH]: (_node, children) => (
        <Typography.P>{children}</Typography.P>
      ),
      [BLOCKS.EMBEDDED_ASSET]: (node) => renderEmbededAsset(node),
      [BLOCKS.EMBEDDED_ENTRY]: (node) => renderEmbededEntry(node),
      [INLINES.HYPERLINK]: (node, children) => (
        <LinkComponent href={node.data.uri}>{children}</LinkComponent>
      ),
    },
  }
  return defaultDocumentToReactComponents(json, options)
}
