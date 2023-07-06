import { Asset } from '../../@types/generated'

export const fetchAssetURL = (asset: Asset) => asset.url

export const getAspectRatio = ({ width, height }: Asset) => {
  if (width && height) {
    if (width > height) {
      return (height / width) * 100
    }
    return (width / height) * 100
  }
  return 0
}
