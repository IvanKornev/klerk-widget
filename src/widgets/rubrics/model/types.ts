export interface IRubric {
  id: number,
  title: string,
  url: string,
  count: number,
  children: IRubric[],
}

export type TActionName = 'rubric-adding' | 'rubric-removing';
