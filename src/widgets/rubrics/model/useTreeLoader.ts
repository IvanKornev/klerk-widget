import { ref, watch, onBeforeMount, getCurrentInstance } from 'vue';
import type { Ref } from 'vue';
import type { IRubric } from './types';

const useTreeLoader = (checkedRubrics: Ref<Record<number, number>>) => {
  const internalInstance = getCurrentInstance();
  const globals = internalInstance?.appContext.config.globalProperties;

  const rubricsTree = ref<IRubric[]>([]);
  const withEmptyRubrics = ref(true);
  const isLoading = ref(true);

  const loadRubricsTree = async (withEmptyRubrics = true) => {
    isLoading.value = true;
    await globals?.$api.rubrics.getMockedTree(withEmptyRubrics).then((results: any) => {
      rubricsTree.value = results;
      isLoading.value = false;
    });
  };

  onBeforeMount(loadRubricsTree);

  watch(withEmptyRubrics, loadRubricsTree);
  watch(isLoading, () => (checkedRubrics.value = {}));

  return {
    rubricsTree,
    withEmptyRubrics,
    isLoading,
  };
};

export default useTreeLoader;
