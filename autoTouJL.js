// ==UserScript==
// @name         autoTouJL
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       FreySu
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_addValueChangeListener
// @match        *://blog.csdn.net/*
// @match        *://c.liepin.com/apply/*
// @run-at       document-end
// @require      https://cdn.staticfile.org/limonte-sweetalert2/8.19.0/sweetalert2.all.min.js
// ==/UserScript==
/* eslint-disable no-undef */
/* eslint-disable no-lone-blocks */
/* eslint-disable new-cap */
/* eslint-disable no-extra-semi */
/* eslint-disable space-before-function-paren */
/* eslint-disable indent */

;(async function () {
  'use strict'

  Element.prototype.matches =
    Element.prototype.matches ||
    Element.prototype.matchesSelector ||
    Element.prototype.webkitMatchesSelector ||
    Element.prototype.msMatchesSelector ||
    Element.prototype.mozMatchesSelector

  const myToast = {
    /**
     * @description toast通知
     * @param {string} type "success", "error", "warning", "info" or "question"
     * @param {string} title 标题
     * @param {number} timer 显示时间
     * @param {string} html html类型内容，选填
     */
    normal: function (type, title, timer, html = null) {
      const Toast = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        showCloseButton: true
      })
      Toast.fire({
        type,
        title,
        html,
        timer
      })
    },
    /**
     * @description 不控制的常规弹窗
     * @param {string} type "success","error","warning","info" or "question"
     * @param {string} title 标题
     * @param {number} timer 显示时间
     * @param {boolean} isHtml text or html
     * @param {string} content 内容
     */
    multipleNotControl: function (
      type = null,
      title,
      timer,
      isHtml,
      content,
      confirmCallBack
    ) {
      if (isHtml) {
        text = null
        html = content
      } else {
        text = content
        html = null
      }
      Swal.fire({
        type,
        title,
        text,
        timer,
        html,
        confirmButtonText: '我知道了'
      }).then((result) => {
        confirmCallBack(result)
      })
    },
    multipleControl: function (
      type = null,
      title,
      timer,
      isHtml,
      content,
      confirmCallBack
    ) {
      if (isHtml) {
        text = null
        html = content
      } else {
        text = content
        html = null
      }
      Swal.fire({
        type,
        title,
        text,
        timer,
        html,
        confirmButtonText: '我知道了',
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false
      }).then((result) => {
        confirmCallBack(result)
      })
    }
  }

  /**
   * 第一次运行
   * @param {Array} blackListArr 黑名单列表
   * @param {Array} whiteListArr 白名单列表
   */
  async function firstRun(blackListArr, whiteListArr) {
    console.log('firstRun！')
    console.log(GM_getValue('_.unique.name.greetings'))
    GM_sendMessage('_.unique.name.greetings', 'hello', window.location.href)
  }

  /**
   *
   * @param {object} parent 被监听的元素的父节点，也可以是document
   * @param {Node} selector 被监听的dom元素
   * @param {Number} timeout 超时跳出时间，默认为0，则等到出现为止，大于0才超时跳出
   * @returns
   */
  function getElement(parent, selector, timeout = 0) {
    return new Promise((resolve) => {
      let result = parent.querySelector(selector)
      if (result) return resolve(result)
      let timer
      const mutationObserver =
        window.MutationObserver ||
        window.WebkitMutationObserver ||
        window.MozMutationObserver
      if (mutationObserver) {
        const observer = new mutationObserver((mutations) => {
          for (const mutation of mutations) {
            for (const addedNode of mutation.addedNodes) {
              if (addedNode instanceof Element) {
                result = addedNode.matches(selector)
                  ? addedNode
                  : addedNode.querySelector(selector)
                if (result) {
                  observer.disconnect()
                  timer && clearTimeout(timer)
                  return resolve(result)
                }
              }
            }
          }
        })
        observer.observe(parent, {
          childList: true,
          subtree: true
        })
        if (timeout > 0) {
          timer = setTimeout(() => {
            observer.disconnect()
            return resolve(null)
          }, timeout)
        }
      } else {
        const listener = (e) => {
          if (e.target instanceof Element) {
            result = e.target.matches(selector)
              ? e.target
              : e.target.querySelector(selector)
            if (result) {
              parent.removeEventListener('DOMNodeInserted', listener, true)
              timer && clearTimeout(timer)
              return resolve(result)
            }
          }
        }
        parent.addEventListener('DOMNodeInserted', listener, true)
        if (timeout > 0) {
          timer = setTimeout(() => {
            parent.removeEventListener('DOMNodeInserted', listener, true)
            return resolve(null)
          }, timeout)
        }
      }
    })
  }

  const _historyWrap = function (type) {
    const orig = history[type]
    const e = new Event(type)
    return function () {
      const rv = orig.apply(this, arguments)
      e.arguments = arguments
      window.dispatchEvent(e)
      return rv
    }
  }
  history.pushState = _historyWrap('pushState')
  history.replaceState = _historyWrap('replaceState')

  window.addEventListener('pushState', function (e) {
    console.log('change pushState')
  })

  function uniqueArr(arr) {
    return Array.from(new Set(arr))
  }

  function GM_onMessage(label, callback) {
    GM_addValueChangeListener(label, async function () {
      await callback.apply(undefined, arguments[2])
    })
  }
  function GM_sendMessage(label) {
    GM_setValue(label, Array.from(arguments).slice(1))
  }

  GM_onMessage('_.unique.name.greetings', async function (src, message) {
    console.log('[onMessage]', src, '=>', message)

    if (window.location.href.indexOf('c.liepin.com/apply') == -1) {
      var b = `https://c.liepin.com/apply/applySuccess/?job_id=${'44167547'}&job_kind=6&apply_prior=1`
      window.location.href = b
    } else {
      console.log('sddd')
      var c = await getElement(document, 'input[value="一键投递"]')
      console.log(c)
      if (c !== null) {
        console.log('ddddd')

        c.click()
        history.back()
        // history.back()
        console.log('found')
      } else {
        console.log('not found')
      }
    }
  })

  await firstRun()
})()
