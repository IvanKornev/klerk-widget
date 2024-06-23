import { computed } from 'vue';
import { sumCountFields } from '@/entities/rubric/lib/recursion';

interface IProps {
  rubric: IRubric,
  withCountSum: boolean,
}

const useRowCell = (props: IProps) => {
  const countSum = computed(() => {
    const children = props.rubric.children ?? [];
    const subrubricsSum = children.reduce(sumCountFields, 0);
    const results = subrubricsSum + props.rubric.count;
    return results;
  });

  const cellText = computed(() => {
    const { title, count } = props.rubric;
    let text = `${title} (count: ${count})`;
    if (props.withCountSum) {
      const countSumLine = `сумма count-ов: ${countSum.value}`;
      text = `${title} (count: ${count}; ${countSumLine})`;
    }
    return text;
  });

  return { cellText };
};

export default useRowCell;
