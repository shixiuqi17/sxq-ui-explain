<template>
  <div>
    <h2>Checkbox 多选框</h2>
    <p class="title-text">一组备选项中进行多选</p>
    <!-- 基础用法 -->
    <code-view
      title="基础用法"
      subtitle="单独使用可以表示两种状态之间的切换，label属性设置内容介绍"
      desc="在sxq-checkbox元素中定义v-model绑定变量，单一的checkbox中，默认绑定变量的值会是Boolean，选中为true"
      height="360"
    >
      <template slot="source">
        <sxq-checkbox v-model="checked" label="备选项"></sxq-checkbox>
      </template>
      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
        <code class="javascript">{{ code.main.javascript }}</code>
      </template>
    </code-view>
    <!-- 禁用状态 -->
    <code-view
      title="禁用状态"
      subtitle="多选框不可用状态"
      desc="设置disabled属性即可"
      height="405"
    >
      <template slot="source">
        <sxq-checkbox
          v-model="checked1"
          label="备选项1"
          disabled
        ></sxq-checkbox>
        <sxq-checkbox
          v-model="checked2"
          label="备选项1"
          disabled
        ></sxq-checkbox>
      </template>
      <template slot="code">
        <code class="html">{{ code.disabled.html }}</code>
        <code class="javascript">{{ code.disabled.javascript }}</code>
      </template>
    </code-view>
    <!-- 多选框组 -->
    <code-view
      title="多选框组"
      subtitle="适用于多个勾选框绑定到同一个数组的情景，通过是否勾选来表示这一组选项中选中的项"
      desc="checkbox-group元素能把多个 checkbox 管理为一组，只需要在 Group 中使用v-model绑定Array类型的变量即可。 el-checkbox 的 label属性是该 checkbox 对应的值，label与数组中的元素值相对应，如果存在指定的值则为选中状态，否则为不选中"
      height="580"
    >
      <template slot="source">
        <sxq-checkbox-group v-model="checkList">
          <sxq-checkbox label="复选框 A"></sxq-checkbox>
          <sxq-checkbox label="复选框 B"></sxq-checkbox>
          <sxq-checkbox label="复选框 C"></sxq-checkbox>
          <sxq-checkbox label="禁用" disabled></sxq-checkbox>
          <sxq-checkbox label="选中且禁用" disabled></sxq-checkbox>
        </sxq-checkbox-group>
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
  name: 'Checkbox',
  data() {
    return {
      checked: true,
      checked1: true,
      checked2: false,
      checkList: ['选中且禁用', '复选框 A'],
      code: {
        main: {
          html:
            '    <sxq-checkbox v-model="checked"  label="备选项"></sxq-checkbox>',
          javascript: `    export default {
      data () {
        return {
          checked: true
        }
      }
    } `
        },
        disabled: {
          html: `    <sxq-checkbox v-model="checked1"  label="备选项1" disabled></sxq-checkbox>
    <sxq-checkbox v-model="checked2"  label="备选项2" disabled></sxq-checkbox>`,
          javascript: `    export default {
      data () {
        return {
          checked1: true
          checked2: false
        }
      }
    } `
        },
        list: {
          html: `
    <sxq-checkbox-group v-model="checkList">
      <sxq-checkbox label="复选框 A"></sxq-checkbox>
      <sxq-checkbox label="复选框 B"></sxq-checkbox>
      <sxq-checkbox label="复选框 C"></sxq-checkbox>
      <sxq-checkbox label="禁用" disabled></sxq-checkbox>
      <sxq-checkbox label="选中且禁用" disabled></sxq-checkbox>
    </sxq-checkbox-group>`,
          javascript: `    export default {
      data () {
        return {
          checkList: ['选中且禁用', '复选框 A']
        }
      }
    } `
        }
      },
      api: [
        {
          params: 'v-model',
          desc: '绑定值',
          types: 'array / boolean',
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

<style lang="scss" scoped>
.sxq-checkbox + .sxq-checkbox {
  margin-left: 20px;
}
</style>
