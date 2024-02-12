<template>
  <div :class="rootCss">
    <div class="row__cell">
      <v-checkbox
        :model-value="active"
        class="pa-0 ma-0"
        hide-details
        @click="handleClick('checkbox')"
      >
        <template #label>
          <p class="cell__text">
            {{ cellText }}
            <a
              :href="link"
              target="_blank"
            >
              <v-icon icon="link" />
            </a>
          </p>
        </template>
      </v-checkbox>
    </div>
    <div
      v-if="withArrow"
      @click="handleClick('arrow')"
      class="row__icon_arrow"
    >
      <v-icon icon="keyboard_arrow_down" />
    </div>
  </div>
</template>

<script>
import { useRow } from '@/entities/rubric/model';
export default {
  emits: ['arrow-click', 'checkbox-click'],
  mixins: [useRow],
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
    withCountSum: {
      type: Boolean,
      default: false,
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    active: {
      type: Boolean,
      default: false,
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
