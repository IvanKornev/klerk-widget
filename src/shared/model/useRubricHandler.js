const useRubricHandler = {
  methods: {
    handleRubric(item = {}) {
      let actionName = 'rubric-adding';
      if (this.checkedRubrics[item.id] >= 0) {
        actionName = 'rubric-removing';
      }
      this.$emit('checked-rubrics-change', item, actionName);
    },
  },
};

export default useRubricHandler;
