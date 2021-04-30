<template>
  <div>
    <h2>Message 消息提示</h2>
    <p class="title-text">
      常用于主动操作后的反馈提示
    </p>
    <!-- 基础用法 -->
    <code-view
      title="基础用法"
      desc="sxq-ui注册了一个$message方法用于调用，Message可以接收字符串作为参数，它会被显示为正文内容，duration设置关闭时间"
      height="435"
    >
      <template slot="source">
        <sxq-button @click="showMessage">打开消息提示</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
        <code class="javascript">{{ code.main.javascript }}</code>
      </template>
    </code-view>
    <!-- 不同状态 -->
    <code-view
      title="不同状态"
      subtitle="用来显示「成功、警告、消息、错误」类的操作反馈。"
      desc="当需要自定义更多属性时，设置type字段可以定义不同的状态，此时正文内容以message的值传入"
      height="1040"
    >
      <template slot="source">
        <sxq-button @click="open1">成功</sxq-button>
        <sxq-button @click="open2">警告</sxq-button>
        <sxq-button @click="open3">消息</sxq-button>
        <sxq-button @click="open4">错误</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.different.html }}</code>
        <code class="javascript">{{ code.different.javascript }}</code>
      </template>
    </code-view>
    <!-- 取消自动关闭 -->
    <code-view
      title="取消自动关闭"
      subtitle="取消自动关闭后，只可手动关闭"
      desc="设置autoClose属性，接受一个Boolean，设置false即可取消自动关闭"
      height="1150"
    >
      <template slot="source">
        <sxq-button @click="open5">成功</sxq-button>
        <sxq-button @click="open6">警告</sxq-button>
        <sxq-button @click="open7">消息</sxq-button>
        <sxq-button @click="open8">错误</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.close.html }}</code>
        <code class="javascript">{{ code.close.javascript }}</code>
      </template>
    </code-view>
    <!-- 不同位置 -->
    <code-view
      title="不同位置"
      desc="可通过position属性来操作消息提醒的位置"
      height="926"
    >
      <template slot="source">
        <sxq-button @click="open9">左侧</sxq-button>
        <sxq-button @click="open10">中间</sxq-button>
        <sxq-button @click="open11">右侧</sxq-button>
      </template>
      <template slot="code">
        <code class="html">{{ code.position.html }}</code>
        <code class="javascript">{{ code.position.javascript }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'Message',
  data() {
    return {
      code: {
        main: {
          html:
            '    <sxq-button @click="showMessage">打开消息提示</sxq-button>',
          javascript: `    export default {
      methods: {
        showMessage() {
          this.$message({
            message: '这是一条一秒后关闭消息提示',
            duration: 1000
          })
        }
      }
    } `
        },
        different: {
          html: `
    <sxq-button @click="open1">成功</sxq-button>
    <sxq-button @click="open2">警告</sxq-button>
    <sxq-button @click="open3">消息</sxq-button>
    <sxq-button @click="open4">错误</sxq-button>`,
          javascript: `    export default {
      methods: {
        open1() {
          this.$message({
            type: 'success',
            message: '成功，这是一条成功的消息提醒'
          })
        },
        open2() {
          this.$message({
            type: 'warning',
            message: '警告，这是一条警告的消息提醒'
          })
        },
        open3() {
          this.$message({
            type: 'info',
            message: '这是一条的消息提醒'
          })
        },
        open4() {
          this.$message({
            type: 'error',
            message: '错误，这是一条错误的消息提醒'
          })
        }
      }
    } `
        },
        close: {
          html: `
    <sxq-button @click="open1">成功</sxq-button>
    <sxq-button @click="open2">警告</sxq-button>
    <sxq-button @click="open3">消息</sxq-button>
    <sxq-button @click="open4">错误</sxq-button>`,
          javascript: `    export default {
      methods: {
        open1() {
          this.$message({
            type: 'success',
            message: '成功，这是一条成功的消息提醒',
            autoClose: false
          })
        },
        open2() {
          this.$message({
            type: 'warning',
            message: '警告，这是一条警告的消息提醒',
            autoClose: false
          })
        },
        open3() {
          this.$message({
            type: 'info',
            message: '这是一条的消息提醒',
            autoClose: false
          })
        },
        open4() {
          this.$message({
            type: 'error',
            message: '错误，这是一条错误的消息提醒',
            autoClose: false
          })
        }
      }
    } `
        },
        position: {
          html: `
    <sxq-button @click="open1">左侧</sxq-button>
    <sxq-button @click="open2">中间</sxq-button>
    <sxq-button @click="open3">右侧</sxq-button>`,
          javascript: `    export default {
      methods: {
        open1() {
          this.$message({
            type: 'success',
            message: '将消息提醒放在了左侧',
            position: 'left'
          })
        },
        open2() {
          this.$message({
            type: 'warning',
            message: '将消息提醒放在了中间',
            position: 'center'
          })
        },
        open3() {
          this.$message({
            type: 'info',
            message: '将消息提醒放在了右侧',
            position: 'right'
          })
        }
      }
    } `
        }
      },
      api: [
        {
          params: 'message',
          desc: '消息文字',
          types: 'string',
          value: '',
          default: '这是一条消息提示'
        },
        {
          params: 'type',
          desc: '主题',
          types: 'string',
          value: 'success / warning / info / error',
          default: 'info'
        },
        {
          params: 'duration',
          desc: '显示时间, 毫秒',
          types: 'number',
          value: '',
          default: '3000'
        },
        {
          params: 'autoClose',
          desc: '自动关闭',
          types: 'boolean',
          value: 'true / false',
          default: 'true'
        },
        {
          params: 'position',
          desc: '消息提醒的位置',
          types: 'string',
          value: 'left / center / right',
          default: 'center'
        }
      ]
    }
  },
  methods: {
    showMessage() {
      this.$message({
        message: '这是一条一秒后关闭消息提示',
        duration: 1000
      })
    },
    open1() {
      this.$message({
        type: 'success',
        message: '成功，这是一条成功的消息提醒'
      })
    },
    open2() {
      this.$message({
        type: 'warning',
        message: '警告，这是一条警告的消息提醒'
      })
    },
    open3() {
      this.$message({
        type: 'info',
        message: '这是一条的消息提醒'
      })
    },
    open4() {
      this.$message({
        type: 'error',
        message: '错误，这是一条错误的消息提醒'
      })
    },
    open5() {
      this.$message({
        type: 'success',
        message: '成功，这是一条成功的消息提醒',
        autoClose: false
      })
    },
    open6() {
      this.$message({
        type: 'warning',
        message: '警告，这是一条警告的消息提醒',
        autoClose: false
      })
    },
    open7() {
      this.$message({
        type: 'info',
        message: '这是一条的消息提醒',
        autoClose: false
      })
    },
    open8() {
      this.$message({
        type: 'error',
        message: '错误，这是一条错误的消息提醒',
        autoClose: false
      })
    },
    open9() {
      this.$message({
        type: 'success',
        message: '将消息提醒放在了左侧',
        position: 'left'
      })
    },
    open10() {
      this.$message({
        type: 'info',
        message: '将消息提醒放在了中间',
        position: 'center'
      })
    },
    open11() {
      this.$message({
        type: 'warning',
        message: '将消息提醒放在了右侧',
        position: 'right'
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
