<template>
  <div class="code-view">
    <h2>{{ title }}</h2>
    <p v-if="subtitle">{{ subtitle }}</p>
    <div class="code-body">
      <div class="code-info">
        <slot name="source"></slot>
      </div>

      <div class="meta" :style="'height:' + code_height + 'px'">
        <div v-if="desc" class="desc">{{ desc }}</div>
        <pre v-highlightjs>
          <slot name="code" />
        </pre>
      </div>
      <div class="code-control" @click="handlerShowCode">
        <i :class="['iconfont', iconClass]"></i>
        <span class="show-code-text">{{ showText }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CodeView',
  props: {
    title: String,
    subtitle: String,
    height: {
      type: String,
      default: '0'
    },
    code: String,
    desc: String
  },
  data() {
    return {
      showText: '显示代码',
      code_height: '0'
    }
  },
  methods: {
    handlerShowCode() {
      if (this.code_height === '0') {
        this.code_height = this.height
        this.showText = '隐藏代码'
      } else {
        this.code_height = '0'
        this.showText = '显示代码'
      }
    }
  },
  computed: {
    iconClass() {
      return {
        'icon-arrow-down': this.code_height === '0',
        'icon-arrow-up-bold': this.code_height !== '0'
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.code-view {
  margin-top: 50px;

  h2 {
    font-weight: 500;
  }
  p {
    font-size: 14px;
    color: #5e6d82;
    line-height: 1.5em;
  }
  .code-body {
    border: 1px solid #ebebeb;
    border-radius: 3px;
    transition: 0.3s;
    &:hover {
      box-shadow: 0 0 8px 0 rgb(232 237 250 / 60%),
        0 2px 4px 0 rgb(232 237 250 / 50%);
    }
  }
  .code-info {
    padding: 20px 0 20px 40px;
  }
  .meta {
    background-color: #fafafa;
    border-top: 1px solid #eaeefb;
    overflow: hidden;
    height: 0;
    transition: height 0.3s;
    .desc {
      padding: 20px;
      box-sizing: border-box;
      border: 1px solid #ebebeb;
      border-radius: 3px;
      font-size: 14px;
      line-height: 22px;
      color: #666;
      word-break: break-word;
      margin: 10px 10px 0 10px;
      background-color: #fff;
    }
  }
  .code-control {
    border-top: 1px solid #eaeefb;
    height: 44px;
    box-sizing: border-box;
    background-color: #fff;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    position: relative;
    &:hover i {
      color: #55c5d6;
      transform: translateX(-40px);
    }
    &:hover .show-code-text {
      color: #55c5d6;
      opacity: 1;
      transform: translateX(-30px);
    }
    i {
      display: inline-block;
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      cursor: pointer;
    }
    .show-code-text {
      position: absolute;
      transform: translateX(-10px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      opacity: 0;
      cursor: pointer;
    }
  }
}
</style>
