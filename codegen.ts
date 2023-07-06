import 'dotenv/config'
import { CodegenConfig } from '@graphql-codegen/cli'

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
  documents: ['graphql/**/*.graphql'],
  generates: {
    './@types/generated.ts': { plugins: ['typescript'] },
    './@types/': {
      preset: 'near-operation-file',
      presetConfig: {
        baseTypesPath: 'generated.ts',
      },
      plugins: ['typescript-operations', 'typed-document-node'],
    },
  },
}

export default config
