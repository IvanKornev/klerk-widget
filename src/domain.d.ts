interface IRubric {
  id: number,
  title: string,
  url: string,
  count: number,
  children?: IRubric[],
}

type TCheckedRubrics = Record<number, number>;
