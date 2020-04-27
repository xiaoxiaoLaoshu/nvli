- 打开窗口和关闭窗口
  - open() close()
  `window.open('打开窗口的地址','打开窗口的方式')`
  - close() 小问题 在 chrom 中可以直接关闭窗口，没有提示信息 在 IE 和 FF 中禁止关闭不是有 open() 方式打开的窗口
- 常用属性
  - window.navigator.userAgent 获取浏览器信息
  - window.location 获取当前页面的文件路径
- 窗口尺寸和可视区尺寸
  - 可视区宽和高 `document.documentElement.clientWidth document.documentElement.clientHeight`
  - 滚动距离 ` //IE、FF   document.documentElement.scrollTop` 和 `chrom doucment.body.scrollTop`
  - 窗口宽和高 `document.documentElement.clientWidth document.documentElement.clientHeight + document.documentElement.scrollTop`
  - 窗口事件 window.scroll 滚动事件 window.onresize 调整窗口大小事件、
- 系统对话框
  1. 警示框 `alert('警示框');`
  2. 选择框 `confirm('提问的内容')` 返回 boolean
  3. 输入框 `prompt()` 返回字符串或null
