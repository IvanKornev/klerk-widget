<template>
  <main>
    <RubricsTree :list="treeList" />
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
      treeList: [],
    };
  },
  async created() {
    this.treeList = await this.$api.rubrics.getAll();
  },
};
</script>
