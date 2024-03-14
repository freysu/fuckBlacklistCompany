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
