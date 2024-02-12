const useRubric = {
  computed: {
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
    rootCss() {
      return ['row', {
        'row_disabled': this.disabled,
      }];
    },
    link() {
      const { url } = this.rubric;
      const results = `https://klerk.ru${url}`;
      return results;
    },
  },
  methods: {
    handleClick(type = 'arrow') {
      if (!this.disabled) {
        this.$emit(`${type}-click`);
      }
    },
  },
};

export default useRubric;
