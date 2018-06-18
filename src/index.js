import Tabs from './components/Tabs.vue';
import Tab from './components/Tab.vue';

const opts = {
    componentName: {
        parent: 'vue-tabs',
        child: 'vue-tab',
    },
};

export default {
    install(Vue, options = {}) {
        this.tabsName =
            options.componentName.parent || opts.componentName.parent;
        this.tabName = options.componentName.child || opts.componentName.child;
        Vue.component(this.tabsName, Tabs);
        Vue.component(this.tabName, Tab);
    },
};
