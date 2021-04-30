<template>
  <div>
    <h2>MessageBox 弹框</h2>
    <p class="title-text">
      模拟系统的消息提示框而实现的一套模态对话框组件，用于消息提示、确认消息和提交内容
    </p>
    <!-- 消息提示 -->
    <code-view
      title="消息提示"
      subtitle="当进行操作时会被触发，该对话框中断操作，直到确认后才可关闭"
      desc="调用$alert方法即可打开消息提示，它模拟了系统的 alert，无法通过按下 ESC 或点击框外关闭。此例中接收了两个参数，message和title"
      height="520"
    >
      <template slot="source">
        <sxq-button @click="open">点击打开 MessageBox</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
        <code class="javascript">{{ code.main.javascript }}</code>
      </template>
    </code-view>
    <!-- 确认消息 -->
    <code-view
      title="确认消息"
      subtitle="提示用户确认其已经触发的动作，并询问是否进行此操作时会用到此对话框"
      desc="调用$confirm方法即可打开消息提示"
      height="735"
    >
      <template slot="source">
        <sxq-button @click="open1">点击打开 MessageBox</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.confirm.html }}</code>
        <code class="javascript">{{ code.confirm.javascript }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'MessageBox',
  data() {
    return {
      code: {
        main: {
          html:
            '    <sxq-button @click="open">点击打开 MessageBox</sxq-button>',
          javascript: `    export default {
      methods: {
        open() {
          this.$alert({
            title: '标题名称',
            content: '这是一段内容',
            onOk: () => {
              this.$message()
            }
          })
        }
      }
    } `
        },
        confirm: {
          html:
            '    <sxq-button @click="open">点击打开 MessageBox</sxq-button>',
          javascript: `    export default {
      methods: {
        open() {
          this.$confirm({
            title: '提示',
            content: '此操作将永久删除该文件, 是否继续?',
            onOk: () => {
              this.$message({
                message: '删除成功！',
                type: 'success'
              })
            },
            onCancel: () => {
              this.$message({
                message: '已取消删除'
              })
            }
          })
        }
      }
    } `
        }
      },
      api: [
        {
          params: 'title',
          desc: 'MessageBox 标题',
          types: 'string',
          value: '',
          default: '标题名称'
        },
        {
          params: 'content',
          desc: 'MessageBox 消息正文内容',
          types: 'string',
          value: '',
          default: '这是一段内容'
        },
        {
          params: 'onOk',
          desc: 'MessageBox点击确定的回调',
          types: 'function',
          value: '',
          default: ''
        },
        {
          params: 'onCancel',
          desc: 'MessageBox点击取消的回调',
          types: 'function',
          value: '',
          default: ''
        },
        {
          params: 'type',
          desc: 'MessageBox的方式',
          types: 'string',
          value: 'confirm / alert',
          default: 'confirm'
        }
      ]
    }
  },
  methods: {
    open() {
      this.$alert({
        title: '标题名称',
        content: '这是一段内容',
        onOk: () => {
          this.$message()
        }
      })
    },
    open1() {
      this.$confirm({
        title: '提示',
        content: '此操作将永久删除该文件, 是否继续?',
        onOk: () => {
          this.$message({
            message: '删除成功！',
            type: 'success'
          })
        },
        onCancel: () => {
          this.$message({
            message: '已取消删除'
          })
        }
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
