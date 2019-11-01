##DOM 的一些方法
- DOM - document object model 文档对象模型
- 想要操作元素 必须要获取出来 
```
    // 获取元素的方法
    document.getElementById
    document.getElementsByClassName
    document.querySelector
    document.querySelectorAll
```
- 获取的元素是个对象,在js中,标签与对象相映射修改对向下属性会改变标签,修改标签会修改到对象

- DOM树 : 把页面中所有的节点组织在一个树形结构中,方便我们通过关系去操作页面

### 节点
- 元素节点 标签(比如: li,ul,p,div等) 对应 nodeType 1
- 属性节点 标签上的属性(比如: class,id,自定义的等) 对应 nodeType 2
- 文本节点 文字、回车   对应 nodeType 3
- 注释节点 注释(比如: <!--像这个-->) 对应 nodeType 8
- 文档节点 document 对应 nodeType 9

#### 节点的一些操作
- 查看节点类型: nodeType(返回的是数字)
- 操作节点内容: nodeValue(可以查可以改变节点里的内容)
- 读取节点的名字: nodeName
- 属性节点: attributes
- 查找当前元素下所有的子节点: childNodes

#### 获取节点的一些方法
- children:找到某个元素下的元素子节点 例:ul.children
- firstElementChild: 找到父级的第一个子元素
- lastElementChild: 找到父级的最有一个子元素

#### 兄弟节点
- 下一个兄弟节点: nextElementSibling
- 上一个兄弟节点: previousElementSibling

#### 父级节点
- 查找某个元素的父级节点:parentNode

### DOM方法之元素的增删改
- 创建元素: document.creatElement('标签名')
- 添加元素: parent.appandChild(child)
- 删除元素: parent.removeChild(删除的元素)

## 回流和重绘
- 回流:
    当某个元素发生了几何、坐标..的变化,会使页面局部刷新，或者导致整个页面刷新
        
- 重绘:
    元素几何、坐标..不发生变化，只是外观、颜色、风格发生变化的时候会导致某个样式重新绘制


- 注意: 不管是回流还是重绘，都是性能的杀手。我们要尽可能去少操作DOM，页面至少会回流一次，页面第一次加载的时候
回流一定会重绘，而重绘不一定会导致回流

## classList 方法
- add 添加一个或者多个class
- contains 指定的class是否存在，存在就是true，否则就是false
- remove 删除一个或多个class
- replace('旧的class','新的class') 替换class
- toggle(开关) 如果有就让他没有,如果没有就让他有