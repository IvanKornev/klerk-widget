import { ref, watch, onBeforeMount } from 'vue';
import api from '@/shared/api';

const useTreeLoader = () => {
  const rubricsTree = ref<IRubric[]>([]);
  const withEmptyRubrics = ref(true);
  const isLoading = ref(true);

  const loadRubricsTree = async (withEmptyRubrics = true) => {
    isLoading.value = true;
    const results: IRubric[] = await api.rubrics.getMockedTree(withEmptyRubrics);
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
