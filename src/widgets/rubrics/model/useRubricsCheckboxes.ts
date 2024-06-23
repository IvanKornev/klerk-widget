import { ref } from 'vue';

const useRubricsCheckboxes = () => {
  const checkedRubrics = ref<TCheckedRubrics>({});

  const changeCheckedRubrics = (item: IRubric, actionName: ERubricActions) => {
    const POSSIBLE_ACTIONS = {
      [ERubricActions.Adding]: (value: IRubric) => {
        checkedRubrics.value[value.id] = value.count;
      },
      [ERubricActions.Removing]: (value: IRubric) => {
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
