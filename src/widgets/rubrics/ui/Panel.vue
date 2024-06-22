<template>
  <main class="page">
    <RubricSumTitle :checked-rubrics="checkedRubrics" />
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

<script lang="ts" setup>
import { useRubricsCheckboxes, useTreeLoader } from '@/widgets/rubrics/model';
import { RubricsTree } from '@/features/show-rubrics-tree';
import { RubricSumTitle } from '@/entities/rubric';

const { checkedRubrics, changeCheckedRubrics } = useRubricsCheckboxes();
const { rubricsTree, isLoading, withEmptyRubrics } = useTreeLoader(checkedRubrics);
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
