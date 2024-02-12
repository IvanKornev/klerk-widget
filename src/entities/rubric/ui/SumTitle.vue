<template>
  <h1>Сумма count-ов отмеченных чекбоксов: {{ countsSum }}</h1>
</template>

<script>
export default {
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    checkedRubrics: {
      type: Object,
      defualt() {
        return {};
      },
    },
  },
  computed: {
    countsSum() {
      let sum = 0;
      this.list.forEach((rubric) => {
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
