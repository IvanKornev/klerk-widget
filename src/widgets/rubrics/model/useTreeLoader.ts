import { ref, watch, onBeforeMount, getCurrentInstance } from 'vue';

const useTreeLoader = () => {
  const internalInstance = getCurrentInstance();
  const globals = internalInstance?.appContext.config.globalProperties;

  const rubricsTree = ref<IRubric[]>([]);
  const withEmptyRubrics = ref(true);
  const isLoading = ref(true);

  const loadRubricsTree = async (withEmptyRubrics = true) => {
    isLoading.value = true;
    const results: IRubric[] = await globals?.$api.rubrics.getMockedTree(withEmptyRubrics);
    rubricsTree.value = results;
    isLoading.value = false;
  };

  onBeforeMount(loadRubricsTree);

  watch(withEmptyRubrics, loadRubricsTree);

  return {
    rubricsTree,
    withEmptyRubrics,
    isLoading,
  };
};

export default useTreeLoader;
