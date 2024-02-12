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
import { useRubricsCheckboxes, useTreeLoader } from '@/widgets/rubrics/mixins';
import { RubricsTree } from '@/features/show-rubrics-tree';
export default {
  components: {
    RubricsTree,
  },
  mixins: [useTreeLoader, useRubricsCheckboxes],
};
</script>
