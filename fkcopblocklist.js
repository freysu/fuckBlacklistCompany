/* eslint-disable no-lone-blocks */
/* eslint-disable no-eval */

var blockListArr = [
  '深圳市德清顺利科技有限公司',
  '金蝶软件中',
  '天汇金',
  '超迈',
  '智淘把',
  'GOSPELl',
  '深圳市易智博网络科技有限公',
  '深圳坐标软件集团有公司',
  '软通动力信息技术(集团)股份有限公',
  '深圳极联信息技术股份有限公司1',
  '清华大学深圳国际研究生院',
  '全朋',
  '阳光险集团',
  '安恒信'
]
test(blockListArr)
function test(tArr) {
  // var a = judgeCompanyNameWhenSearchingAll(3, uniqueArr(blockListArr))
  judgeCompanyNameWhenSearchingAllAuto(uniqueArr(tArr))
}

// /**
//  * url: https://www.zhaopin.com/companydetail/...
//  */
// function judgeCompanyNameWhenDetail() {}

function judgeCompanyNameWhenSearchingAllAuto(blockListArr) {
  if (typeof blockListArr !== 'object') {
    return false
  }
  try {
    try {
      var boss = document.querySelectorAll('.job-card-right .company-name')
      var zl = document.querySelectorAll(
        '.positionlist .iteminfo__line1__compname__name'
      )
      var lp = document.querySelectorAll('.job-card-pc-container .company-name')
      if (boss.length > 0 || zl.length > 0 || lp.length > 0) {
        // ————————————————————————————————————————————————————————
        var allCompanyArr, wsite
        if (zl.length === 0 && lp.length === 0) {
          allCompanyArr = [].slice.call(boss, 0)
          wsite = 1
        } else if (boss.length === 0 && lp.length === 0) {
          allCompanyArr = [].slice.call(zl, 0)
          wsite = 2
        } else if (boss.length === 0 && zl.length === 0) {
          allCompanyArr = [].slice.call(lp, 0)
          wsite = 3
        }
        const allCompanyNameArr = allCompanyArr.map(function (el, index) {
          return [el.innerText, index]
        })

        var res = []
        var forType = null

        for (var a = 0; a < allCompanyNameArr.length; a++) {
          for (var i = 0; i < blockListArr.length; i++) {
            if (allCompanyNameArr[a][0] === blockListArr[i]) {
              forType = 1
            } else if (
              allCompanyNameArr[a][0].indexOf(blockListArr[i]) !== -1 ||
              allCompanyNameArr[a][0].match(new RegExp(blockListArr[i], 'ig'))
            ) {
              forType = 2
            } else {
              forType = null
            }

            forType &&
              res.unshift({
                cname: blockListArr[i],
                cidx: allCompanyNameArr[a][1],
                ctype: forType
              })
          }
        }
        if (res && res.length !== 0) {
          var tempString = ''
          console.log('wsite: ', wsite)
          for (var t of res) {
            tempString += t.cname + '\n'
            switchBlockMode(0, allCompanyArr[t.cidx], t.ctype, wsite)
          }
          toastFn(
            `匹配到 ${
              res.length
            } 条黑名单公司！分别是：\n${tempString.substring(
              0,
              tempString.length - 1
            )}`
          )
        } else {
          toastFn(`恭喜你！当前页面没有黑名单公司！`)
        }
        return res

        // ————————————————————————————————————————————————————————
      } else {
        return toastFn('当前页面不支持！')
      }
    } catch (e) {
      console.log(e.message)
      if (e.message.indexOf('The provided selector is empty.') !== -1) {
        toastFn('当前页面不支持！')
      }
    }
  } catch (e) {
    console.log(e.message)
    if (e.message.indexOf('The provided selector is empty.') !== -1) {
      toastFn('当前页面不支持！')
    }
  }
}

function toastFn(msg, msg1 = null) {
  msg1 ? console.log(msg, msg1) : console.log(msg)
  msg1 ? alert(msg, msg1) : alert(msg)
}

/**
 * url : https://sou.zhaopin.com/... , https://www.zhipin.com/web/geek/job....
 */
function judgeCompanyNameWhenSearchingAll(wsite, blockListArr) {
  if (typeof wsite !== 'number' || typeof blockListArr !== 'object') {
    return false
  }
  var qsname = ''

  switch (wsite) {
    case 1:
      qsname = '.job-card-right .company-name'
      break
    case 2:
      qsname = '.positionlist .iteminfo__line1__compname__name'
      break
    case 3:
      qsname = '.job-card-pc-container .company-name'
      break
    default:
      qsname = 1
      break
  }
  try {
    if (document.querySelectorAll(qsname).length === 0) {
      return toastFn('当前页面不支持！')
    }
    const allCompanyArr = [].slice.call(document.querySelectorAll(qsname), 0)
    const allCompanyNameArr = allCompanyArr.map(function (el, index) {
      return [el.innerText, index]
    })

    var res = []
    var forType = null

    for (var a = 0; a < allCompanyNameArr.length; a++) {
      for (var i = 0; i < blockListArr.length; i++) {
        if (allCompanyNameArr[a][0] === blockListArr[i]) {
          forType = 1
        } else if (
          allCompanyNameArr[a][0].indexOf(blockListArr[i]) !== -1 ||
          allCompanyNameArr[a][0].match(new RegExp(blockListArr[i], 'ig'))
        ) {
          forType = 2
        } else {
          forType = null
        }

        forType &&
          res.unshift({
            cname: blockListArr[i],
            cidx: allCompanyNameArr[a][1],
            ctype: forType
          })
      }
    }
    if (res && res.length !== 0) {
      var tempString = ''
      for (var t of res) {
        tempString += t.cname + '\n'
        switchBlockMode(0, allCompanyArr[t.cidx], t.ctype, wsite)
      }
      toastFn(
        `匹配到 ${res.length} 条黑名单公司！分别是：\n${tempString.substring(
          0,
          tempString.length - 1
        )}`
      )
    } else {
      toastFn(`恭喜你！当前页面没有黑名单公司！`)
    }
    return res
  } catch (e) {
    console.log(e.message)
    if (e.message.indexOf('The provided selector is empty.') !== -1) {
      toastFn('当前页面不支持！')
    }
  }
}

