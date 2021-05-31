import { transformRequest, transformResponse } from '../helpers/data'
import { processHeaders } from '../helpers/headers'
import { buildURL } from '../helpers/url'
import { AxiosPromise, AxiosRequestConfig, AxiosResponse } from '../type/index'
import xhr from './xhr'

export default function dispatchRequest(config: AxiosRequestConfig): AxiosPromise {
  processConfig(config)
  return xhr(config).then(res => {
    return transformResponseData(res)
  })
}

function processConfig(config: AxiosRequestConfig): void {
  config.url = transformURL(config)
  config.headers = transformHeaders(config)
  config.data = transformRequestData(config)
}

function transformURL(config: AxiosRequestConfig): string {
  const { params, url } = config
  return buildURL(url!, params)
}

function transformRequestData(config: AxiosRequestConfig): string {
  const { data } = config
  return transformRequest(data)
}

function transformHeaders(config: AxiosRequestConfig): string {
  const { headers = {}, data } = config
  return processHeaders(headers, data)
}

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
