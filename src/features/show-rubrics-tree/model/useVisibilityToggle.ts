import { ref, watch } from 'vue';

interface ITreeProps {
  isLoading: boolean,
}

const useVisibilityToggle = (props: ITreeProps) => {
  const treeIsOpen = ref(true);
  const openedRubricsIds = ref<number[]>([]);

  watch(() => props.isLoading, () => (openedRubricsIds.value = []));

  const toggleTreeVisibility = () => {
    if (!props.isLoading) {
      treeIsOpen.value = !treeIsOpen.value;
    }
  };

  const toggleRubricVisibility = (item: IRubric) => {
    if (props.isLoading) return;

    const duplicatesFilter = (id: number) => id !== item.id;
    const withoutDublicates = openedRubricsIds.value.filter(duplicatesFilter);

    if (withoutDublicates.length !== openedRubricsIds.value.length) {
      openedRubricsIds.value = withoutDublicates;
      return;
    }

    openedRubricsIds.value.push(item.id);
  };

  return {
    treeIsOpen,
    openedRubricsIds,
    toggleTreeVisibility,
    toggleRubricVisibility,
  };
};

export default useVisibilityToggle;
