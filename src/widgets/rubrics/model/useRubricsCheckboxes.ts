import { ref } from 'vue';

const useRubricsCheckboxes = () => {
  const checkedRubrics = ref<TCheckedRubrics>({});

  const changeCheckedRubrics = (item: IRubric, actionName: TRubricAction) => {
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
