/*
 * @Author: freysu
 * @Date: 2024-03-15 03:49:51
 * @LastEditors: freysu
 * @LastEditTime: 2024-03-15 04:44:45
 * @Description: file content
 */
// 定义一个模块来处理用户设置
const settingsModule = (() => {
  const defaultSettings = {
    autoBlockingEnabled: true,
    autoSendResumeEnabled: false,
    showHintEnabled: true
  }

  // 将默认设置存储在 GM 存储中
  if (!GM_getValue('settings')) {
    GM_setValue('settings', defaultSettings)
  }

  const getSettings = () => GM_getValue('settings')

  const updateSettings = (newSettings) => {
    GM_setValue('settings', { ...getSettings(), ...newSettings })
  }

  // 注册菜单命令
  const registerMenuCommands = () => {
    GM_registerMenuCommand('Enable Auto Blocking', () => {
      const settings = getSettings()
      updateSettings({ autoBlockingEnabled: true })
      GM_unregisterMenuCommand('Enable Auto Blocking')
      GM_registerMenuCommand('Disable Auto Blocking', () => {
        updateSettings({ autoBlockingEnabled: false })
      })
    })

    GM_registerMenuCommand('Enable Auto Send Resume', () => {
      const settings = getSettings()
      updateSettings({ autoSendResumeEnabled: true })
      GM_unregisterMenuCommand('Enable Auto Send Resume')
      GM_registerMenuCommand('Disable Auto Send Resume', () => {
        updateSettings({ autoSendResumeEnabled: false })
      })
    })

    GM_registerMenuCommand('Enable Hints', () => {
      const settings = getSettings()
      updateSettings({ showHintEnabled: true })
      GM_unregisterMenuCommand('Enable Hints')
      GM_registerMenuCommand('Disable Hints', () => {
        updateSettings({ showHintEnabled: false })
      })
    })
  }

  // 公开接口
  return {
    getSettings,
    updateSettings,
    registerMenuCommands
  }
})()

// 初始化用户设置
settingsModule.registerMenuCommands()
