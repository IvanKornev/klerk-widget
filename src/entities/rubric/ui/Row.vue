<template>
  <Fragment>
    <div :class="rootCss">
      <div class="row__cell">
        <VCheckbox
          :model-value="active"
          class="mt-2"
          density="compacy"
          hide-details
          @click="$emit('checkbox-click', rubric)"
        >
          <template #label>
            <p class="cell__text">
              {{ cellText }}
              <a
                :href="link"
                target="_blank"
              >
                <VIcon icon="link" />
              </a>
            </p>
          </template>
        </VCheckbox>
      </div>
      <div
        v-if="withArrow"
        @click="$emit('arrow-click', rubric)"
        class="row__icon_arrow"
      >
        <VIcon icon="keyboard_arrow_down" />
      </div>
    </div>
    <div
      v-if="childrenAreVisible(rubric)"
      class="row__list_children"
    >
      <RubricRow
        v-for="subrubric in rubric.children"
        :key="subrubric.id"
        :opened-rubrics-ids="openedRubricsIds"
        :checked-rubrics="checkedRubrics"
        :rubric="subrubric"
        :with-arrow="hasChildren(subrubric)"
        :with-count-sum="hasChildren(subrubric)"
        :is-open="openedRubricsIds.includes(subrubric.id)"
        :active="!!(checkedRubrics[subrubric.id] >= 0)"
        @checked-rubrics-change="emitCheckedRubricsChanges"
        @arrow-click="openSubrubric"
        @checkbox-click="handleRubric(subrubric)"
      />
    </div>
  </Fragment>
</template>

<script>
import { useRubricHandler } from '@/shared/model';
import { useRow } from '@/entities/rubric/model';
export default {
  name: 'RubricRow',
  emits: ['arrow-click', 'checkbox-click', 'checked-rubrics-change'],
  mixins: [useRow, useRubricHandler],
  props: {
    openedRubricsIds: {
      type: Array,
      default() {
        return [];
      },
    },
    checkedRubrics: {
      type: Object,
      default() {
        return {};
      },
    },
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
