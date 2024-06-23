<template>
  <Fragment>
    <div
      class="row"
      :class="{ 'row_is-open': isOpen }"
    >
      <div class="row__cell">
        <VCheckbox
          :model-value="active"
          class="mt-2"
          :density="null"
          hide-details
          @click="$emit('checkbox-click', rubric)"
        >
          <template #label>
            <p class="cell__text">
              {{ cellText }}
              <a
                :href="`https://klerk.ru${props.rubric.url}`"
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
      v-if="rubric.children && rubric.children.length && openedRubricsIds.includes(rubric.id)"
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
        @checked-rubrics-change="(...args) => $emit('checked-rubrics-change', ...args)"
        @arrow-click="(item) => $emit('arrow-click', item)"
        @checkbox-click="handleRubric(subrubric)"
      />
    </div>
  </Fragment>
</template>

<script lang="ts" setup>
import { RUBRIC_ACTIONS } from '@/shared/constants';
import { RubricRow } from '@/entities/rubric';
import { useRowCell } from '@/entities/rubric/model';

type TRubricAction = typeof RUBRIC_ACTIONS[keyof typeof RUBRIC_ACTIONS];

interface IProps {
  openedRubricsIds: number[],
  checkedRubrics: TCheckedRubrics,
  isOpen?: boolean,
  withArrow?: boolean,
  withCountSum?: boolean,
  active?: boolean,
  rubric: IRubric,
}

const props = withDefaults(defineProps<IProps>(), {
  isOpen: false,
  withArrow: false,
  withCountSum: false,
  active: false,
});

const emit = defineEmits<{
  'checked-rubrics-change': [item: IRubric, action: TRubricAction],
  'checkbox-click': [item: IRubric],
  'arrow-click': [item: IRubric],
}>();

const { cellText } = useRowCell(props);

const handleRubric = (item: IRubric) => {
  let actionName: TRubricAction = RUBRIC_ACTIONS.ADDING;
  if (props.checkedRubrics[item.id] >= 0) RUBRIC_ACTIONS.REMOVING;
  emit('checked-rubrics-change', item, actionName);
};

const hasChildren = ({ children }: IRubric) => children && children.length > 0;
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
