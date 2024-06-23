import { RUBRIC_ACTIONS } from '@/shared/constants';

interface IProps {
  checkedRubrics: TCheckedRubrics,
}

const useRubricHandler = (props: IProps, emit: any) => {
  const { ADDING, REMOVING } = RUBRIC_ACTIONS;

  const handleRubric = (item: IRubric) => {
    let actionName: TRubricAction = ADDING;
    if (props.checkedRubrics[item.id] >= 0) actionName = REMOVING;
    emit('checked-rubrics-change', item, actionName);
  };

  return { handleRubric };
};

export default useRubricHandler;
