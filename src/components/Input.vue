<template>
  <div class="show-input">
    <h2>Input 输入框</h2>
    <p class="title-text">通过鼠标或键盘输入字符</p>
    <!-- 基础用法 -->
    <code-view
      title="基础用法"
      desc="通过v-model绑定input框输入值"
      height="360"
    >
      <template slot="source">
        <sxq-input
          type="text"
          v-model="inputVal"
          placeholder="请输入内容"
          width="180"
        />
      </template>
      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
        <code class="javascript">{{ code.main.javascript }}</code>
      </template>
    </code-view>
    <!-- 禁用状态 -->
    <code-view
      title="禁用状态"
      desc="通过 disabled 属性指定是否禁用 input 组件"
      height="360"
    >
      <template slot="source">
        <sxq-input
          type="text"
          v-model="disabledVal"
          placeholder="请输入内容"
          disabled
          width="180"
        />
      </template>
      <template slot="code">
        <code class="html">{{ code.disabled.html }}</code>
        <code class="javascript">{{ code.disabled.javascript }}</code>
      </template>
    </code-view>
    <!-- 可清空 -->
    <code-view
      title="可清空"
      desc="使用clearable属性即可得到一个可清空的输入框"
      height="360"
    >
      <template slot="source">
        <sxq-input
          type="text"
          v-model="clearableVal"
          placeholder="请输入内容"
          clearable
          width="180"
        />
      </template>
      <template slot="code">
        <code class="html">{{ code.clearable.html }}</code>
        <code class="javascript">{{ code.clearable.javascript }}</code>
      </template>
    </code-view>
    <!-- 带 icon 的输入框 -->
    <code-view
      title="带 icon 的输入框"
      subtitle="带有图标标记输入类型"
      desc="可以通过 prefix-icon 和 suffix-icon 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。"
      height="450"
    >
      <template slot="source">
        <sxq-input
          type="text"
          v-model="prefixVal"
          prefix-icon="icon-search"
          placeholder="icon在前面"
          width="180"
        />
        <sxq-input
          type="text"
          v-model="suffixVal"
          suffix-icon="icon-file"
          placeholder="icon在后面"
          style="marginTop:20px;"
          width="180"
        />
      </template>
      <template slot="code">
        <code class="html">{{ code.icon.html }}</code>
        <code class="javascript">{{ code.icon.javascript }}</code>
      </template>
    </code-view>
    <!-- 文本域 -->
    <code-view
      title="文本域"
      subtitle="用于输入多行文本信息，通过将 type 属性的值指定为 textarea。"
      height="290"
    >
      <template slot="source">
        <sxq-input
          type="textarea"
          v-model="textareaVal"
          placeholder="请输入内容"
        />
      </template>
      <template slot="code">
        <code class="html">{{ code.textarea.html }}</code>
        <code class="javascript">{{ code.textarea.javascript }}</code>
      </template>
    </code-view>
    <!-- 复合型输入框 -->
    <code-view
      title="复合型输入框"
      subtitle="可前置或后置元素，一般为标签或按钮"
      desc="可通过 slot 来指定在 input 中前置或者后置内容。"
      height="705"
    >
      <template slot="source">
        <sxq-input placeholder="请输入内容" v-model="prependVal">
          <template slot="prepend">Http://</template>
        </sxq-input>
        <div style="margin-top: 15px;">
          <sxq-input placeholder="请输入内容" v-model="appendVal">
            <template slot="append">.com</template>
          </sxq-input>
        </div>
        <div style="margin-top: 15px;">
          <sxq-input placeholder="请输入内容" v-model="allVal">
            <template slot="prepend">Http://</template>
            <template slot="append">.com</template>
          </sxq-input>
        </div>
      </template>
      <template slot="code">
        <code class="html">{{ code.all.html }}</code>
        <code class="javascript">{{ code.all.javascript }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'Input',
  data() {
    return {
      inputVal: '',
      disabledVal: '',
      clearableVal: '',
      prefixVal: '',
      suffixVal: '',
      textareaVal: '',
      prependVal: '',
      appendVal: '',
      allVal: '',
      code: {
        main: {
          html:
            '   <sxq-input type="text" v-model="inputVal" placeholder="请输入内容" /> ',
          javascript: `    export default {
      data () {
        return {
          inputVal:''
        }
      }
    } `
        },
        disabled: {
          html:
            '   <sxq-input type="text" v-model="inputVal" placeholder="请输入内容" disabled /> ',
          javascript: `    export default {
      data () {
        return {
          inputVal:''
        }
      }
    } `
        },
        clearable: {
          html:
            '   <sxq-input type="text" v-model="inputVal" placeholder="请输入内容" clearable /> ',
          javascript: `    export default {
      data () {
        return {
          inputVal:''
        }
      }
    } `
        },
        icon: {
          html: `
    <sxq-input type="text" v-model="prefixVal" prefix-icon="icon-search" placeholder="icon在前面" />
    <sxq-input type="text" v-model="suffixVal" suffix-icon="icon-file" placeholder="icon在后面" />`,
          javascript: `    export default {
      data () {
        return {
          prefixVal:'',
          suffixVal:''
        }
      }
    } `
        },
        textarea: {
          html:
            '   <sxq-input type="textarea" v-model="textareaVal" placeholder="请输入内容" />',
          javascript: `    export default {
      data () {
        return {
          textareaVal:''
        }
      }
    } `
        },
        all: {
          html: `
    <sxq-input placeholder="请输入内容" v-model="inputVal1">
        <template slot="prepend">Http://</template>
    </sxq-input>
    <sxq-input placeholder="请输入内容" v-model="inputVal2">
        <template slot="append">.com</template>
    </sxq-input>
    <sxq-input placeholder="请输入内容" v-model="inputVal3">
        <template slot="prepend">Http://</template>
        <template slot="append">.com</template>
    </sxq-input>
        `,
          javascript: `    export default {
      data () {
        return {
          inputVal1:'',
          inputVal2:'',
          inputVal3:''
        }
      }
    } `
        }
      },
      api: [
        {
          params: 'type',
          desc: '类型',
          types: 'string',
          value: 'text / textarea',
          default: 'text'
        },
        {
          params: 'v-model',
          desc: '绑定值',
          types: 'string / number',
          value: '',
          default: ''
        },
        {
          params: 'width',
          desc: '输入框长度',
          types: 'string',
          value: '',
          default: ''
        },
        {
          params: 'center',
          desc: '输入框文本居中',
          types: 'boolean',
          value: 'true / false ',
          default: 'false'
        },
        {
          params: 'placeholder',
          desc: '输入框占位文本',
          types: 'string',
          value: '',
          default: ''
        },
        {
          params: 'clearable',
          desc: '是否可清空',
          types: 'boolean',
          value: 'true / false ',
          default: 'false'
        },
        {
          params: 'disabled',
          desc: '输入框禁用',
          types: 'boolean',
          value: 'true / false ',
          default: 'false'
        },
        {
          params: 'prefix-icon',
          desc: '输入框头部图标',
          types: 'string',
          value: '',
          default: ''
        },
        {
          params: 'suffix-icon',
          desc: '输入框尾部图标',
          types: 'string',
          value: '',
          default: ''
        }
      ]
    }
  }
}
</script>

<style lang="scss">
// .show-input {
//   .sxq-input-outer {
//     width: 180px !important;
//   }
//
// }
// .sxq-input-outer {
//   width: 100%;
// }
.input-container {
  width: 400px !important;
}
</style>
