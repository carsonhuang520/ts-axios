import { transformRequest } from './helpers/data'
import { processHeaders } from './helpers/headers'
import { buildURL } from './helpers/url'
import { AxiosRequestConfig } from './type/index'
import xhr from './xhr'

function axios(config: AxiosRequestConfig): void {
  processConfig(config)
  xhr(config)
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { params, url } = config
  return buildURL(url, params)
}

function transformRequestData(config: AxiosRequestConfig): string {
  const { data } = config
  return transformRequest(data)
}

function transformHeaders(config: AxiosRequestConfig): string {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

export default axios