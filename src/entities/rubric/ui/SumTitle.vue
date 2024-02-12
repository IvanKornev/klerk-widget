<template>
  <h1>Сумма count-ов отмеченных чекбоксов: {{ parentsSum }}</h1>
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
    parentsSum() {
      let sum = 0;
      this.list.forEach((rubric) => {
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
