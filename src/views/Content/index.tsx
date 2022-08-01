import React from 'react'
import { createRoot } from 'react-dom/client'
import { contentStore } from '@/store'
import { Provider } from 'react-redux'
import { dependScript } from '@/utils/depend'
import { message } from 'antd'
import Bridge, { MType } from '@/utils/bridge'
import App from './App'
import './index.less'
import '@/utils/hot-reload/hrc'

/** 创建bridge */
Bridge.appendTo(document.body)

/** 引入inject.js */
const injectJs = chrome.runtime.getURL('js/inject.js')
dependScript(injectJs).then(() => {
  Bridge.sendMessage({
    type: MType.Depend,
    value: '需要注入的js链接',
  })
})

/** 创建notebook */
const notebook = document.createElement('div')
notebook.id = 'guyver-notebook-app'

document.body.appendChild(notebook)

/** 创建message容器 */
const messageContainer = document.createElement('div')
messageContainer.id = 'guyver-notebook-message'

message.config({
  getContainer: () => messageContainer,
})
document.body.appendChild(messageContainer)

/** 渲染app */
createRoot(notebook).render(
  <Provider store={contentStore}>
    <App></App>
  </Provider>
)
