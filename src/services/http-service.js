import axios from 'axios'

axios.defaults.withCredentials = true

const API_URL = 'https://136.243.103.144:9136'

const http = {
  install (Vue, options) {
    const dev = process.env.NODE_ENV === 'development'

    Vue.prototype.$http = {
      get (path, body) {
        Vue.prototype.$progress.push(path)

        return axios.get(dev ? API_URL + path : path, body)
          .then(...onResult(path))
      },

      post (path, body) {
        Vue.prototype.$progress.push(path)

        return axios.post(dev ? API_URL + path : path, body)
          .then(...onResult(path))
      },

      getLastBlocks () { return this.get('/api/v2/last-blocks/') },
      getBlock (height) { return this.get('/api/v2/block/' + height) },
      getTx (hash) { return this.get('/api/v2/tx/' + hash) },
      getAddress (address) { return this.get('/api/v2/address/' + address) }
    }

    const onResult = function (path) {
      return [
        (res) => {
          Vue.prototype.$progress.remove(path)

          return Promise.resolve(res.data)
        }, (rej) => {
          Vue.prototype.$progress.remove(path)
          rej.message = rej.response.data

          return Promise.reject(rej)
        }]
    }
  }
}

export default http
