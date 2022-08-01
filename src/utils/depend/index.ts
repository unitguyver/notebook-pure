/**
 * 创建script标签
 */
export const dependScript = (address: string) => {
  return new Promise((resolve, reject) => {
    const srcNode = document.createElement('script')

    srcNode.src = address

    srcNode.onload = resolve
    srcNode.onerror = reject

    document.body.appendChild(srcNode)
  })
}

/**
 * 创建link标签
 */
export const dependStyle = (address: string) => {
  return new Promise((resolve, reject) => {
    const linkNode = document.createElement('link')

    linkNode.type = 'text/css'
    linkNode.href = address

    linkNode.onload = resolve
    linkNode.onerror = reject

    document.body.appendChild(linkNode)
  })
}
