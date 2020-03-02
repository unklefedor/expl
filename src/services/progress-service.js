const MIN_ANIMATION_TIME = 1000

const progress = {
  install (Vue, options) {
    Vue.prototype.$progress = {
      startAnimationTime: 0,
      requests: [],

      active () {
        return this.requests.length
      },

      push (path) {
        if (!this.requests.length) {
          this.startAnimationTime = Date.now()
        }

        this.requests.push(path)
      },

      remove (path) {
        const diffTime = Date.now() - this.startAnimationTime

        setTimeout(() => {
          this.requests.splice(this.requests.indexOf(path), 1)
        }, diffTime < MIN_ANIMATION_TIME ? MIN_ANIMATION_TIME - diffTime : 0)
      }
    }
  }
}

export default progress
