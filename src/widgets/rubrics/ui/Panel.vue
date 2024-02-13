<template>
  <main class="page">
    <p>{{ JSON.stringify(checkedRubrics) }}</p>
    <RubricSumTitle
      :active-subrubrics-counts="activeSubrubricsCounts"
      :rubrics-tree="rubricsTree"
      :checked-rubrics="checkedRubrics"
    />
    <section class="page__tree">
      <RubricsTree
        :list="rubricsTree"
        :is-loading="isLoading"
        :checked-rubrics="checkedRubrics"
        :with-empty-rubrics="withEmptyRubrics"
        @empty-rubrics-toggle="withEmptyRubrics = !withEmptyRubrics"
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
  watch: {
    isLoading() {
      this.checkedRubrics = {};
      this.activeSubrubricsCounts = {};
    },
  },
};
</script>

<style lang="scss" scoped>
.page {
  padding: 0 8vw;
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
