<template>
  <div class="button">
    <h2>Button 按钮</h2>
    <p class="title-text">常用的操作按钮</p>
    <code-view
      title="基础用法"
      subtitle="基础的按钮用。"
      desc="使用type属性来定义 Button 的样式"
      height="310"
    >
      <template slot="source">
        <sxq-button>默认按钮</sxq-button>
        <sxq-button type="primary">主要按钮</sxq-button>
        <sxq-button type="success">成功按钮</sxq-button>
        <sxq-button type="warning">警告按钮</sxq-button>
        <sxq-button type="danger">危险按钮</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.main }}</code>
      </template>
    </code-view>
    <code-view
      title="按钮圆角"
      subtitle="为按钮设置圆角"
      desc="使用round属性来定义按钮圆角样式，它接受一个Boolean值，默认值为false"
      height="310"
    >
      <template slot="source">
        <sxq-button round>默认按钮</sxq-button>
        <sxq-button type="primary" round>主要按钮</sxq-button>
        <sxq-button type="success" round>成功按钮</sxq-button>
        <sxq-button type="warning" round>警告按钮</sxq-button>
        <sxq-button type="danger" round>危险按钮</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.round }}</code>
      </template>
    </code-view>
    <code-view
      title="禁用状态"
      subtitle="按钮不可用状态"
      desc="使用disabled属性来定义按钮是否可用，它接受一个Boolean值，默认值为false"
      height="310"
    >
      <template slot="source">
        <sxq-button disabled>默认按钮</sxq-button>
        <sxq-button type="primary" disabled>主要按钮</sxq-button>
        <sxq-button type="success" disabled>成功按钮</sxq-button>
        <sxq-button type="warning" disabled>警告按钮</sxq-button>
        <sxq-button type="danger" disabled>危险按钮</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.disabled }}</code>
      </template>
    </code-view>
    <code-view
      title="图标按钮"
      subtitle="带图标的按钮可增强辨识度或节省空间"
      desc="设置icon属性，icon 的列表可以参考 icon 组件，也可以使用i标签，即可使用自定义图标。"
      height="310"
    >
      <template slot="source">
        <sxq-button type="primary" icon="icon-good"></sxq-button>
        <sxq-button type="primary" icon="icon-edit"></sxq-button>
        <sxq-button type="primary" icon="icon-bin"></sxq-button>
        <sxq-button type="primary" icon="icon-search">搜索</sxq-button>
        <sxq-button type="primary"
          >上传<i class="iconfont icon-upload"></i
        ></sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.icon }}</code>
      </template>
    </code-view>
    <code-view
      title="加载中"
      subtitle="点击按钮后进行数据加载操作，在按钮上显示加载状态。"
      desc="要设置为 loading 状态，只要设置loading属性为true即可。"
      height="190"
    >
      <template slot="source">
        <sxq-button type="primary" loading>加载中</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.loading }}</code>
      </template>
    </code-view>
    <code-view
      title="不同尺寸"
      subtitle="Button 组件提供除了默认值以外的三种尺寸，可以在不同场景下选择合适的按钮尺寸。"
      desc="额外的尺寸：medium、small、mini，通过设置size属性来配置它们。"
      height="310"
    >
      <template slot="source">
        <sxq-button>默认按钮</sxq-button>
        <sxq-button size="medium">中等按钮</sxq-button>
        <sxq-button size="small">小型按钮</sxq-button>
        <sxq-button size="mini">超小按钮</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.size }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'Button',
  data() {
    return {
      code: {
        main: `
    <sxq-button>默认按钮</sxq-button>
    <sxq-button type="primary">主要按钮</sxq-button>
    <sxq-button type="success">成功按钮</sxq-button>
    <sxq-button type="warning">警告按钮</sxq-button>
    <sxq-button type="danger">危险按钮</sxq-button>
          `,
        round: `
    <sxq-button round>默认按钮</sxq-button>
    <sxq-button type="primary" round>主要按钮</sxq-button>
    <sxq-button type="success" round>成功按钮</sxq-button>
    <sxq-button type="warning" round>警告按钮</sxq-button>
    <sxq-button type="danger" round>危险按钮</sxq-button>
          `,
        disabled: `
    <sxq-button disabled>默认按钮</sxq-button>
    <sxq-button type="primary" disabled>主要按钮</sxq-button>
    <sxq-button type="success" disabled>成功按钮</sxq-button>
    <sxq-button type="warning" disabled>警告按钮</sxq-button>
    <sxq-button type="danger" disabled>危险按钮</sxq-button>
          `,
        icon: `
    <sxq-button type="primary" icon="icon-good"></sxq-button>
    <sxq-button type="primary" icon="icon-edit"></sxq-button>
    <sxq-button type="primary" icon="icon-bin"></sxq-button>
    <sxq-button type="primary" icon="icon-search">搜索</sxq-button>
    <sxq-button type="primary">上传<i class="iconfont icon-upload"></i></sxq-button>
          `,
        loading: `
    <sxq-button type="primary" loading>加载中</sxq-button>
    `,
        size: `
    <sxq-button>默认按钮</sxq-button>
    <sxq-button size="medium">中等按钮</sxq-button>
    <sxq-button size="small">小型按钮</sxq-button>
    <sxq-button size="mini">超小按钮</sxq-button>
    `
      },
      api: [
        {
          params: 'type',
          desc: '类型',
          types: 'string',
          value: 'primary / success / warning / danger ',
          default: ''
        },
        {
          params: 'size',
          desc: '尺寸',
          types: 'string',
          value: 'medium / small / mini',
          default: ''
        },
        {
          params: 'round',
          desc: '是否圆角按钮',
          types: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'loading',
          desc: '是否加载中状态',
          types: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'disabled',
          desc: '是否禁用状态',
          types: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'icon',
          desc: '图标类名',
          types: 'string',
          value: '',
          default: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
