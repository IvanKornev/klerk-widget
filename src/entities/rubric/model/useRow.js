const useRow = {
  computed: {
    rootCss() {
      return ['row', {
        'row_is-open': this.isOpen,
      }];
    },
    cellText() {
      const { title, count } = this.rubric;
      let text = `${title} (count: ${count})`;
      if (this.withCountSum) {
        const countSumLine = `сумма count-ов: ${this.countSum}`;
        text = `${title} (count: ${count}; ${countSumLine})`;
      }
      return text;
    },
    countSum() {
      const subrubricsCountSum = this.rubric.children.reduce((acc, item) => (
        acc += item.count
      ), 0);
      const results = subrubricsCountSum + this.rubric.count;
      return results;
    },
    link() {
      const { url } = this.rubric;
      const results = `https://klerk.ru${url}`;
      return results;
    },
  },
  methods: {
    emitCheckedRubricsChanges(...args) {
      this.$emit('checked-rubrics-change', ...args);
    },
    hasChildren(subrubric) {
      return subrubric.children && subrubric.children.length > 0;
    },
  },
};

export default useRow;
