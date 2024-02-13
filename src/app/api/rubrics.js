import mocks from './_mocks';

const BASE_URL = 'https://www.klerk.ru/yindex.php/v3/event/rubrics';

const getTree = async(withEmptyRubrics = true) => {
  const url = new URL(BASE_URL);
  url.searchParams.append('allowEmpty', +withEmptyRubrics);
  const results = await fetch(url).then((response) => (
    response.json()
  ));
  return results;
};

const getMockedTree = async(withEmptyRubrics = true) => (
  new Promise((resolve) => {
    setTimeout(() => {
      resolve(mocks.rubricsTree[withEmptyRubrics]);
    }, 500);
  })
);

const rubrics = {
  getTree,
  getMockedTree,
};

export default rubrics;
