import http from './public'
let root = '/zsy'
// 用户进入页面后保存数据
export const visit = (params) => {
  return http.fetchPost(root + '/m/filter/cheCredit/visit.json', params)
}
