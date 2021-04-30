<template>
  <div>
    <h2>Switch 开关</h2>
    <p class="title-text">
      表示两种相互对立的状态间的切换，多用于触发「开/关」
    </p>
    <!-- 基础用法 -->
    <code-view
      title="基础用法"
      desc="绑定v-model到一个Boolean类型的变量。可以使用active-color属性与inactive-color属性来设置开关的背景色。"
      height="370"
    >
      <template slot="source">
        <sxq-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#ff4949"
        ></sxq-switch>
      </template>
      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
        <code class="javascript">{{ code.main.javascript }}</code>
      </template>
    </code-view>
    <!-- 文字描述 -->
    <code-view
      title="文字描述"
      desc="使用active-text属性与inactive-text属性来设置开关的文字描述"
      height="410"
    >
      <template slot="source">
        <div>
          <sxq-switch
            v-model="value1"
            active-text="关闭描述"
            inactive-text="开启描述"
          ></sxq-switch>
        </div>
        <div style="marginTop:30px;">
          <sxq-switch
            v-model="value2"
            active-color="#55c5d6"
            inactive-color="#dcdfe6"
            active-text="关闭描述"
            inactive-text="开启描述"
          ></sxq-switch>
        </div>
      </template>
      <template slot="code">
        <code class="html">{{ code.text.html }}</code>
        <code class="javascript">{{ code.text.javascript }}</code>
      </template>
    </code-view>
    <!-- 禁用状态 -->
    <code-view
      title="禁用状态"
      desc="设置disabled属性，接受一个Boolean，设置true即可禁用"
      height="410"
    >
      <template slot="source">
        <sxq-switch v-model="value3" disabled></sxq-switch>
        <sxq-switch v-model="value4" disabled></sxq-switch>
      </template>
      <template slot="code">
        <code class="html">{{ code.disabled.html }}</code>
        <code class="javascript">{{ code.disabled.javascript }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'Switch1',
  data() {
    return {
      value: true,
      value1: true,
      value2: true,
      value3: true,
      value4: false,
      code: {
        main: {
          html:
            '    <sxq-switch v-model="value" active-color="#13ce66" inactive-color="#ff4949"></sxq-switch>',
          javascript: `    export default {
      data () {
        return {
          value: true
        }
      }
    } `
        },
        text: {
          html: `    <sxq-switch v-model="value1" active-text="关闭描述" inactive-text="开启描述"></sxq-switch>
    <sxq-switch v-model="value2" active-color="#55c5d6" inactive-color="#dcdfe6" active-text="关闭描述" inactive-text="开启描述" ></sxq-switch>`,
          javascript: `    export default {
      data () {
        return {
          value1: true
          value2: true
        }
      }
    } `
        },
        disabled: {
          html: `    <sxq-switch v-model="value3" disabled></sxq-switch>
    <sxq-switch v-model="value4" disabled></sxq-switch>`,
          javascript: `    export default {
      data () {
        return {
          value3: true
          value4: false
        }
      }
    } `
        }
      },
      api: [
        {
          params: 'v-model',
          desc: '绑定值',
          types: 'boolean',
          value: '',
          default: ''
        },
        {
          params: 'disabled',
          desc: '是否禁用',
          types: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'active-text',
          desc: 'switch 打开时的文字描述',
          types: 'string',
          value: '',
          default: ''
        },
        {
          params: 'inactive-text',
          desc: 'switch 关闭时的文字描述',
          types: 'string',
          value: '',
          default: ''
        },
        {
          params: 'active-color',
          desc: 'switch 打开时的背景色',
          types: 'string',
          value: '',
          default: '#13ce66'
        },
        {
          params: 'inactive-color',
          desc: 'switch 关闭时的背景色',
          types: 'string',
          value: '',
          default: '#ff4949'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.sxq-switch + .sxq-switch {
  margin-left: 40px;
}
</style>
