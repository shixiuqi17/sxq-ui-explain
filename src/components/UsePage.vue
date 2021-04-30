<template>
  <div class="usepage">
    <div class="h1">安装</div>
    <p class="h2">npm 安装</p>
    <div class="h3">
      推荐使用npm的方式安装，它能更好地和 webpack 打包工具配合使用。
    </div>
    <a href="https://www.npmjs.com/package/sxq-ui" target="_blank"
      >https://www.npmjs.com/package/sxq-ui</a
    >
    <pre v-highlightjs>
      <code class="scriptText" >{{ install }}</code>
    </pre>
    <div class="h1" style="padding-top: 30px;">快速上手</div>
    <span class="fast">你可以在 main.js 中引入整个 shn-ui。</span>
    <pre v-highlightjs>
      <code class="html" >{{ code }}</code>
    </pre>
    <span
      >以上代码便完成了 sxq-ui 的引入。需要注意的是，样式文件需要单独引入
    </span>
    <p class="h1" style="padding-top: 30px;">开始使用</p>
    <span
      >至此，一个基于 Vue 安装了 sxq-ui插件
      的开发环境已经搭建完毕。各个组件的使用方法请参阅它们各自的文档。</span
    >
  </div>
</template>
<script>
export default {
  name: 'Usepage',
  data() {
    return {
      install: `
    npm install sxq-ui
        `,
      code: `
    import sxqUi from "sxq-ui

    <!-- 引入css文件 -->
    import "sxq-ui/lib/sxq-ui.css

    <!-- 全局注册sxq-ui -->
    Vue.use(sxqUi)
      `
    }
  }
}
</script>

<style lang="scss" scoped>
.usepage {
  .h1 {
    font-size: 26px;
    font-weight: 500;
  }
  .h1 + .h1 {
    margin-top: 20px;
  }
  .h2 {
    font-size: 20px;
  }
  .h3 {
    padding-top: 10px;
  }
  .fast {
    display: block;
    padding-top: 25px;
  }
  span {
    font-size: 14px;
    font-weight: 400;
    color: #5e6d82;
  }
  a {
    display: block;
    text-decoration: none;
    cursor: pointer;
    color: #409eff;
    padding: 20px 0 5px;
  }
}
</style>
