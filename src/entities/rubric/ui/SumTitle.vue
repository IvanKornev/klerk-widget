<template>
  <h1 class="text-center">
    Сумма count-ов отмеченных чекбоксов: {{ allCountsSum }}
  </h1>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  checkedRubrics: Record<number, number>,
}>();

const allCountsSum = computed(() => {
  const onlyCounts = Object.values(props.checkedRubrics);
  return onlyCounts.reduce((acc, count) => acc += count, 0);
});
</script>
