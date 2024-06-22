import { ref, watch, onBeforeMount } from 'vue';

interface IRubric {
  id: number,
  title: string,
  url: string,
  children: IRubric[],
}

const useTreeLoader = ($api: any) => {
  const rubricsTree = ref<IRubric[]>([]);
  const withEmptyRubrics = ref(true);
  const isLoading = ref(true);

  const loadRubricsTree = async (withEmptyRubrics = true) => {
    isLoading.value = true;
    await $api.rubrics.getMockedTree(withEmptyRubrics).then((results: any) => {
      rubricsTree.value = results;
      isLoading.value = false;
    });
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
