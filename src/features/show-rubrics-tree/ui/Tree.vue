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
        <VIcon icon="keyboard_arrow_down" />
      </div>
    </div>
    <div
      v-show="treeIsOpen"
      class="tree__list"
    >
      <div class="list__panel">
        <VCheckbox
          label="Отображать пустые рубрики"
          class="mt-2"
          density="compacy"
          :model-value="withEmptyRubrics"
          @click="$emit('empty-rubrics-toggle')"
          hide-details
        />
      </div>
      <div
        v-if="isLoading"
        class="list__preloader"
      >
        <VProgressCircular
          size="50"
          width="8"
          indeterminate
        />
      </div>
      <div v-else>
        <div
          v-for="rubric in list"
          :key="rubric.id"
        >
          <RubricRow
            class="item__row"
            :rubric="rubric"
            :checked-rubrics="checkedRubrics"
            :opened-rubrics-ids="openedRubricsIds"
            @arrow-click="toggleRubricVisibility"
            @checkbox-click="handleRubric(rubric)"
            @checked-rubrics-change="emitCheckedRubricsChanges"
            :active="!!(checkedRubrics[rubric.id] >= 0)"
            :is-open="openedRubricsIds.includes(rubric.id)"
            :with-arrow="rubric?.children?.length > 0"
            with-count-sum
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRubricHandler } from '@/shared/model';
import { useVisibilityToggle } from '@/features/show-rubrics-tree/model';
import { RubricRow } from '@/entities/rubric';
export default {
  emits: ['empty-rubrics-toggle', 'checked-rubrics-change'],
  components: {
    RubricRow,
  },
  mixins: [useRubricHandler],
  props: {
    list: {
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
    isLoading: {
      type: Boolean,
      default: true,
    },
    withEmptyRubrics: {
      type: Boolean,
      default: false,
    },
  },
  setup(props) {
    const { treeIsOpen, openedRubricsIds, toggleTreeVisibility, toggleRubricVisibility } = useVisibilityToggle(props);
    return { treeIsOpen, openedRubricsIds, toggleTreeVisibility, toggleRubricVisibility };
  },
  computed: {
    rootCss() {
      return ['tree', {
        'tree_is-loading': this.isLoading,
        'tree_is-open': this.treeIsOpen,
      }];
    },
  },
  methods: {
    emitCheckedRubricsChanges(...args) {
      this.$emit('checked-rubrics-change', ...args);
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
.item__row {
  animation: appearing-animation 0.3s;
}
</style>
