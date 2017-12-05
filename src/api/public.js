import axios from 'axios'
import qs from 'qs'
import { Indicator, Toast } from 'mint-ui'
axios.defaults.timeout = 7000
// axios.defaults.headers.post['Content-Type'] = 'application/x-www=form-urlencoded'

export default {
  fetchGet(url, params) {
    return new Promise((resolve, reject) => {
      axios.get(url, params).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  fetchPost(url, data = {}) {
    return new Promise((resolve, reject) => {
      Indicator.open()
      axios.post(url, qs.stringify(data)).then(res => {
        Indicator.close()
        resolve(res.data)
      }).catch(error => {
        Toast('请求超时，网速有点慢哦')
        Indicator.close()
        reject(error)
      })
    })
  },
  fetchPostPrimary(url, data = {}) {
    return new Promise((resolve, reject) => {
      axios.post(url, qs.stringify(data)).then(res => {
        resolve(res.data)
      }).catch(error => {
        Toast('请求超时，网速有点慢哦')
        Indicator.close()
        reject(error)
      })
    })
  },
  fetchPostForUpload(url, data = {}) {
    return new Promise((resolve, reject) => {
      let config = {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      } // 添加请求头
      axios.post(url, data, config).then(res => {
        resolve(res.data)
      }).catch(error => {
        reject(error)
      })
    })
  }
}
