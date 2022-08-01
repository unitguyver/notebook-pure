import Bridge, { MType } from '@/utils/bridge'

Bridge.onMessage((message) => {
  console.log('inject收到content的消息：', message)
})

export {}
