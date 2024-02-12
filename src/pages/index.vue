<template>
  <main>
    <RubricsTree
      :list="rubricsTree"
      :disabled="isLoading"
      :with-empty-rubrics="withEmptyRubrics"
      @toggle-empty-rubrics="withEmptyRubrics = !withEmptyRubrics"
    />
  </main>
</template>

<script>
import { RubricsTree } from '@/widgets/rubrics-tree';
export default {
  components: {
    RubricsTree,
  },
  data() {
    return {
      rubricsTree: [],
      withEmptyRubrics: false,
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
    async loadRubricsTree(withEmptyRubrics = false) {
      this.isLoading = true;
      await this.$api.rubrics.getTree(withEmptyRubrics).then((results) => {
        this.rubricsTree = results;
        this.isLoading = false;
      });
    },
  },
};
</script>
