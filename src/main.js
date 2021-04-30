import Vue from 'vue'
import App from './App.vue'
import router from './router'

// 引入sxq-ui
import sxqUi from 'sxq-ui'
import 'sxq-ui/lib/sxq-ui.css'

// 引入语法高亮
import VueHighlightJS from 'vue-highlightjs'
import 'highlight.js/styles/atom-one-dark.css'

import CodeView from '@/components/CodeView.vue'
import AttrTable from '@/components/AttrTable.vue'
Vue.component('CodeView', CodeView)
Vue.component('AttrTable', AttrTable)

Vue.use(sxqUi)
Vue.use(VueHighlightJS)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
