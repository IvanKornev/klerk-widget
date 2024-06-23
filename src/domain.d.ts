interface IRubric {
  id: number,
  title: string,
  url: string,
  count: number,
  children?: IRubric[],
}

enum ERubricActions {
  Adding = 'rubric-adding',
  Removing = 'rubric-removing',
};

type TCheckedRubrics = Record<number, number>;
