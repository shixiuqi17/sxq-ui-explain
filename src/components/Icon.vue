<template>
  <div>
    <h2>Icon 图标</h2>
    <p class="title-text">提供了一套常用的图标集合</p>
    <code-view
      title="使用方法"
      subtitle="直接通过设置类名为 iconfont icon-Name 来使用"
      height="170"
    >
      <template slot="source">
        <i class="main-icon iconfont icon-good"></i>
        <i class="main-icon iconfont icon-comment"></i>
        <i class="main-icon iconfont icon-complete"></i>
      </template>
      <template slot="code">
        <code class="html">{{ code.main }}</code>
      </template>
    </code-view>
    <h2 class="iconh2">图标集合</h2>
    <ul class="iconlist">
      <li v-for="(item, index) in icon" :key="index">
        <div>
          <i :class="['iconfont', item]"></i>
          <p>{{ item }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Icon',
  data() {
    return {
      code: {
        main: `
      <i class="iconfont icon-good"></i>
      <i class="iconfont icon-comment"></i>
      <i class="iconfont icon-complete"></i>
        `
      },
      icon: [
        'icon-arrow-up-bold',
        'icon-arrow-down',
        'icon-arrow-left-bold',
        'icon-arrow-right',
        'icon-add',
        'icon-add-circle',
        'icon-browse',
        'icon-bad',
        'icon-good',
        'icon-close',
        'icon-comment',
        'icon-complete',
        'icon-delete',
        'icon-copy',
        'icon-download',
        'icon-elipsis',
        'icon-edit',
        'icon-eye-close',
        'icon-error',
        'icon-file',
        'icon-folder-close',
        'icon-file',
        'icon-folder-close',
        'icon-home',
        'icon-file-open',
        'icon-link',
        'icon-map',
        'icon-loading',
        'icon-modular',
        'icon-minus',
        'icon-more',
        'icon-minus',
        'icon-navigation',
        'icon-move',
        'icon-refresh',
        'icon-search',
        'icon-select',
        'icon-stop',
        'icon-success',
        'icon-setting',
        'icon-upload',
        'icon-warning',
        'icon-zoom-in',
        'icon-zoom-out',
        'icon-error1',
        'icon-success1',
        'icon-warning1',
        'icon-info'
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.main-icon {
  font-size: 24px;
  & + * {
    margin-left: 20px;
  }
}
.iconh2 {
  margin-top: 60px;
}
.iconlist {
  overflow: hidden;
  list-style: none;
  padding: 0 !important;
  border: 1px solid #eaeefb;
  border-radius: 4px;
  li {
    float: left;
    width: 10%;
    text-align: center;
    height: 166px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.3s;
    &:hover {
      div,
      i {
        color: #55c5d6;
        transform: scale(1.1);
      }
    }
    div {
      color: #99a9bf;
    }
    i {
      font-size: 32px;
      color: #606266;
      transition: color 0.3s linear;
    }
    p {
      transition: color 0.3s linear;
    }
  }
}
</style>
