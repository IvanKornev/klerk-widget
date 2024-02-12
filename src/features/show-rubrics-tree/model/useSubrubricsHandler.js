const useSubrubricsHandler = {
  methods: {
    handleSubrubric(rubric, subrubric) {
      let actionName = 'subrubric-adding';
      if (this.subrubricWasAdded(rubric, subrubric)) {
        actionName = 'subrubric-removing';
      }
      const payload = {
        rubricId: rubric.id,
        subrubricId: subrubric.id,
      };
      this.$emit('checked-rubrics-change', payload, actionName);
    },
    subrubricWasAdded(rubric, subrubric) {
      if (!this.checkedRubrics[rubric.id]) {
        return false;
      }
      return this.checkedRubrics[rubric.id].includes(subrubric.id);
    },
  },
};

export default useSubrubricsHandler;
