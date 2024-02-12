<template>
  <div :class="rootCss">
    <div class="row__cell">
      <checkbox />
      <p class="cell__text">
        {{ rubric.title }}
        <a :href="link" target="_blank">
          <v-icon icon="link" />
        </a>
      </p>
    </div>
    <div v-if="withArrow" @click="handleArrowClick" class="row__icon_arrow">
      <v-icon icon="keyboard_arrow_down" />
    </div>
  </div>
</template>

<script>
export default {
  emits: ['click'],
  props: {
    rubric: {
      type: Object,
      default() {
        return {
          id: 100,
          title: 'Бухгалтерия',
          url: '/rubricator/buhgalterija/',
          children: [],
        };
      },
    },
    withArrow: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootCss() {
      return ['row', {
        'row_disabled': this.disabled,
      }];
    },
    link() {
      const { url } = this.rubric;
      const results = `https://klerk.ru${url}`;
      return results;
    },
  },
  methods: {
    handleArrowClick() {
      if (!this.disabled) {
        this.$emit('click');
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.row {
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  &_disabled .row__icon_arrow {
    pointer-events: none;
    opacity: 0.5;
  }
}
</style>
