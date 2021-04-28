// 调用方法
export const handleSkin = (checked: boolean) => {
  if (checked) {
    document.body.classList.remove('dark')
    // 明亮主题
    addSkin('/css/antd.min.css')
  } else {
    // 暗色主题
    document.body.classList.add('dark')
    addSkin('css/antd.dark.min.css')
  }
}
// 添加皮肤的方法
function addSkin (content: string) {
  const head = document.getElementsByTagName('head')[0]
  const link = head.getElementsByTagName('link')
  let node:any = null
  for (let i = 0; i < link.length; i++) {
    const item:any = link[i]
    if (item.getAttribute('data-type') === 'theme') {
      node = item
    }
  }
  const l = document.createElement('link')
  l.dataset.type = 'theme'
  l.href = content
  l.rel = 'stylesheet'
  l.onload = () => {
    node.parentNode.removeChild(node)
  }
  head.insertBefore(l as any, head.children[0] as any)
}
