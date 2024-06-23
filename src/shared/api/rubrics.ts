import { wait } from '@/shared/lib/mocking';
import mocks from './_mocks';

const BASE_URL = 'https://www.klerk.ru/yindex.php/v3/event/rubrics';

const getTree = async(withEmptyRubrics = true): Promise<IRubric[]> => {
  const url = new URL(BASE_URL);
  url.searchParams.append('allowEmpty', String(+withEmptyRubrics));
  return await fetch(url).then((response) => response.json());
};

const getMockedTree = async(withEmptyRubrics = true): Promise<IRubric[]> => {
  await wait(500);
  return mocks.rubricsTree[withEmptyRubrics.toString()];
};

const rubrics = {
  getTree,
  getMockedTree,
};

export default rubrics;
