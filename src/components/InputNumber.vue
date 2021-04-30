<template>
  <div>
    <h2>InputNumber 计数器</h2>
    <p class="title-text">仅允许输入标准的数字值，可定义范围</p>
    <!-- 基础用法 -->
    <code-view
      title="基础用法"
      desc="要使用它，只需要在sxq-input-number元素中使用v-model绑定变量即可，变量的初始值即为默认值。"
      height="360"
    >
      <template slot="source">
        <sxq-input-number v-model="num"></sxq-input-number>
      </template>
      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
        <code class="javascript">{{ code.main.javascript }}</code>
      </template>
    </code-view>
    <!-- 禁用状态 -->
    <code-view
      title="禁用状态"
      desc="disabled属性接受一个Boolean，设置为true即可禁用整个组件"
      height="360"
    >
      <template slot="source">
        <sxq-input-number v-model="num1" disabled></sxq-input-number>
      </template>
      <template slot="code">
        <code class="html">{{ code.disabled.html }}</code>
        <code class="javascript">{{ code.disabled.javascript }}</code>
      </template>
    </code-view>
    <!-- 最大值与最小值 -->
    <code-view
      title="最大值与最小值"
      desc="如果你只需要控制数值在某一范围内，可以设置min属性和max属性，不设置min和max时，最小值为 0"
      height="360"
    >
      <template slot="source">
        <sxq-input-number v-model="num1" :max="10" :min="0"></sxq-input-number>
      </template>
      <template slot="code">
        <code class="html">{{ code.maxAndMin.html }}</code>
        <code class="javascript">{{ code.maxAndMin.javascript }}</code>
      </template>
    </code-view>
    <!-- 步数 -->
    <code-view
      title="步数"
      subtitle="允许定义递增递减的步数控制"
      desc="设置step属性可以控制步长，接受一个Number"
      height="360"
    >
      <template slot="source">
        <sxq-input-number v-model="num2" :step="2"></sxq-input-number>
      </template>
      <template slot="code">
        <code class="html">{{ code.step.html }}</code>
        <code class="javascript">{{ code.step.javascript }}</code>
      </template>
    </code-view>
    <!-- 尺寸 -->
    <code-view
      title="尺寸"
      subtitle="额外提供了 medium、small、mini 三种尺寸的数字输入框"
      height="465"
    >
      <template slot="source">
        <sxq-input-number v-model="num3"></sxq-input-number>
        <sxq-input-number v-model="num4" size="medium"></sxq-input-number>
        <sxq-input-number v-model="num5" size="small"></sxq-input-number>
        <sxq-input-number v-model="num6" size="mini"></sxq-input-number>
      </template>
      <template slot="code">
        <code class="html">{{ code.step.html }}</code>
        <code class="javascript">{{ code.step.javascript }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'InputNumber',
  data() {
    return {
      num: 0,
      num1: 0,
      num2: 0,
      num3: 0,
      num4: 0,
      num5: 0,
      num6: 0,
      code: {
        main: {
          html: '    <sxq-input-number v-model="num"></sxq-input-number>',
          javascript: `    export default {
      data () {
        return {
          num: 0
        }
      }
    } `
        },
        disabled: {
          html:
            '    <sxq-input-number v-model="num" disabled></sxq-input-number>',
          javascript: `    export default {
      data () {
        return {
          num: 0
        }
      }
    } `
        },
        maxAndMin: {
          html:
            '    <sxq-input-number v-model="num" :max="10" :min="0"></sxq-input-number>',
          javascript: `    export default {
      data () {
        return {
          num: 0
        }
      }
    } `
        },
        step: {
          html: `
    <sxq-input-number v-model="num1"></sxq-input-number>
    <sxq-input-number v-model="num2" size="medium"></sxq-input-number>
    <sxq-input-number v-model="num3" size="small"></sxq-input-number>
    <sxq-input-number v-model="num4" size="mini"></sxq-input-number>`,
          javascript: `    export default {
      data () {
        return {
          num1: 0,
          num2: 0,
          num3: 0,
          num4: 0,
        }
      }
    } `
        }
      },
      api: [
        {
          params: 'v-model',
          desc: '绑定值',
          types: 'number',
          value: '',
          default: '0'
        },
        {
          params: 'min',
          desc: '设置计数器允许的最小值',
          types: 'number',
          value: '',
          default: '0'
        },
        {
          params: 'max',
          desc: '设置计数器允许的最大值',
          types: 'number',
          value: '',
          default: 'Infinity'
        },
        {
          params: 'step',
          desc: '计数器步长',
          types: 'number',
          value: '',
          default: '1'
        },
        {
          params: 'size',
          desc: '计数器尺寸',
          types: 'string',
          value: 'medium / small / mini',
          default: ''
        },
        {
          params: 'disabled',
          desc: '是否禁用计数器',
          types: 'boolean',
          value: 'true / false',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sxq-input-number + .sxq-input-number {
  margin-left: 22px;
}
</style>
