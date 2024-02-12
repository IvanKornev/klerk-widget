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
    <div v-if="treeIsOpen" class="tree__list">
      <div class="list__panel">
        <v-checkbox
          label="Отображать пустые рубрики"
          :model-value="withEmptyRubrics"
          @click="$emit('empty-rubrics-toggle')"
          hide-details
        />
      </div>
      <div v-if="isLoading" class="list__preloader">
        <v-progress-circular
          size="50"
          width="8"
          indeterminate
        />
      </div>
      <Fragment v-else>
        <div
          v-for="rubric in list"
          :key="rubric.id"
          class="list__item"
        >
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
      </Fragment>
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
    isLoading: {
      type: Boolean,
      default: true,
    },
    withEmptyRubrics: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootCss() {
      return ['tree', {
        'tree_is-loading': this.isLoading,
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
  &_is-loading {
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
    margin-top: 16px;
    padding-right: 16px;
  }
}
.list__preloader {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 280px;
}
.header__icon_arrow {
  transition: transform 0.2s;
}
</style>
