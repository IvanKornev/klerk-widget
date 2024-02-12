<template>
  <h1 class="align-center">Сумма count-ов отмеченных чекбоксов: {{ allCountsSum }}</h1>
</template>

<script>
export default {
  props: {
    activeSubrubricsCounts: {
      type: Object,
      default() {
        return {};
      },
    },
    rubricsTree: {
      type: Array,
      default() {
        return [];
      },
    },
    checkedRubrics: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    allCountsSum() {
      return this.parentsSum + this.childrenSum;
    },
    childrenSum() {
      const onlyCounts = Object.values(this.activeSubrubricsCounts);
      return onlyCounts.reduce((acc, count) => (
        acc += count
      ), 0);
    },
    parentsSum() {
      let sum = 0;
      this.rubricsTree.forEach((rubric) => {
        const { id, children, count } = rubric;
        const parentRubricWasSelected = this.checkedRubrics[id] &&
          this.checkedRubrics[id].length === children.length;
        if (parentRubricWasSelected) {
          sum += count;
        }
      });
      return sum;
    },
  },
};
</script>
