const useTreeLoader = {
  data() {
    return {
      rubricsTree: [],
      withEmptyRubrics: true,
      isLoading: true,
    };
  },
  watch: {
    async withEmptyRubrics(value) {
      await this.loadRubricsTree(value);
    },
  },
  async created() {
    await this.loadRubricsTree();
  },
  methods: {
    async loadRubricsTree(withEmptyRubrics = true) {
      this.isLoading = true;
      await this.$api.rubrics.getTree(withEmptyRubrics).then((results) => {
        this.rubricsTree = results;
        this.isLoading = false;
      });
    },
  },
};

export default useTreeLoader;
