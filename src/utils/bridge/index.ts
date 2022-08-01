export enum MType {
  Depend = 'depend',
}

type BridgeMessage = {
  id?: number
  type: MType
  value: any
}

/**
 * 通过修改'Bridge'标签属性实现Content和Inject之间的通信
 */
class Bridge {
  static $mId = 0
  static readonly $id = 'guyver-notebook-bridge'

  /**
   * 一般由Content创建桥梁标签、标签类型没有特殊要求
   */
  static appendTo = (container: HTMLElement) => {
    const bridge = document.createElement('input')
    bridge.id = Bridge.$id
    bridge.style.display = 'none'
    container.appendChild(bridge)
  }

  /**
   * 获取桥梁标签
   */
  static getNode = () => {
    const bridge = document.getElementById(Bridge.$id)
    return bridge as HTMLInputElement
  }

  static setValue(value: string) {
    const bridge = Bridge.getNode()
    bridge.value = value

    bridge.click()
  }

  static getValue() {
    const bridge = Bridge.getNode()
    return bridge.value
  }

  static onMessage = ($listener: (val: BridgeMessage) => void) => {
    Bridge.getNode().addEventListener('click', () => {
      const newVal = Bridge.getValue()
      if (newVal) {
        const message: BridgeMessage = JSON.parse(newVal)
        $listener(message)
      }
    })
  }

  static sendMessage = (message: BridgeMessage) => {
    message.id = ++Bridge.$mId
    Bridge.setValue(JSON.stringify(message))
  }
}

export default Bridge
