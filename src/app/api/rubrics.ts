import mocks from './_mocks';
import { wait } from '@/shared/lib/mocking';

const BASE_URL = 'https://www.klerk.ru/yindex.php/v3/event/rubrics';

const getTree = async(withEmptyRubrics = true): Promise<IRubric[]> => {
  const url = new URL(BASE_URL);
  const allowEmptyFlag = +withEmptyRubrics;
  url.searchParams.append('allowEmpty', allowEmptyFlag.toString());
  const results = await fetch(url).then((response) => (
    response.json()
  ));
  return results;
};

const getMockedTree = async(withEmptyRubrics = true): Promise<IRubric[]> => {
  await wait(500);
  const key = withEmptyRubrics.toString();
  return mocks.rubricsTree[key];
};

const rubrics = {
  getTree,
  getMockedTree,
};

export default rubrics;
