<template>
    <section v-show="isActive" :aria-hidden="! isActive" class="Tabs__panel" :id="hash" :ref="hash" role="tabpanel">
        <div class="Tabs__content">
            <slot />
        </div>
    </section>
</template>

<script>
export default {
  props: {
    id: { default: null },
    name: { required: true },
    prefix: { default: '' },
    suffix: { default: '' },
  },
  data: () => ({
    isActive: false,
    isVisible: true,
  }),
  computed: {
    header() {
      return this.prefix + this.name + this.suffix;
    },
    hash() {
      return this.id
        ? '#' + this.id
        : '#' + this.name.toLowerCase().replace(/ /g, '-');
    },
  },
};
</script>

<style lang="scss">
.Tabs__content {
  padding: 1rem 0;
}
</style>
