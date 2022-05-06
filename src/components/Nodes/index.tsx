import React from 'react';
import { Asset } from 'contentful';
import { BLOCKS, Document, MARKS, Inline, Block } from '@contentful/rich-text-types';
import { documentToReactComponents as defaultDocumentToReactComponents, Options } from '@contentful/rich-text-react-renderer';

import * as Typography from '../../theme/Typography';
import { Image } from '../Assets/Image';

const renderEmbededAsset = (node: Block | Inline) => {
  const embeddedAsset = node.data.target as Asset;
  if (embeddedAsset && embeddedAsset.fields && embeddedAsset.fields.file.contentType.includes('image')) {
    return <Image {...embeddedAsset} />
  }
}


const options: Options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <Typography.Bold>{text}</Typography.Bold>,
    [MARKS.ITALIC]: (text) => <Typography.Italic>{text}</Typography.Italic>,
    [MARKS.UNDERLINE]: (text) => <Typography.Underline>{text}</Typography.Underline>
  },
  renderNode: {
    [BLOCKS.HEADING_1]: (_node, children) => <Typography.H1>{children}</Typography.H1>,
    [BLOCKS.HEADING_2]: (_node, children) => <Typography.H2>{children}</Typography.H2>,
    [BLOCKS.HEADING_3]: (_node, children) => <Typography.H3>{children}</Typography.H3>,
    [BLOCKS.HEADING_4]: (_node, children) => <Typography.H4>{children}</Typography.H4>,
    [BLOCKS.HEADING_5]: (_node, children) => <Typography.H5>{children}</Typography.H5>,
    [BLOCKS.HEADING_6]: (_node, children) => <Typography.H6>{children}</Typography.H6>,
    [BLOCKS.PARAGRAPH]: (_node, children) => <Typography.P>{children}</Typography.P>,
    [BLOCKS.EMBEDDED_ASSET]: (node) => renderEmbededAsset(node)
  }
};

export const documentToReactComponents = (document: Document) => {
  return defaultDocumentToReactComponents(document, options)
}