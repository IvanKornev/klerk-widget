import mocks from './_mocks';

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

const getMockedTree = async(withEmptyRubrics = true): Promise<IRubric[]> => (
  new Promise((resolve) => {
    setTimeout(() => {
      const key = withEmptyRubrics.toString();
      resolve(mocks.rubricsTree[key]);
    }, 500);
  })
);

const rubrics = {
  getTree,
  getMockedTree,
};

export default rubrics;
