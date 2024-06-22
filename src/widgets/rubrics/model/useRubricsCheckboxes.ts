import { ref } from 'vue';
import type { IRubric, TActionName } from './types';

const useRubricsCheckboxes = () => {
  const checkedRubrics = ref<Record<number, number>>({});

  const changeCheckedRubrics = (item: IRubric, actionName: TActionName) => {
    const POSSIBLE_ACTIONS = {
      'rubric-adding': (value: IRubric) => {
        checkedRubrics.value[value.id] = value.count;
      },
      'rubric-removing': (value: IRubric) => {
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
