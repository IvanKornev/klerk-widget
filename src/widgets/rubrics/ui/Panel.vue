<template>
  <main>
    <p>{{ JSON.stringify(countsSum) }}</p>
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
import { useRubricsCheckboxes, useTreeLoader } from '@/widgets/rubrics/model';
import { RubricsTree } from '@/features/show-rubrics-tree';
export default {
  components: {
    RubricsTree,
  },
  mixins: [useTreeLoader, useRubricsCheckboxes],
  computed: {
    countsSum() {
      let sum = 0;
      this.rubricsTree.forEach((rubric) => {
        const { id, children, count } = rubric;
        const rubricWasSelected = this.checkedRubrics[id] &&
          this.checkedRubrics[id].length === children.length;
        if (rubricWasSelected) {
          sum += count;
        }
      });
      return sum;
    },
  },
};
</script>
