const useRubricsHandler = {
  computed: {
    subrubricsIds() {
      const results = {};
      this.list.forEach((rubric) => {
        results[rubric.id] = rubric.children.map(({ id }) => id);
      });
      return results;
    },
  },
  methods: {
    handleRubric(rubric) {
      if (this.rubricWasAdded(rubric)) {
        this.$emit('checked-rubrics-change', rubric.id, 'rubric-removing');
        return;
      }
      const payload = {
        rubricId: rubric.id,
        subrubricsIds: this.subrubricsIds[rubric.id],
      };
      this.$emit('checked-rubrics-change', payload, 'rubric-adding');
    },
    rubricWasAdded(rubric) {
      const addedRubric = this.checkedRubrics[rubric.id];
      if (!addedRubric) {
        return false;
      }
      return this.subrubricsIds[rubric.id].length === addedRubric.length;
    },
  },
};

export default useRubricsHandler;
