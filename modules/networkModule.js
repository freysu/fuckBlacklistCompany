// 接下来，我将提供网络请求模块的代码。
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
