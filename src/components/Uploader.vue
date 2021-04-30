<template>
  <div>
    <h2>Uploader 上传</h2>
    <p class="title-text">
      通过点击或者拖拽上传文件
    </p>
    <!-- 基础用法 -->
    <code-view
      title="点击上传"
      desc="通过 slot 你可以传入自定义的上传按钮类型和文字提示。可通过设置limit和size来限制上传文件的个数和文件大小"
      height="880"
    >
      <template slot="source">
        <sxq-uploader
          accept="image/png, image/jpeg"
          :size="800 * 1024"
          :limit="5"
          :on-success="uploadSuccess"
          :on-error="uploadError"
        >
          <div class="uploader-area" slot="uploader-area">
            <i class="iconfont icon-add"></i>
            <div class="sxq-uploader-text">
              <em>点击上传</em>
            </div>
          </div>
          <div class="sxq-uploader-tip" slot="tip">
            只能上传jpg/png文件，小于800kb，不能超过五张
          </div>
        </sxq-uploader>
      </template>

      <template slot="code">
        <code class="html">{{ code.main.html }}</code>
        <code class="javascript">{{ code.main.javascript }}</code>
      </template>
    </code-view>
    <!-- 多文件上传 -->
    <code-view
      title="多文件上传"
      desc="设置multiple属性，接受一个Boolean，设置true即可多选"
      height="880"
    >
      <template slot="source">
        <sxq-uploader
          :on-success="uploadSuccess"
          :on-error="uploadError"
          multiple
        >
          <div class="uploader-area" slot="uploader-area">
            <i class="iconfont icon-add"></i>
            <div class="sxq-uploader-text">
              <em>点击上传</em>
            </div>
          </div>
          <div class="sxq-uploader-tip" slot="tip">
            只能上传jpg/png文件，小于500kb，不能超过三张
          </div>
        </sxq-uploader>
      </template>

      <template slot="code">
        <code class="html">{{ code.multiple.html }}</code>
        <code class="javascript">{{ code.multiple.javascript }}</code>
      </template>
    </code-view>
    <!-- 拖拽上传 -->
    <code-view title="拖拽上传" height="800">
      <template slot="source">
        <sxq-uploader
          :on-success="uploadSuccess"
          :on-error="uploadError"
          multiple
        >
          <div class="uploader-area" slot="uploader-area">
            <i class="iconfont icon-add"></i>
            <div class="sxq-uploader-text">
              <div class="sxq-uploader-text">
                将文件拖到此处，或<em>点击上传</em>
              </div>
            </div>
          </div>
          <div class="sxq-uploader-tip" slot="tip">
            只能上传jpg/png文件，小于500kb，不能超过三张
          </div>
        </sxq-uploader>
      </template>

      <template slot="code">
        <code class="html">{{ code.drap.html }}</code>
        <code class="javascript">{{ code.drap.javascript }}</code>
      </template>
    </code-view>
    <attr-table :data="api"></attr-table>
  </div>
</template>

<script>
export default {
  name: 'Uploader',
  data() {
    return {
      code: {
        main: {
          html: `
    <sxq-uploader accept="image/png, image/jpeg" :size="800 * 1024" :limit="5" :on-success="uploadSuccess" :on-error="uploadError">
        <div class="uploader-area" slot="uploader-area">
            <i class="iconfont icon-add"></i>
            <div class="sxq-uploader-text">
              <em>点击上传</em>
            </div>
        </div>
        <div class="sxq-uploader-tip" slot="tip">只能上传jpg/png文件，小于800kb，不能超过五张</div>
    </sxq-uploader>
            `,
          javascript: `    export default {
      methods: {
        uploadSuccess() {
          this.$message({
            type: 'success',
            message: '上传图片成功'
          })
        },
        uploadError(msg) {
          this.$message({
            type: 'error',
            message: msg
          })
        }
      }
    } `
        },
        multiple: {
          html: `
    <sxq-uploader :on-success="uploadSuccess" :on-error="uploadError" multiple>
        <div class="uploader-area" slot="uploader-area">
            <i class="iconfont icon-add"></i>
            <div class="sxq-uploader-text">
              <em>点击上传</em>
            </div>
        </div>
        <div class="sxq-uploader-tip" slot="tip">只能上传jpg/png文件，小于500kb，不能超过三张</div>
    </sxq-uploader>
            `,
          javascript: `    export default {
      methods: {
        uploadSuccess() {
          this.$message({
            type: 'success',
            message: '上传图片成功'
          })
        },
        uploadError(msg) {
          this.$message({
            type: 'error',
            message: msg
          })
        }
      }
    } `
        },
        drap: {
          html: `
    <sxq-uploader :on-success="uploadSuccess" :on-error="uploadError" multiple>
        <div class="uploader-area" slot="uploader-area">
            <i class="iconfont icon-add"></i>
            <div class="sxq-uploader-text">
                <div class="sxq-uploader-text">将文件拖到此处，或<em>点击上传</em></div>
            </div>
        </div>
        <div class="sxq-uploader-tip" slot="tip">只能上传jpg/png文件，小于500kb，不能超过三张</div>
    </sxq-uploader>
            `,
          javascript: `    export default {
      methods: {
        uploadSuccess() {
          this.$message({
            type: 'success',
            message: '上传图片成功'
          })
        },
        uploadError(msg) {
          this.$message({
            type: 'error',
            message: msg
          })
        }
      }
    } `
        }
      },
      api: [
        {
          params: 'multiple',
          desc: '是否支持多选文件',
          types: 'boolean',
          value: 'true / false',
          default: 'false'
        },
        {
          params: 'accept',
          desc: '接受上传的文件类型',
          types: 'string',
          value: '',
          default: 'image/png, image/jpeg'
        },
        {
          params: 'limit',
          desc: '最大允许上传个数',
          types: 'number',
          value: '',
          default: '3'
        },
        {
          params: 'size',
          desc: '最大允许上传文件大小',
          types: 'number',
          value: '',
          default: '500 * 1024'
        },
        {
          params: 'on-success',
          desc: '文件上传成功时的钩子',
          types: 'function',
          value: '',
          default: ''
        },
        {
          params: 'on-error',
          desc: '文件上传失败时的钩子',
          types: 'function',
          value: '',
          default: ''
        }
      ]
    }
  },
  methods: {
    uploadSuccess() {
      this.$message({
        type: 'success',
        message: '上传图片成功'
      })
    },
    uploadError(msg) {
      this.$message({
        type: 'error',
        message: msg
      })
    }
  }
}
</script>

<style lang="scss" scoped></style>
