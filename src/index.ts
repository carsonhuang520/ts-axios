import { buildURL } from './helpers/url'
import { AxiosRequestConfig } from './type/index'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { params, url } = config
  return buildURL(url, params)
}

export default axios