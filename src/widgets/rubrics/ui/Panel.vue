<template>
  <main>
    <p>{{ JSON.stringify(checkedRubrics) }}</p>
    <RubricsTree
      :list="rubricsTree"
      :disabled="isLoading"
      :checked-rubrics="checkedRubrics"
      :with-empty-rubrics="withEmptyRubrics"
      @toggle-empty-rubrics="withEmptyRubrics = !withEmptyRubrics"
      @checked-rubrics-change="changeCheckedRubrics"
    />
  </main>
</template>

<script>
import useTreeLoader from '@/widgets/rubrics/model/useTreeLoader';
import { RubricsTree } from '@/features/show-rubrics-tree';
export default {
  components: {
    RubricsTree,
  },
  mixins: [useTreeLoader],
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
</script>
