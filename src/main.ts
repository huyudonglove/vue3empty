import { createApp } from 'vue'
import 'ant-design-vue/dist/antd.css'
import { Layout, Menu, Breadcrumb, Timeline, Table, Typography, List, Comment, Tooltip, Avatar, Carousel } from 'ant-design-vue'
import App from './App.vue'
import router from './router/index'

const app = createApp(App)

app.use(Layout)
app.use(Menu)
app.use(Breadcrumb)
app.use(Timeline)
app.use(Table)
app.use(Typography)
app.use(List)
app.use(Comment)
app.use(Tooltip)
app.use(Avatar)
app.use(Carousel)

app.use(router)

app.mount('#app')
