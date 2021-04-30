<template>
  <div class="table">
    <h3>API</h3>
    <p class="introduction">属性说明如下:</p>
    <table class="table-container">
      <thead>
        <tr>
          <th v-for="(item, index) in thead" :key="index">{{ item }}</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(tr, index1) in data" :key="index1">
          <td v-for="(td, index2) in tr" :key="index2">
            <span
              v-if="td !== ''"
              :class="{
                params: index2 === 'params',
                desc: index2 === 'desc',
                types: index2 === 'types'
              }"
              >{{ td }}</span
            >
            <span v-else>—</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'attrTable',
  props: {
    data: Array
  },
  data() {
    return {
      thead: ['参数', '说明', '类型', '可选值', '默认值']
    }
  }
}
</script>

<style lang="scss" scoped>
.table {
  h3 {
    margin: 55px 0 20px;
    font-weight: 400;
    color: #1f2f3d;
  }
  .introduction {
    font-size: 14px;
    color: #5e6d82;
    margin: 10px 0 20px;
  }
}

.table-container {
  width: 80%;
  border-collapse: collapse;
  thead {
    text-align: left;
    tr {
      border-bottom: 1px solid #dcdfe6;
      th {
        padding: 15px;
        width: 60px;
        font-size: 16px;
        font-weight: 400;
        color: #909399;
        white-space: nowrap;
        &:first-child {
          padding-left: 10px;
        }
      }
    }
  }
  tbody {
    tr {
      border-bottom: 1px solid #dcdfe6;
      td {
        padding: 20px;
        font-size: 14px;
        font-weight: 400;
        color: #606266;
        white-space: normal;
        &:first-child {
          padding-left: 10px;
        }
        .params {
          color: #55c5d6;
        }
        .types {
          color: #bd6f9c;
        }
        .desc {
          display: inline-block;
          max-width: 300px;
        }
      }
    }
  }
}
</style>
