/*
 * @Author: freysu
 * @Date: 2024-03-14 20:25:57
 * @LastEditors: freysu
 * @LastEditTime: 2024-03-15 05:28:41
 * @Description: file contentx
 */
// ==UserScript==
// @name         Auto Block Blacklist Companies and Auto Send Resume
// @namespace    https://freysu.github.io/
// @version      1.0.1
// @description Auto blocking blacklist companies and auto sending resume to job listings
// @author       FreySu
// @match        *://*.zhipin.com/*
// @match        *://*.zhaopin.com/*
// @match        *://*.liepin.com/*
// @run-at       document-idle
// @license      Apache Licence 2.0
// @require      https://cdn.staticfile.org/limonte-sweetalert2/8.19.0/sweetalert2.all.min.js
// @require      https://unpkg.com/axios/dist/axios.min.js
// @grant        GM_addStyle
// @grant        GM_xmlhttpRequest
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_listValues
// @grant        GM_registerMenuCommand
// @grant        GM_unregisterMenuCommand
// @grant        GM_addValueChangeListener
// @grant        unsafeWindow
// ==/UserScript==

/* eslint-disable no-inner-declarations */
/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable new-cap */
/* eslint-disable no-extra-semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */
// 定义一个模块来处理用户界面相关的操作
const uiModule = (() => {
  const styles = {
    blockingStyle: '',
    floatContainerStyle: '#TManays{z-index:999999; position:absolute; ... }' // 省略其他样式...
  }

  const addStyle = () => {
    GM_addStyle(styles.blockingStyle)
    GM_addStyle(styles.floatContainerStyle)
  }

  // 公开接口
  return {
    addStyle
  }
})()

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

// 定义一个模块来处理网络请求
const networkModule = (() => {
  const axiosInstance = axios.create({
    responseType: 'json',
    headers: {
      'Content-Type': 'application/json',
      'User-Agent': 'MyUserAgent/1.0'
    }
  })

  const get = async (url) => {
    try {
      const response = await axiosInstance.get(url)
      return response.data
    } catch (error) {
      console.error(`Error during GET request to ${url}:`, error)
      throw error // 抛出错误以便上层调用者处理
    }
  }

  const post = async (url, data, config) => {
    try {
      const response = await axiosInstance.post(url, data, config)
      return response.data
    } catch (error) {
      console.error(`Error during POST request to ${url}:`, error)
      throw error // 抛出错误以便上层调用者处理
    }
  }

  // 公开接口
  return {
    get,
    post
  }
})()

// // 示例：在发送简历后显示成功提示
// const sendResume = async (/* 参数 */) => {
//   try {
//     // ... 发送简历的代码 ...
//     notificationModule.success('Resume sent successfully!')
//   } catch (error) {
//     notificationModule.error('Failed to send resume:', error.message)
//   }
// }

// // 示例：发送简历到一个职位
// const sendResume = async (jobId, securityId, lid, zp_token) => {
//   const url = `https://www.zhipin.com/wapi/zpgeek/friend/add.json?securityId=${securityId}&jobId=${jobId}&lid=${lid}`
//   const data = { greeting: 'Hello, I am interested in this position.' } // 示例问候语

//   try {
//     const response = await networkModule.post(url, data, {
//       headers: { zp_token: zp_token }
//     })
//     console.log(`Resume sent to job ${jobId}:`, response)
//   } catch (error) {
//     console.error(`Failed to send resume to job ${jobId}:`, error)
//   }
// }

// // 这个示例函数将在实际的职位处理逻辑中被调用
// const processJobListings = async () => {
//   const jobElements = document.querySelectorAll('.job-list-item')
//   jobElements.forEach((jobElement) => {
//     // ...职位处理逻辑...
//     const jobId = jobElement.getAttribute('data-job-id')
//     const securityId = jobElement.getAttribute('data-security-id')
//     const lid = jobElement.getAttribute('data-list-id')
//     if (jobId && securityId && lid) {
//       sendResume(jobId, securityId, lid, 'your_zp_token_here')
//     }
//   })
// }

// // 这个函数将在页面加载完成后被调用
// const onJobListingsPageLoad = () => {
//   if (location.pathname.includes('/job/')) {
//     processJobListings()
//   }
// }

