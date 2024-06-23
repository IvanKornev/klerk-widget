import { RUBRIC_ACTIONS } from '@/shared/constants';

interface IProps {
  checkedRubrics: TCheckedRubrics,
}

type TEmit = (e: 'checked-rubrics-change', item: IRubric, actionName: TRubricAction) => void;

const useRubricHandler = (props: IProps, emit: TEmit) => {
  const { ADDING, REMOVING } = RUBRIC_ACTIONS;

  const handleRubric = (item: IRubric) => {
    let actionName: TRubricAction = ADDING;
    if (props.checkedRubrics[item.id] >= 0) actionName = REMOVING;
    emit('checked-rubrics-change', item, actionName);
  };

  return { handleRubric };
};

export default useRubricHandler;
