const useRubricsCheckboxes = {
  data() {
    return {
      checkedRubrics: {},
    };
  },
  methods: {
    changeCheckedRubrics(payload, actionName) {
      const possibleActions = {
        'subrubric-adding': (payload) => this.addSubrubric(payload),
        'subrubric-removing': (payload) => this.removeSubrubric(payload),
      };
      const actionCallback = possibleActions[actionName];
      actionCallback(payload);
    },
    addSubrubric(payload = {}) {
      const { rubricId, subrubricId } = payload;
      if (!this.checkedRubrics[rubricId]) {
        this.checkedRubrics[rubricId] = [];
      }
      this.checkedRubrics[rubricId].push(subrubricId);
    },
    removeSubrubric(payload = {}) {
      const { rubricId, subrubricId } = payload;
      const filteredRubrics = this.checkedRubrics[rubricId].filter(
        (currentId) => subrubricId !== currentId,
      );
      this.checkedRubrics[rubricId] = filteredRubrics;
      if (this.checkedRubrics[rubricId].length === 0) {
        delete this.checkedRubrics[rubricId];
      }
    },
  },
};

export default useRubricsCheckboxes;
