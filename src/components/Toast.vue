<template>
  <div>
    <h2>Toast 提示</h2>
    <code-view
      title="基础用法"
      desc="调用$toast方法即可打开消息提示"
      height="450"
    >
      <template slot="source">
        <sxq-button @click="open">点击出现</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
        <code class="javascript">{{ code.main.javascript }}</code>
      </template>
    </code-view>
    <code-view
      title="关闭后回调函数"
      desc="通过onClose属性调用关闭后的回调函数"
      height="490"
    >
      <template slot="source">
        <sxq-button @click="open1">点击出现</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.cb.html }}</code>
        <code class="javascript">{{ code.cb.javascript }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'Toast',
  data() {
    return {
      code: {
        main: {
          html: '    <sxq-button @click="open">点击出现</sxq-button>',
          javascript: `    export default {
      methods: {
        open() {
          this.$toast({
            message: '我是内容',
            duration: 2000
          })
        }
      }
    } `
        },
        cb: {
          html: '    <sxq-button @click="open">点击出现</sxq-button>',
          javascript: `    export default {
      methods: {
        open() {
          this.$toast({
            message: '我是内容',
            onClose: () => {
              this.$message()
            }
          })
        }
      }
    } `
        }
      },
      api: [
        {
          params: 'message',
          desc: 'Toast内容文字',
          types: 'string',
          value: '',
          default: '我是toast内容'
        },
        {
          params: 'duration',
          desc: '显示时间, 毫秒',
          types: 'number',
          value: '',
          default: '1500'
        },
        {
          params: 'onClose',
          desc: 'Toast关闭后的回调函数',
          types: 'function',
          value: '',
          default: ''
        }
      ]
    }
  },
  methods: {
    open() {
      this.$toast({
        message: '我是内容',
        duration: 2000
      })
    },
    open1() {
      this.$toast({
        message: '我是内容',
        onClose: () => {
          this.$message()
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
