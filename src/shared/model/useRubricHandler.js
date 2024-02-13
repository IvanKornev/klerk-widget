const useRubricHandler = {
  methods: {
    handleRubric(subrubric) {
      let actionName = 'rubric-adding';
      if (this.checkedRubrics[subrubric.id]) {
        actionName = 'rubric-removing';
      }
      this.$emit('checked-rubrics-change', subrubric, actionName);
    },
  },
};

export default useRubricHandler;
