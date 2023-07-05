require('dotenv').config();
import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  schema: [
    {
      [`https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}/environments/master`]: {
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${
            process.env.CONTENTFUL_PREVIEW_MODE === 'true'
              ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
              : process.env.CONTENTFUL_ACCESS_TOKEN
          }`,
        },
      },
    },
  ],
  documents: ['graphql/**/*.graphql', 'graphql/*.graphql'],
  generates: {
    './__generated__/': {
      preset: 'client',
      plugins: ['typescript'],
      presetConfig: {
        gqlTagName: 'gql',
      }
    }
  }
};

export default config;