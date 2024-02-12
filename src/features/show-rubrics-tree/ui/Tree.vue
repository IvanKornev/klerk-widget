<template>
  <div :class="rootCss">
    <div
      class="tree__header"
      @click="toggleTreeVisibility"
    >
      <h3 class="header__subtitle">
        РУБРИКИ
      </h3>
      <div class="header__icon_arrow">
        <v-icon icon="keyboard_arrow_down" />
      </div>
    </div>
    <div
      v-if="treeIsOpen && list.length > 0"
      class="tree__list"
    >
      <div class="list__panel">
        <v-checkbox
          label="Отображать пустые рубрики"
          :model-value="withEmptyRubrics"
          @click="$emit('empty-rubrics-toggle')"
          hide-details
        />
      </div>
      <div v-for="rubric in list" :key="rubric.id" class="list__item">
        <RubricRow
          :rubric="rubric"
          @checkbox-click="handleRubric(rubric)"
          @arrow-click="toggleRubricVisibility(rubric)"
          :active="rubricWasAdded(rubric)"
          :with-arrow="rubric.children.length > 0"
          with-count-sum
        />
        <div v-if="openedRubricId === rubric.id">
          <RubricRow
            v-for="subrubric in rubric.children"
            :key="subrubric.id"
            :rubric="subrubric"
            @checkbox-click="handleSubrubric(rubric, subrubric)"
            :active="subrubricWasAdded(rubric, subrubric)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { RubricRow } from '@/entities/rubric';
import {
  useVisibilityToggle,
  useSubrubricsHandler,
  useRubricsHandler,
} from '@/features/show-rubrics-tree/model';
export default {
  emits: ['empty-rubrics-toggle', 'checked-rubrics-change'],
  components: {
    RubricRow,
  },
  mixins: [useVisibilityToggle, useSubrubricsHandler, useRubricsHandler],
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    checkedRubrics: {
      type: Object,
      defualt() {
        return {};
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    withEmptyRubrics: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootCss() {
      return ['tree', {
        'tree_disabled': this.disabled,
        'tree_is-open': this.treeIsOpen,
      }];
    },
  },
};
</script>

<style lang="scss" scoped>
.tree {
  transition: opacity 0.3s;
  &_is-open .header__icon_arrow {
    transform: rotate(180deg);
  }
  &_disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &__header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px #000 solid;
    cursor: pointer;
  }
  &__list {
    max-height: 350px;
    overflow-y: auto;
  }
}
.header__icon_arrow {
  transition: transform 0.2s;
}
</style>
