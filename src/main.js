import { createApp } from 'vue'
import App from './App.vue'
import { store } from './store/store'
import { i18n } from './plugins/i18n'
// import { router } from './plugins/router'

createApp(App).
    use(store).
    use(i18n).
    mount('#app')
