// 定义一个模块来处理用户通知
const notificationModule = (() => {
  const hintEnabled = settingsModule.getSettings().showHintEnabled

  const showNotification = (message, type = 'info', timeout = 3000) => {
    if (hintEnabled) {
      new Notification(`[${type.toUpperCase()}]`, {
        body: message,
        icon: type === 'error' ? 'icon-error.png' : 'icon-info.png'
      })
      console[`log`](`[${type.toUpperCase()}]`, message) // 使用日志级别输出
    }
  }

  const success = (message) => showNotification(message, 'success')
  const error = (message) => showNotification(message, 'error')
  const info = (message) => showNotification(message, 'info')
  const warning = (message) => showNotification(message, 'warning')

  // 公开接口
  return {
    success,
    error,
    info,
    warning
  }
})()
