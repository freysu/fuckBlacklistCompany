// 定义一个模块来处理黑名单和白名单
const listModule = (() => {
  const blackList = GM_getValue('blackList') || []
  const whiteList = GM_getValue('whiteList') || []

  const getUniqueList = (list) => Array.from(new Set(list))

  const getBlackList = () => getUniqueList(blackList)

  const getWhiteList = () => getUniqueList(whiteList)

  // 检测公司是否在黑名单中
  const isInBlackList = (companyName) =>
    getBlackList().some((name) => new RegExp(companyName, 'ig').test(name))

  // 检测公司是否在白名单中
  const isInWhiteList = (companyName) =>
    getWhiteList().some((name) => new RegExp(companyName, 'ig').test(name))

  // 公开接口
  return {
    getBlackList,
    getWhiteList,
    isInBlackList,
    isInWhiteList
  }
})()
