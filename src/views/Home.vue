<template>
  <div class="main-container">
    <div class="header">
      <h1>SXQ-UI</h1>
    </div>
    <div class="container">
      <div class="aside">
        <ul class="itemUl">
          <li class="aside-list" v-for="item in list" :key="item.id">
            <a class="title">{{ item.title }}</a>
            <div
              class="list-item"
              v-for="item2 in item.children"
              :key="item2.id"
            >
              <router-link :to="item2.path" :class="['item']">{{
                item2.name
              }}</router-link>
            </div>
          </li>
        </ul>
      </div>
      <div class="content">
        <transition name="page-fade">
          <router-view />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      list: [
        {
          id: '1',
          title: '开发指南',
          children: [
            {
              id: '1-1',
              name: '快速上手',
              path: '/component/usepage'
            }
          ]
        },
        {
          id: '2',
          title: '通用',
          children: [
            {
              id: '2-1',
              name: 'Icon 图标',
              path: '/component/icon'
            },
            {
              id: '2-2',
              name: 'Button 按钮',
              path: '/component/button'
            }
          ]
        },
        {
          id: '3',
          title: '数据录入',
          children: [
            {
              id: '3-1',
              name: 'Input 输入框',
              path: '/component/input'
            },
            {
              id: '3-2',
              name: 'InputNumber 计数器',
              path: '/component/input-number'
            },
            {
              id: '3-3',
              name: 'Checkbox 多选框',
              path: '/component/checkbox'
            },
            {
              id: '3-4',
              name: 'Radio 单选',
              path: '/component/radio'
            },
            {
              id: '3-5',
              name: 'Switch 开关',
              path: '/component/switch'
            }
          ]
        },
        {
          id: '4',
          title: '数据展示',
          children: [
            {
              id: '4-1',
              name: 'Card 卡片视图',
              path: '/component/card'
            },
            {
              id: '4-2',
              name: 'Uploader 上传',
              path: '/component/uploader'
            }
          ]
        },
        {
          id: '5',
          title: '消息提示',
          children: [
            {
              id: '5-1',
              name: 'Message 消息提示',
              path: '/component/message'
            },
            {
              id: '5-2',
              name: 'MessageBox 消息弹框',
              path: '/component/message-box'
            },
            {
              id: '5-3',
              name: 'toast 提示',
              path: '/component/toast'
            }
          ]
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  height: 70px;
  line-height: 70px;
  width: 100%;
  border-bottom: 2px solid #55c5d6;
  box-sizing: border-box;
  position: fixed;
  top: 0;
  z-index: 9999;
  background-color: #fff;
  h1 {
    margin: 0 0 0 50px;
    color: #55c5d6;
  }
}

.container {
  width: 100%;
  display: flex;
  position: fixed;
  top: 70px;
  height: 100%;
  .aside {
    flex: 0 0 250px;
    width: 250px;
    height: 100%;
    padding-left: 40px;
    overflow: auto;

    .itemUl {
      padding: 0 0 100px 0;
    }
    &::-webkit-scrollbar {
      width: 5px !important;
      height: 5px !important;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #eee !important;
    }
  }
  .content {
    // width: calc(100% - 280px);
    flex: 1;
    padding: 30px 30px 250px 30px;
    // height: 100%;
    overflow: auto;
    &::-webkit-scrollbar {
      width: 5px !important;
      height: 5px !important;
    }
    &::-webkit-scrollbar-thumb {
      background-color: #eee !important;
    }
  }
  .aside-list {
    .title {
      display: block;
      font-size: 12px;
      color: #9b9393;
      height: 30px;
      line-height: 30px;
      border-bottom: 1px solid #eee;
      padding-top: 10px;
    }
    .list-item {
      cursor: pointer;
      display: block;
      margin-top: 15px;

      .item {
        display: block;
        color: rgba(0, 0, 0, 0.85);
        font-size: 14px;
        height: 40px;
        line-height: 40px;
        &:hover {
          color: #55c5d6;
        }
        &.active {
          color: #55c5d6;
        }
      }
    }
  }
}
.activeColor {
  color: #55c5d6;
}
</style>
