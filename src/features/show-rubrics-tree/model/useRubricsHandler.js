const useRubricsHandler = {
  computed: {
    subrubricsHashMap() {
      const results = {};
      this.list.forEach((rubric) => {
        results[rubric.id] = {
          ids: [],
          counts: {},
        };
        rubric.children.map(({ id, count }) => {
          results[rubric.id].ids.push(id);
          results[rubric.id].counts[id] = count;
        });
      });
      return results;
    },
  },
  methods: {
    handleRubric(rubric) {
      let actionName = 'rubric-adding';
      if (this.rubricWasAdded(rubric)) {
        actionName = 'rubric-removing';
      }
      const payload = {
        rubricId: rubric.id,
        subrubrics: this.subrubricsHashMap[rubric.id],
      };
      this.$emit('checked-rubrics-change', payload, actionName);
    },
    rubricWasAdded(rubric) {
      const { id } = rubric;
      const addedRubric = this.checkedRubrics[id];
      if (!addedRubric) {
        return false;
      }
      const subrubcricsLength = this.subrubricsHashMap[id].ids.length;
      return subrubcricsLength === addedRubric.length;
    },
  },
};

export default useRubricsHandler;
