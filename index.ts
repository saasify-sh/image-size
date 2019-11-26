import { imageSize } from 'image-size'
import { ISizeCalculationResult } from 'image-size/dist/types/interface'
import request from 'request-promise-native'

export default async (url: string): Promise<ISizeCalculationResult> => {
  let body

  try {
    const response = await request({
      url,
      encoding: null,
      resolveWithFullResponse: true
    })

    body = response.body

    if (response.headers['content-type'].indexOf('image') === -1) {
      throw 'URL must return image'
    }
  } catch (error) {
    if (error) throw new Error(error)
  }

  return imageSize(body)
}
