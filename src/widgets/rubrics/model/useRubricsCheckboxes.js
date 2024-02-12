function _addSubrubric(payload = {}) {
  const { rubricId, subrubricId } = payload;
  if (!this.checkedRubrics[rubricId]) {
    this.checkedRubrics[rubricId] = [];
  }
  this.checkedRubrics[rubricId].push(subrubricId);
};

function _removeSubrubric(payload = {}) {
  const { rubricId, subrubricId } = payload;
  const filteredRubrics = this.checkedRubrics[rubricId].filter(
    (currentId) => subrubricId !== currentId,
  );
  this.checkedRubrics[rubricId] = filteredRubrics;
  if (this.checkedRubrics[rubricId].length === 0) {
    delete this.checkedRubrics[rubricId];
  }
};

const useRubricsCheckboxes = {
  data() {
    return {
      checkedRubrics: {},
    };
  },
  methods: {
    changeCheckedRubrics(payload, actionName) {
      const POSSIBLE_ACTIONS = {
        'subrubric-adding': _addSubrubric,
        'subrubric-removing': _removeSubrubric,
      };
      const actionCallback = POSSIBLE_ACTIONS[actionName];
      actionCallback.bind(this)(payload);
    },
  },
};

export default useRubricsCheckboxes;
