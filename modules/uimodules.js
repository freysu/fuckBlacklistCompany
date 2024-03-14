// 定义一个模块来处理用户界面相关的操作
const uiModule = (() => {
  const styles = {
    blockingStyle: '#TManays{z-index:999999; position:absolute; ... }' // 省略其他样式...
  }

  const addBlockingStyle = () => {
    GM_addStyle(styles.blockingStyle)
  }

  // 公开接口
  return {
    addBlockingStyle
  }
})()
