/*
 * @Author: freysu
 * @Date: 2024-03-15 04:16:13
 * @LastEditors: freysu
 * @LastEditTime: 2024-03-15 04:18:58
 * @Description: file content
 */
// 定义一个模块来处理自动屏蔽黑名单公司
const autoBlockModule = (() => {
  const enable_Block = settingsModule.getSettings().autoBlockingEnabled

  const blockedClass = 'blocked-company'

  const isCompanyBlocked = (companyName) => {
    const lowerCaseName = companyName.toLowerCase()
    return listModule.isInBlackList(lowerCaseName)
  }

  const isCompanyWhitelisted = (companyName) => {
    const lowerCaseName = companyName.toLowerCase()
    return listModule.isInWhiteList(lowerCaseName)
  }

  const blockCompany = (element) => {
    if (
      !element.classList.contains(blockedClass) &&
      isCompanyBlocked(element.textContent)
    ) {
      element.classList.add(blockedClass)
    }
  }

  const unblockCompany = (element) => {
    element.classList.remove(blockedClass)
  }

  const toggleBlocking = (blockSelector) => {
    const companies = document.querySelectorAll(blockSelector)
    companies.forEach((company) => {
      const companyName = company.textContent.trim()
      if (isCompanyWhitelisted(companyName)) {
        unblockCompany(company)
      } else if (enable_Block && isCompanyBlocked(companyName)) {
        blockCompany(company)
      }
    })
  }

  // 公开接口
  return {
    toggleBlocking
  }
})()

// // 在页面加载时执行自动屏蔽
// window.addEventListener('load', autoBlockModule.toggleBlocking)
