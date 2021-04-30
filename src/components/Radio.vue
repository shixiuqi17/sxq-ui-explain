<template>
  <div>
    <h2>Radio 单选框</h2>
    <p class="title-text">在一组备选项中进行单选</p>
    <!-- 基础用法 -->
    <code-view
      title="基础用法"
      subtitle="由于选项默认可见，不宜过多"
      desc="要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值"
      height="385"
    >
      <template slot="source">
        <sxq-radio v-model="radio" label="备选项1"></sxq-radio>
        <sxq-radio v-model="radio" label="备选项2"></sxq-radio>
      </template>
      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
        <code class="javascript">{{ code.main.javascript }}</code>
      </template>
    </code-view>
    <!-- 禁用状态 -->
    <code-view
      title="禁用状态"
      subtitle="单选框不可用的状态"
      desc="只要在sxq-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用"
      height="385"
    >
      <template slot="source">
        <sxq-radio v-model="radio1" label="禁用" disabled></sxq-radio>
        <sxq-radio v-model="radio1" label="选中且禁用" disabled></sxq-radio>
      </template>
      <template slot="code">
        <code class="html">{{ code.disabled.html }}</code>
        <code class="javascript">{{ code.disabled.javascript }}</code>
      </template>
    </code-view>
    <!-- 单选框组 -->
    <code-view
      title="单选框组"
      subtitle="适用于在多个互斥的选项中选择的场景"
      desc="结合sxq-radio-group元素和子元素sxq-radio可以实现单选组，在sxq-radio-group中绑定v-model，在sxq-radio中设置好label即可"
      height="460"
    >
      <template slot="source">
        <sxq-radio-group v-model="radio2">
          <sxq-radio label="备选项1"></sxq-radio>
          <sxq-radio label="备选项2"></sxq-radio>
          <sxq-radio label="备选项3"></sxq-radio>
        </sxq-radio-group>
      </template>
      <template slot="code">
        <code class="html">{{ code.list.html }}</code>
        <code class="javascript">{{ code.list.javascript }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'Radio',
  data() {
    return {
      radio: '备选项1',
      radio1: '选中且禁用',
      radio2: '备选项1',
      code: {
        main: {
          html: `    <sxq-radio v-model="radio" label="备选项1"></sxq-radio>
    <sxq-radio v-model="radio" label="备选项2"></sxq-radio>`,
          javascript: `    export default {
      data () {
        return {
          radio: '备选项1'
        }
      }
    } `
        },
        disabled: {
          html: `    <sxq-radio v-model="radio" label="禁用" disabled></sxq-radio>
    <sxq-radio v-model="radio" label="选中且禁用" disabled></sxq-radio>`,
          javascript: `    export default {
      data () {
        return {
          radio: '选中且禁用'
        }
      }
    } `
        },
        list: {
          html: `    <sxq-radio-group v-model="radio">
      <sxq-radio label="备选项1"></sxq-radio>
      <sxq-radio label="备选项2"></sxq-radio>
      <sxq-radio label="备选项3"></sxq-radio>
    </sxq-radio-group>`,
          javascript: `    export default {
      data () {
        return {
          radio: '备选项1'
        }
      }
    } `
        }
      },
      api: [
        {
          params: 'v-model',
          desc: '绑定值',
          types: 'string / number',
          value: '',
          default: ''
        },
        {
          params: 'label',
          desc: '选中状态的值',
          types: 'string',
          value: '',
          default: ''
        },
        {
          params: 'disabled',
          desc: '是否禁用',
          types: 'boolean',
          value: 'true / false',
          default: 'false'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped></style>
