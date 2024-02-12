<template>
  <div :class="rootCss">
    <div class="row__cell">
      <v-checkbox class="pa-0 ma-0" hide-details @click="handleClick('checkbox')">
        <template #label>
          <p class="cell__text">
            {{ cellText }}
            <a :href="link" target="_blank">
              <v-icon icon="link" />
            </a>
          </p>
        </template>
      </v-checkbox>
    </div>
    <div v-if="withArrow" @click="handleClick('arrow')" class="row__icon_arrow">
      <v-icon icon="keyboard_arrow_down" />
    </div>
  </div>
</template>

<script>
export default {
  emits: ['arrow-click', 'checkbox-click'],
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
    withTotalCount: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    cellText() {
      const { title, count } = this.rubric;
      let text = `${title} (кол-во: ${count})`;
      if (this.withTotalCount) {
        const totalCountLine = `сумма количеств: ${this.totalCount}`;
        text = `${title} (кол-во: ${count}; ${totalCountLine})`;
      }
      return text;
    },
    totalCount() {
      const subrubricsTotalCount = this.rubric.children.reduce((acc, item) => (
        acc += item.count
      ), 0);
      const results = subrubricsTotalCount + this.rubric.count;
      return results;
    },
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
    handleClick(type = 'arrow') {
      if (!this.disabled) {
        this.$emit(`${type}-click`);
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
