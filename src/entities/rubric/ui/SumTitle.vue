<template>
  <h1 class="align-center">
    Сумма count-ов отмеченных чекбоксов: {{ allCountsSum }}
  </h1>
</template>

<script>
export default {
  props: {
    checkedRubrics: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    allCountsSum() {
      const onlyCounts = Object.values(this.checkedRubrics);
      return onlyCounts.reduce((acc, count) => (
        acc += count
      ), 0);
    },
  },
};
</script>
