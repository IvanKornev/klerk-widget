import checkboxesHelper from '@/widgets/rubrics/lib/checkboxesHelper';

const { subrubric, rubric } = checkboxesHelper;

const useRubricsCheckboxes = {
  data() {
    return {
      checkedRubrics: {},
    };
  },
  methods: {
    changeCheckedRubrics(payload, actionName) {
      const POSSIBLE_ACTIONS = {
        'subrubric-adding': subrubric.add,
        'subrubric-removing': subrubric.remove,
        'rubric-adding': rubric.add,
        'rubric-removing': rubric.remove,
      };
      const actionCallback = POSSIBLE_ACTIONS[actionName];
      actionCallback.bind(this)(payload);
    },
  },
};

export default useRubricsCheckboxes;
