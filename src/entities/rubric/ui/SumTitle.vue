<template>
  <h1 class="text-center">
    Сумма count-ов отмеченных чекбоксов: {{ allCountsSum }}
  </h1>
</template>

<script lang="ts" setup>
import { computed } from 'vue';
import { TCheckedRubric } from '@/widgets/rubrics/model/types';

const props = defineProps<{ checkedRubrics: TCheckedRubric }>();

const allCountsSum = computed(() => {
  const onlyCounts = Object.values(props.checkedRubrics);
  return onlyCounts.reduce((acc, count) => acc += count, 0);
});
</script>
