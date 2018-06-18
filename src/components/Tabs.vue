<template>
    <div class="Tabs">
        <ul role="tablist" class="Tabs__list">
            <li v-for="(index, tab) in tabs" :key="index" v-show="tab.isVisible" class="Tabs__list-item" role="presentation">
                <a v-html="tab.header" :aria-controls="tab.hash" :aria-selected="tab.isActive" @click="selectTab(tab.hash, $event)" :href="tab.hash" :class="['Tabs__list-link', tab.isActive ? 'is-active' : '']" role="tab"></a>
            </li>
        </ul>
        <div class="Tabs__panels">
            <slot/>
        </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      tabs: [],
    };
  },
  mounted() {
    this.tabs = this.$children;
    this.mountTab();
  },
  methods: {
    mountTab() {
      if (window.location.hash) {
        const refs = this.tabs.filter(
          tab => tab.$refs[window.location.hash],
        )[0];
        if (refs) return (refs.isActive = true);
      }
      return (this.tabs[0].isActive = true);
    },
    selectTab(hash) {
      this.tabs.forEach(tab => {
        if (tab.hash === hash) {
          tab.isActive = true;
        } else {
          tab.isActive = false;
        }
      });
    },
  },
};
</script>

<style lang="scss">
$v-tab-colors: (
  alpha: #ffffff,
  bravo: #4db6ac
) !default;

.Tabs__list {
  margin: 0;
  padding: 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  list-style: none;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  background-color: map-get($v-tab-colors, hotel);
}

.Tabs__list-item {
  margin: 0;
  padding: 0;
  display: inline-block;
}

.Tabs__list-item .Tabs__list-link {
  display: block;
  position: relative;
  width: 100%;
  color: map-get($v-tab-colors, alpha);
  text-decoration: none;
  padding: 1.25rem;

  &:before {
    position: absolute;
    content: '';
    border-bottom: 5px solid transparent;
    left: 50%;
    right: 50%;
    width: 0;
    bottom: 0;
  }

  &:hover,
  &:active,
  &:focus,
  &.is-active {
    color: map-get($v-tab-colors, alpha);
    &:before {
      transition: left ease-in-out 250ms, width ease-in-out 250ms;
      width: 100%;
      left: 0;
      right: 0;
      border-bottom: 5px solid map-get($v-tab-colors, alpha);
    }
  }
}
</style>
