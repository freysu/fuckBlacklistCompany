// 主模块，整合所有功能
const mainModule = (() => {
  const init = () => {
    uiModule.addBlockingStyle()
    settingsModule.getSettings() // 确保设置被加载
    autoBlockModule.toggleBlocking() // 执行自动屏蔽
  }

  // 检查当前页面是否需要处理
  const checkPage = () => {
    // 这里应该有检查页面逻辑，例如判断是否在匹配的URL模式下
    console.log('Checking page for blacklisted companies...')
  }

  // 主函数
  const run = () => {
    init()
    checkPage()
  }

  return {
    run
  }
})()

// // 运行主模块
// mainModule.run();
