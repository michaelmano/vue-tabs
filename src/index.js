import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

export default {
    install(Vue) {
        this.tabsName = 'vue-tabs';
        this.tabName = 'vue-tab';
        Vue.component(this.tabsName, Tabs);
        Vue.component(this.tabName, Tab);
    },
};
