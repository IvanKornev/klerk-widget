import { ref } from 'vue';
import { RUBRIC_ACTIONS } from '@/shared/constants';

type TRubricAction = typeof RUBRIC_ACTIONS[keyof typeof RUBRIC_ACTIONS];

const useRubricsCheckboxes = () => {
  const checkedRubrics = ref<TCheckedRubrics>({});

  const changeCheckedRubrics = (item: IRubric, actionName: TRubricAction) => {
    const POSSIBLE_ACTIONS = {
      [RUBRIC_ACTIONS.ADDING]: (value: IRubric) => {
        checkedRubrics.value[value.id] = value.count;
      },
      [RUBRIC_ACTIONS.REMOVING]: (value: IRubric) => {
        delete checkedRubrics.value[value.id];
      },
    };
    const actionCallback = POSSIBLE_ACTIONS[actionName];
    actionCallback(item);
  };

  return {
    checkedRubrics,
    changeCheckedRubrics,
  };
};

export default useRubricsCheckboxes;
