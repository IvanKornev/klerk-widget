<template>
  <main class="page">
    <p>{{ JSON.stringify(activeSubrubricsCounts) }}</p>
    <RubricSumTitle
      :list="rubricsTree"
      :checked-rubrics="checkedRubrics"
    />
    <section class="page__tree">
      <RubricsTree
        :list="rubricsTree"
        :disabled="isLoading"
        :checked-rubrics="checkedRubrics"
        :with-empty-rubrics="withEmptyRubrics"
        @toggle-empty-rubrics="withEmptyRubrics = !withEmptyRubrics"
        @checked-rubrics-change="changeCheckedRubrics"
      />
    </section>
  </main>
</template>

<script>
import { useRubricsCheckboxes, useTreeLoader } from '@/widgets/rubrics/model';
import { RubricsTree } from '@/features/show-rubrics-tree';
import { RubricSumTitle } from '@/entities/rubric';
export default {
  components: {
    RubricsTree,
    RubricSumTitle,
  },
  mixins: [useTreeLoader, useRubricsCheckboxes],
};
</script>

<style lang="scss" scoped>
.page {
  margin-top: 64px;
  display: flex;
  align-items: center;
  flex-direction: column;
  &__tree {
    margin-top: 64px;
    max-width: 600px;
    width: 100%;
  }
}
</style>
