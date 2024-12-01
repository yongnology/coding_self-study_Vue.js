// import './assets/main.css'

import { createApp, h } from 'vue'
// import App from './App.vue'

// createApp(App).mount('#app')
createApp({
    data() {
        return {
            message: 'hello, Vue!',
        };
    },
    method: {
        reverse() {
            this.message = this.message.split('').reverse().join('');
        },
    },
    render() {  // data와 methods에 정의한  속성 사용
        return h('div', [
            h('p', this.message),
            h('button', { onclick: this.reverse }, 'Reverse'),
        ]);
    },
}).mount('#app');