// // 监听 DOM 变化，以便在新职位列表被加载后执行处理
// const observer = new MutationObserver((mutations) => {
//   mutations.forEach((mutation) => {
//     if (mutation.addedNodes.length) {
//       onJobListingsPageLoad()
//     }
//   })
// })

// const config = { childList: true, subtree: true }
// observer.observe(document.body, config)

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

// 定义一个模块来处理自动发送简历
const autoSendResumeModule = (() => {
  const sendResumeEnabled = settingsModule.getSettings().autoSendResumeEnabled
  const jobListSelector = '.job-list-item' // 假设所有的职位列表项都包含在这个类名中
  const jobDetailsUrlPattern = /^https?:\/\/.*\/(job|position)\/\d+/ // 职位详情页的URL模式

  const getJobDetailsUrl = (jobElement) => {
    const links = jobElement.querySelectorAll('a')
    for (const link of links) {
      const href = link.getAttribute('href')
      if (jobDetailsUrlPattern.test(href)) {
        return href
      }
    }
    return null
  }

  const sendResumeToJob = async (jobId, securityId, lid, zp_token) => {
    try {
      await networkModule.post(
        'https://www.zhipin.com/wapi/zpgeek/friend/add.json',
        {
          securityId,
          jobId,
          lid,
          greeting: '自动发送的简历'
        },
        {
          zp_token: zp_token
        }
      )
      console.log(`Resume sent to job ${jobId} successfully.`)
    } catch (error) {
      console.error(`Failed to send resume to job ${jobId}:`, error)
    }
  }

  const handleJobList = () => {
    const jobElements = document.querySelectorAll(jobListSelector)
    jobElements.forEach((jobElement) => {
      const jobId = jobElement.getAttribute('data-job-id')
      const securityId = jobElement.getAttribute('data-security-id')
      const lid = jobElement.getAttribute('data-list-id')
      if (jobId && securityId && lid) {
        sendResumeToJob(jobId, securityId, lid, 'your_zp_token_here')
      }
    })
  }

  // 公开接口
  return {
    handleJobList
  }
})()

// // 在页面加载时执行自动发送简历
// window.addEventListener('load', autoSendResumeModule.handleJobList)

// 招聘网站特定的业务逻辑模块
const jobSiteLogicModule = (() => {
  const handleJobSite = () => {
    const currentHost = window.location.hostname
    let jobListPromises = []

    switch (currentHost) {
      case 'zhipin.com':
        // ... BOSS直聘的业务逻辑 ...
        jobListPromises.push(handleBossZhipinJobList())
        break
      case 'zhaopin.com':
        // ... 智联招聘的业务逻辑 ...
        jobListPromises.push(handleZhiLianZhaopinJobList())
        break
      case 'liepin.com':
        // ... 猎聘网的业务逻辑 ...
        jobListPromises.push(handleLiepinJobList())
        break
      default:
        notificationModule.warning('当前网站不支持')
        return
    }

    Promise.all(jobListPromises)
      .then(() => {
        notificationModule.success('所有操作已完成')
      })
      .catch((error) => {
        notificationModule.error('处理过程中发生错误:', error)
      })
  }

  //  BOSS直聘的业务逻辑
  const handleBossZhipinJobList = () => {
    // ...  BOSS直聘的自动发送简历和屏蔽逻辑 ...
    return new Promise((resolve, reject) => {
      // 示例逻辑
      const jobElements = document.querySelectorAll('.job-list-item')
      jobElements.forEach((jobElement) => {
        // ... 处理每个职位元素 ...
        resolve()
      })
    })
  }

  // 智联招聘的业务逻辑
  const handleZhiLianZhaopinJobList = () => {
    // ... 智联招聘的自动发送简历和屏蔽逻辑 ...
    return new Promise((resolve, reject) => {
      // 示例逻辑
      const jobElements = document.querySelectorAll('.lagou-job-item')
      jobElements.forEach((jobElement) => {
        // ... 处理每个职位元素 ...
        resolve()
      })
    })
  }

  // 猎聘网的业务逻辑
  const handleLiepinJobList = () => {
    // ... 猎聘网的自动发送简历和屏蔽逻辑 ...
    return new Promise((resolve, reject) => {
      // 示例逻辑
      const jobElements = document.querySelectorAll('.liepin-job-item')
      jobElements.forEach((jobElement) => {
        // ... 处理每个职位元素 ...
        resolve()
      })
    })
  }

  return {
    handleJobSite
  }
})()

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
