const useRubricsCheckboxes = {
  data() {
    return {
      checkedRubrics: {},
      activeSubrubricsCounts: {},
    };
  },
  methods: {
    changeCheckedRubrics(rubric, actionName) {
      const POSSIBLE_ACTIONS = {
        'rubric-adding': (value) => {
          this.checkedRubrics[value.id] = value.count;
        },
        'rubric-removing': (value) => {
          delete this.checkedRubrics[value.id];
        },
      };
      const actionCallback = POSSIBLE_ACTIONS[actionName];
      actionCallback(rubric);
    },
  },
};

export default useRubricsCheckboxes;
