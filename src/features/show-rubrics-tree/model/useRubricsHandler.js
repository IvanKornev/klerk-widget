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
      const actionName = 'rubric-adding';
      const payload = {
        rubricId: rubric.id,
        subrubricsIds: this.subrubricsIds[rubric.id],
      };
      this.$emit('checked-rubrics-change', payload, actionName);
    },
  },
};

export default useRubricsHandler;
