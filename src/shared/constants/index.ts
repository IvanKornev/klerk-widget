export const RUBRIC_ACTIONS = {
  ADDING: 'rubric-adding',
  REMOVING: 'rubric-removing',
} as const;

export type TRubricAction = typeof RUBRIC_ACTIONS[keyof typeof RUBRIC_ACTIONS];
