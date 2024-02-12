const useVisibilityToggle = {
  data() {
    return {
      treeIsOpen: true,
      openedRubricsIds: [],
    };
  },
  watch: {
    isLoading() {
      this.openedRubricsIds = [];
    },
  },
  methods: {
    toggleTreeVisibility() {
      if (!this.isLoading) {
        this.treeIsOpen = !this.treeIsOpen;
      }
    },
    toggleRubricVisibility(item = {}) {
      if (this.isLoading) {
        return;
      }
      this.openedRubricsIds.push(item.id);
    },
  },
};

export default useVisibilityToggle;
