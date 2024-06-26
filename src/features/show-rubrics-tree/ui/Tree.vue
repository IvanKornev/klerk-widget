<template>
  <div
    class="tree"
    :class="{
      'tree_is-loading': isLoading,
      'tree_is-open': toggleState.treeIsOpen,
    }"
  >
    <div
      class="tree__header"
      @click="toggleState.toggleTreeVisibility"
    >
      <h3 class="header__subtitle">
        РУБРИКИ
      </h3>
      <div class="header__icon_arrow">
        <VIcon icon="keyboard_arrow_down" />
      </div>
    </div>
    <div
      v-show="toggleState.treeIsOpen"
      class="tree__list"
    >
      <div class="list__panel">
        <VCheckbox
          label="Отображать пустые рубрики"
          class="mt-2"
          :density="null"
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
            :opened-rubrics-ids="toggleState.openedRubricsIds"
            @arrow-click="toggleState.toggleRubricVisibility"
            @checkbox-click="handleRubric(rubric)"
            @checked-rubrics-change="(...args) => $emit('checked-rubrics-change', ...args)"
            :active="!!(checkedRubrics[rubric.id] >= 0)"
            :is-open="toggleState.openedRubricsIds.includes(rubric.id)"
            :with-arrow="!!rubric?.children?.length"
            with-count-sum
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRubricHandler } from '@/shared/model';
import { RubricRow } from '@/entities/rubric';
import { useVisibilityToggle } from '@/features/show-rubrics-tree/model';

interface IProps {
  list: IRubric[],
  checkedRubrics: TCheckedRubrics,
  isLoading?: boolean,
  withEmptyRubrics?: boolean,
}

const props = withDefaults(defineProps<IProps>(), {
  isLoading: false,
  withEmptyRubrics: false,
});

const emit = defineEmits<{
  'checked-rubrics-change': [item: IRubric, action: TRubricAction],
  'empty-rubrics-toggle': [],
}>();

const toggleState = reactive(useVisibilityToggle(props));
const { handleRubric } = useRubricHandler(props, emit);
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
