import { Asset } from 'contentful'

export const fetchAssetURL = (asset: Asset) => asset.fields.file.url

export const getAspectRatio = (asset: Asset) => {
  if (asset.fields.file.details.image) {
    const { width, height } = asset.fields.file.details.image
    if (width > height) {
      return (height / width) * 100
    }
    return (width / height) * 100
  }
  return 0
}
