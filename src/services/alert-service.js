const alerts = {
  install (Vue, options) {
    Vue.prototype.$alerts = []

    Vue.prototype.$alert = {
      call (type, icon, text) {
        Vue.prototype.$alerts.push({
          type,
          text,
          icon
        })

        setTimeout(() => Vue.prototype.$alerts.shift(), 10000)
      },
      success (msg) {
        this.call('success', 'check_circle', msg)
      },
      warning (msg) {
        this.call('warning', 'priority_high', msg)
      },
      error (msg) {
        this.call('error', 'warning', msg)
      }
    }
  }
}

export default alerts
