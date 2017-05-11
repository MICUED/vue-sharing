# VueSharing

## 简单实例

[TODO MVC](https://codepen.io/JounQin/pen/Omgrmm/)

## 概念

1. 数据驱动视图
2. Visual DOM/diff
3. 数据追踪，Object.defineProperty，getter/setter (React: setState)
4. template + jsx + render
5. SFC（单文件组件 .vue）
6. *SSR(服务器端渲染支持)*

## 优势

1. 易于使用，传统 script 引入或与 requireJs/webpack 等打包工具相结合（[vue-cli](https://github.com/vuejs/vue-cli)）
2. 自动数据追踪，不需要 `shouldComponentUpdate` 等优化操作
3. 文档友好清晰，官方中文支持
4. 官方路由库 vue-router 和状态管理库 vuex 支持，与 vue 自身契合度更高，因此可以非常方便地实现懒加载
5. vue-style-loader 可以处理服务器端样式，不需要 css-in-js 方案即可实现服务器端渲染
6. 便捷的双向绑定 v-model/.sync modifer 语法糖
7. 直接通过 this 而不是 this.state 操作数据流，更便捷
8. 提供全家桶 SSR DEMO [vue-hackernews-2.0](https://github.com/vuejs/vue-hackernews-2.0)

## 劣势

1. 认可度尚不如 React/RN，相关的组件数（轮子数）还有待丰富，但一般公司内部都自己封装组件 [awesome-vue](https://github.com/vuejs/awesome-vue)
2. template 最终会被编译成 js，但不方便调试错误
3. 自动将数组的一些调用方法转成响应式，造成有些反常操作无法实现响应式的效果，给初学者造成困扰
4. 相对于 avalon 等支持 IE6 的框架而已，Vue/React 等现代框架只支持 IE9+

## 基本语法

1. 实例声明
``` js
// template
// <div id="app">{{ msg }}</div>

const vm = new Vue({
  data() {
    return {
      msg: 'Hello Vue!'
    }
  }
})

vm.$mount('#app') // 将 vm 挂在到 id 为 app 的元素上
```
2. context 上下文自动绑定 vm

3. 常用属性 props/data/computed/watch/methods

4. 生命周期示意图

  ![生命周期](https://cn.vuejs.org/images/lifecycle.png)

5. 属性绑定：`v-bind:prop="value"` === `:prop="value"`, `v-bind="props"`, `prop={value}`(jsx), `{...props}`(jsx)

6. 类和样式：数组、对象、字符串表达式

7. 条件渲染：`v-if`

8. 列表渲染：`v-for`，支持数组和对象遍历

9. 事件绑定：`v-on:event="handler"` === `@event="handler"`, `onEvent="handler"`(jsx)

   1. 事件修饰符：`.stop`, `.prevent`, `.capture`, `.self`, `.once`
   2. 按键修饰符：`.enter`, `.tab`, `.delete`, `.esc`, `.space`, `.up`, `.down`, `.left`, `.right`, `.ctrl`, `.alt`,`.shift`, `.meta`，可以与非 keyup 事件混合使用，`@click.ctrl`(Ctrl + click)

10. 过滤器 filter：`{{ prop | filter }}` 相当于 `{{ filter(prop) }}`，只能在括号插值和 `v-bind` 表达式中使用

11. 指令directive：`v-directive:arg.modifier="value"`，内部实例 `v-if`, `v-model`, `v-on:event` 等

12. 组件：细粒度封装可重用代码

    1. 全局组件：`Vue.component(tagName, options)`

    2. 局部组件：

       ```javascript
       new Vue({
         template: `<child-component/>`
         components: {
           'child-component': {
             template: `<div>I'm a child</div>`
           }
         }
       })
       ```

    3. DOM 模版限制：会先被浏览器进行解析，可能造成修改，因此尽量使用 `<script type="text/template">...</script>` 或 js 字符串模版或 `.vue` 组件

    4. 组件会被重用，因此 data 必须是函数，否则会造成多个组件共享一个 data 实例

    5. 父子组件：父组件通过 `prop` 传递数据，子组件通过 `emit` 事件后父组件进行接收和处理，子组件不能直接修改 `prop`，以保证数据单项流动，Vue 2.0 中的 [`.sync`](https://vuejs.org/v2/guide/components.html#sync-Modifier) 仅仅是语法糖，需要子组件触发更新事件才能实现

    6. `prop` 验证：子组件通过 `prop.validator` 进行校验

    7. `v-on` 在组件上监听原生事件需要添加 `.native` 修饰符，即 `@click.native="handler"`

    8. [自定义组件 `v-model` 语法糖](https://vuejs.org/v2/guide/components.html#Customizing-Component-v-model)

    9. slot 插槽：父组件可以通过 `slot` 进行自定义内容传递给子组件，子组件选择性展示父组件传递的 `slots`

       ```html
       <!--parent-->
       <app>
         <app-header slot="header"></app-header>
         <app-body></app-body>
         <app-footer slot="footer"></app-footer>
       </app>

       <!--child/app-->
       <div>
         <slot v-if="exp1" name="header"></slot>
         <slot></slot>
         <slot v-if="exp2" name="footer"></slot>
       </div>
       ```

       `slot` 可以设置*备用内容*，在父组件未设置相应 `slot` 时显示


## 深入使用

1. 响应式数据
   1. 原理：初始化声明的属性会被 `Object.defineProperty` 转化为 `getter` 和 `setter`，即能够通过 `setter` 监听到数据的变化，同时针对数组属性，对其常用的会影响数组本身的方法进行重写如： `splice`, `shift`, `pop`, `unshift` 等
   2. 只有通过 props 传递、data 中声明和 computed 计算出的属性才是响应式的
   3. 对已有属性动态添加嵌套属性，`Vue.set(object, key, value)` 或 `this.$set(object, key, value)`， 此方法支持对数组的操作
   4. DOM 更新是异步的，即多次对同一属性进行变更，只有最后一次操作会响应到 DOM 中，通过 `Vue.nextTick(callback)` 或 `this.$nextTick(callback)` 获取更新后的 DOM 数据

2. 过渡效果/动画进出
   1. `transition` 组件，支持 `v-if`, `v-show` 节点、动态组件 `<component :is="view">`、 组件根节点，通过 `name` 属性指定动画名称

   2. [默认支持的 CSS 过渡类名](https://vuejs.org/v2/guide/transitions.html)：`v-enter`、`v-enter-active`、`v-enter-to`、`v-leave`、`v-leave-active`、`v-leave-to`，支持 `transition` 和 `animation`

   3. 自定义过渡类名：`enter-class`, `enter-active-class`, `enter-to-class`, `leave-class`, `leave-active-class`, `leave-to-class`，与默认类名一一对应

   4. 同时使用 `transition` 和 `animation` 时需要指定  `type` 使 Vue 知道应该监听 `transitionend` 还是 `animationend`

   5. 父组件的过渡无法获知子组件的过渡状态，可以通过 `:duration="1000"` 或 `:duration="{enter: 500, leave: 800}"` 属性指定整体过渡时间

   6. 使用事件钩子实现 js 动画：

      ```html
      <transition
        v-on:before-enter="beforeEnter"
        v-on:enter="enter"
        v-on:after-enter="afterEnter"
        v-on:enter-cancelled="enterCancelled"
        v-on:before-leave="beforeLeave"
        v-on:leave="leave"
        v-on:after-leave="afterLeave"
        v-on:leave-cancelled="leaveCancelled"
      >
        <!-- ... -->
      </transition>
      ```

   7. 过渡模式：默认同时触发，in-out 先进后出，out-in 先出后进

   8. 列表过渡：`transition-group` 组件

   9. 更多过渡魔法：[过渡效果](https://vuejs.org/v2/guide/transitions.html)、[过渡状态](https://vuejs.org/v2/guide/transitioning-state.html)

3. jsx 之外的 render：

  ```javascript
  // @returns {VNode}
  createElement(
    // {String | Object | Function}
    // 一个 HTML 标签字符串，组件选项对象，或者一个返回值类型为String/Object的函数，必要参数
    'div',
    // {Object}
    // 一个包含模板相关属性的数据对象
    // 这样，您可以在 template 中使用这些属性.可选参数.
    {
      class,
      style,
      attrs,
      props,
      domProps,
      on: {
        click
      },
      nativeOn: {
        click
      },
      directives，
      scopedSlots,
      slot,
      key,
      ref
    },
    // {String | Array}
    // 子节点(VNodes)，可以是一个字符串或者一个数组. 可选参数.
    [
      createElement('h1', 'hello world'),
      createElement(MyComponent, {
        props: {
          someProp: 'foo'
        }
      }),
      'bar'
    ]
  )
  ```

4. 自定义指令：[v-touch](https://github.com/JounQin/v-touch)

5. 混合 mixin：[v-validator](https://github.com/JounQin/v-validator)

6. 插件

7. 单文件组件：

   ```vue
   <template lang="pug">
   	.container {{ msg }}
   </template>
   <script>
     	import Child from './Child'
     
   	export default {
         data() {
           return {
             msg: 'Hello Vue SFC'
           }
         },
         components: {
           Child
         }
   	}
   </script>
   <style lang="stylus">
   	.container
     		background-color red
   </style>
   ```

8. 路由系统：[VueRouter](https://router.vuejs.org/)

9. 状态管理：[Vuex](https://vuex.vuejs.org/)

10. 服务器端渲染：[SSR](https://ssr.vuejs.org/)


## Webpack 入门

1. 核心概念：一切皆是模块，均由 `loader （加载器）` 处理
2. webpack 2 实现 Tree Shaking
3. 入口 entry
4. 输出 output
5. 代码分割 Code Splitting/Chunk
6. 环境区分：EnvironmentPlugin/DefinePlugin
7. 传统全局变量模块兼容：ProvidePlugin
8. 公共组件优化：CommonsChunkPlugin
9. 代码分块优化：LimitChunkCountPlugin
10. 其他黑魔法：开发服务器 (webpack-dev-server)、热重载 (hot-reloading)

## 项目实践

[vue-ssr](https://github.com/JounQin/vue-ssr) [DEMO](https://vue-ssr.1stg.me/)

[vue-music](https://github.com/JounQin/vue-music) [DEMO](https://vue-music.1stg.me/)

## 其他技术

1. [rollup](https://github.com/rollup/rollup)
2. [flow type](https://flowtype.org/)
3. [Service Worker](https://developer.mozilla.org/zh-CN/docs/Web/API/Service_Worker_API)
4. PWA ([Progressive Web Apps](https://developers.google.com/web/progressive-web-apps/))
5. [Jest](https://facebook.github.io/jest/)