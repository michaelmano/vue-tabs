# Vue Tabs

Vue Tabs is a tab system written for Vue.js

## Table of Contents

- [Installing](#installing)
- [Options](#options)
- [Todo](#todo)

## Installing

`npm install @mmano/vue-tabs`

```javascript
import Vue from 'vue';
import Tabs from '@mmano/vue-tabs';
Vue.use(Tabs);

new Vue({
  el: '#app',
});
```

```html
<vue-tabs>
  <vue-tab name="Tab 1">
    <p>Content for tab 1</p>
  </vue-tab>
  <vue-tab name="Tab 2">
    <p>Content for tab 2</p>
  </vue-tab>
</vue-tabs>
```

## Options

You can override `<vue-tabs>` to something else with the below options.

```javascript
Vue.use(Tabs, {
  componentName: {
    parent: 'some-elements',
    child: 'some-element-child',
  }
});
```

The above will change the components to:

```html
<some-elements>
  <some-element-child name="Tab 1">
    <p>Content for tab 1</p>
  </some-element-child>
  <some-element-child name="Tab 2">
    <p>Content for tab 2</p>
  </some-element-child>
</some-elements>
```

## TODO

- update `README.md`
