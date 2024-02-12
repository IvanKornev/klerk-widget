const BASE_URL = 'https://www.klerk.ru/yindex.php/v3/event/rubrics';

const getAll = async(withEmptyRubrics = false) => {
  const url = new URL(BASE_URL);
  url.searchParams.append('allowEmpty', +withEmptyRubrics);
  const results = await fetch(url).then((response) => (
    response.json()
  ));
  return results;
};

const rubrics = {
  getAll,
};

export default rubrics;
