<template>
  <Fragment>
    <div :class="rootCss">
      <div class="row__cell">
        <v-checkbox
          :model-value="active"
          class="mt-2"
          density="compacy"
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
    <div
      v-if="rubric.children && rubric.children.length > 0"
      class="row__list_children"
    >
      <RubricRow
        v-for="subrubric in rubric.children"
        :key="subrubric.id"
        :rubric="subrubric"
        :with-arrow="subrubric?.children?.length > 0"
      />
    </div>
  </Fragment>
</template>

<script>
import { useRow } from '@/entities/rubric/model';
export default {
  name: 'RubricRow',
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
    isOpen: {
      type: Boolean,
      default: false,
    },
    withArrow: {
      type: Boolean,
      default: false,
    },
    withCountSum: {
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
  &_is-open .row__icon_arrow {
    transform: rotate(180deg);
  }
  &__icon_arrow {
    cursor: pointer;
    transition: transform 0.2s;
  }
  &__list_children {
    animation: appearing-animation 0.3s;
    padding-left: 16px;
  }
}
</style>
