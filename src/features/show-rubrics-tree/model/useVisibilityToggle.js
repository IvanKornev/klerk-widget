const useVisibilityToggle = {
  data() {
    return {
      treeIsOpen: false,
      openedRubricId: null,
    };
  },
  methods: {
    toggleTreeVisibility() {
      if (!this.disabled) {
        this.treeIsOpen = !this.treeIsOpen;
      }
    },
    toggleRubricVisibility(item = {}) {
      if (this.disabled) {
        return;
      }
      const { id } = item;
      const updatedValue = this.openedRubricId === id ? null : id;
      this.openedRubricId = updatedValue;
    },
  },
};

export default useVisibilityToggle;
