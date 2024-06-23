interface IRubric {
  id: number,
  title: string,
  url: string,
  count: number,
  children?: IRubric[],
}

type TRubricAction = 'rubric-adding' | 'rubric-removing';

type TCheckedRubrics = Record<number, number>;
