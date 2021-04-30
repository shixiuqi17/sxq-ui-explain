<template>
  <div>
    <h2>Card 卡片</h2>
    <p class="title-text">
      将信息聚合在卡片容器中展示
    </p>
    <!-- 基础用法 -->
    <code-view
      title="基础用法"
      subtitle="包含标题，内容和操作"
      desc="Card 组件包括header和body部分，header部分需要有显式具名 slot 分发，同时也是可选的"
      height="420"
    >
      <template slot="source">
        <sxq-card>
          <div slot="header" class="clearfix">
            <span>卡片名称</span>
            <sxq-button style="float: right; ">操作按钮</sxq-button>
          </div>
          <div v-for="item in 4" :key="item" class="text item">
            {{ '列表内容 ' + item }}
          </div>
        </sxq-card>
      </template>
      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
      </template>
    </code-view>
    <!-- 简单用法 -->
    <code-view title="简单卡片" subtitle="卡片可以只有内容区域" height="225">
      <template slot="source">
        <sxq-card>
          <div v-for="item in 4" :key="item" class="text item">
            {{ '列表内容 ' + item }}
          </div>
        </sxq-card>
      </template>
      <template slot="code">
        <code class="html">{{ code.easy.html }}</code>
      </template>
    </code-view>
    <!-- 带图片 -->
    <code-view
      title="带图片"
      subtitle="可配置定义更丰富的内容展示"
      desc="配置body-style属性来自定义body部分的style"
      height="360"
    >
      <template slot="source">
        <sxq-card body-style="padding: 0px;">
          <img
            src="https://ae01.alicdn.com/kf/U69f879f84ab7495787587b8e3b74ad4an.jpg"
          />
          <div style="padding: 15px 0;">
            <span style="paddingLeft: 10px">内容区域</span>
            <sxq-button class="flr">操作按钮</sxq-button>
          </div>
        </sxq-card>
      </template>
      <template slot="code">
        <code class="html">{{ code.img.html }}</code>
      </template>
    </code-view>
    <!-- 卡片阴影 -->
    <code-view
      title="简单卡片"
      subtitle="可对阴影的显示进行配置"
      desc="通过shadow属性设置卡片阴影出现的时机：always、hover或never"
      height="242"
      class="showShadow"
    >
      <template slot="source">
        <div class="clft">
          <div class="flt">
            <sxq-card shadow="always">
              总是显示
            </sxq-card>
          </div>
          <div class="flt">
            <sxq-card shadow="hover">
              鼠标悬浮时显示
            </sxq-card>
          </div>
          <div class="flt">
            <sxq-card shadow="never">
              从不显示
            </sxq-card>
          </div>
        </div>
      </template>
      <template slot="code">
        <code class="html">{{ code.shadow.html }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'Card',
  data() {
    return {
      code: {
        main: {
          html: `
    <sxq-card>
      <div slot="header">
        <span>卡片名称</span>
        <sxq-button>操作按钮</sxq-button>
      </div>
      <div v-for="item in 4" :key="item">
        {{ '列表内容 ' + item }}
      </div>
    </sxq-card>
    `
        },
        easy: {
          html: `
    <sxq-card>
      <div v-for="item in 4" :key="item">
        {{ '列表内容 ' + item }}
      </div>
    </sxq-card>
    `
        },
        img: {
          html: `
    <sxq-card body-style="padding: 0px;">
        <img src="https://ae01.alicdn.com/kf/U69f879f84ab7495787587b8e3b74ad4an.jpg" />
        <div>
          <span>内容区域</span>
          <sxq-button>操作按钮</sxq-button>
        </div>
    </sxq-card>
    `
        },
        shadow: {
          html: `
    <sxq-card shadow="always">总是显示</sxq-card>
    <sxq-card shadow="hover">鼠标悬浮时显示</sxq-card>
    <sxq-card shadow="never">从不显示</sxq-card>
    `
        }
      },
      api: [
        {
          params: 'header',
          desc: '设置 header，也可以通过 slot#header 传入 DOM',
          types: 'string',
          value: '',
          default: ''
        },
        {
          params: 'body-style',
          desc: '设置 body 的样式',
          types: 'string',
          value: '',
          default: 'padding: 20px'
        },
        {
          params: 'shadow',
          desc: '设置阴影显示时机',
          types: 'string',
          value: 'always / hover / never',
          default: 'always'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.showShadow {
  .sxq-card {
    width: 300px;
  }
}
.clft {
  display: flex;
}
.flt {
  flex: 1;
}
.sxq-card {
  width: 500px;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
.text {
  font-size: 14px;
}
.flr {
  float: right;
  margin: -5px 0 10px;
}

.item {
  margin-bottom: 18px;
}
img {
  width: 100%;
  display: block;
}
</style>
