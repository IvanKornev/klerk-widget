import checkboxesHelper from '@/widgets/rubrics/lib/checkboxesHelper';

const { rubric } = checkboxesHelper;

const useRubricsCheckboxes = {
  data() {
    return {
      checkedRubrics: {},
      activeSubrubricsCounts: {},
    };
  },
  methods: {
    changeCheckedRubrics(payload, actionName) {
      const POSSIBLE_ACTIONS = {
        'rubric-adding': rubric.add,
        'rubric-removing': rubric.remove,
      };
      const actionCallback = POSSIBLE_ACTIONS[actionName];
      actionCallback.bind(this)(payload);
    },
  },
};

export default useRubricsCheckboxes;