function switchBlockMode(showMode, target, ctype, wsite) {
  switch (showMode) {
    case 0:
      if (wsite === 3) {
        target.parentNode.parentNode.parentNode.parentNode.parentNode.style.display =
          'none'
        console.info(
          target.parentNode.parentNode.parentNode.parentNode.parentNode
        )
      } else {
        target.parentNode.parentNode.parentNode.parentNode.style.display =
          'none'
      }
      break
    case 1:
      {
        var bgColor
        switch (ctype) {
          case 1:
            bgColor = 'red'
            break
          case 2:
            bgColor = 'orange'
            break
          default:
            break
        }
        if (wsite === 3) {
          target.parentNode.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
            // target.parentNode.parentNode.parentNode.parentNode.nextElementSibling.style.background =
            bgColor
        } else {
          target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor =
            target.parentNode.parentNode.parentNode.nextElementSibling.style.background =
              bgColor
        }
      }
      break
    default:
      break
  }
}

function uniqueObjArr(arr) {
  const res = new Map()
  return arr.filter((arr) => !res.has(arr.id) && res.set(arr.id, 1))
}
function uniqueArr(arr) {
  return Array.from(new Set(arr))
}

// zl
// [
//   "深圳市德清顺利科技有限公司",
//   "碧兴物联科技(深圳)股份有限公司",
//   "深圳智搜科技有限公司",
//   "西安立人行档案文件管理咨询有限公司",
//   "博彦科技承德有限公司",
//   "软通动力信息技术(集团)股份有限公司",
//   "深圳面元智能科技有限公司",
//   "中软国际",
//   "深圳极联信息技术股份有限公司",
//   "深圳市猎芯科技有限公司",
//   "深圳市易智博网络科技有限公司",
//   "深圳坐标软件集团有限公司",
//   "软通动力信息技术(集团)股份有限公司",
//   "深圳极联信息技术股份有限公司",
//   "深圳极联信息技术股份有限公司",
//   "武汉佰钧成技术有限责任公司",
//   "深圳市睿服科技有限公司",
//   "泰坦科技(深圳)有限公司",
//   "深圳极联信息技术股份有限公司",
//   "天阳科技"
// ]

// [
//   '深圳市德清顺利科技有限公司',
//   '金蝶软件中',
//   '天汇金',
//   '超迈',
//   '智淘把',
//   'GOSPELl',
//   "深圳市易智博网络科技有限公",
//   "深圳坐标软件集团有公司",
//   "软通动力信息技术(集团)股份有限公",
//   "深圳极联信息技术股份有限公司1",
//   '清华大学深圳国际研究生院',
//   '全朋',
//   '阳光险集团',
//   '安恒信'
// ]

// [
//   "安恒信息",
//   "新联数城(上海)信息技术有限公司",
//   "国联证券股份有限公司",
//   "清华大学深圳国际研究生院",
//   "阳光保险集团",
//   "四川诚道吉科技股份有限公司",
//   "广东省国际工程咨询有限公司",
//   "重庆泓宝科技股份有限公司",
//   "全朋友",
//   "药房网商城",
//   "格林酒店集团",
//   "初米网络科技(上海)有限公司",
//   "晖致医药有限公司",
//   "广州博锐信息科技有限公司",
//   "华鼎伟业",
//   "冲量在线",
//   "睿洋科技",
//   "中际联合(北京)科技股份有限公司",
//   "深圳北极芯微电子有限公司",
//   "新郦璞科技(上海)有限公司",
//   "恒大新能源汽车投资控股集团有限公司",
//   "湖北工建科技产业投资有限公司",
//   "北京智明创兴科技有限公司",
//   "元气玛特",
//   "香港中文大学(深圳)未来智联网络研究院",
//   "Michael Page",
//   "海达保险经纪有限公司",
//   "清华同衡",
//   "北京国信会视科技有限公司",
//   "武汉研锶信息科技有限公司",
//   "深圳存真求实科技有限公司",
//   "金蝶",
//   "共志通信",
//   "泰康在线财产保险股份有限公司",
//   "赛意信息",
//   "合众新能源汽车有限公司",
//   "中图科信",
//   "浙江博润空间科技有限公司",
//   "深圳市睿联技术股份有限公司",
//   "暨南大学"
// ]
