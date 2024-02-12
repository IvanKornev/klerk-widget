const BASE_URL = 'https://www.klerk.ru/yindex.php/v3/event/rubrics';

const getAll = async() => {
  const results = await fetch(BASE_URL).then((response) => (
    response.json()
  ));
  return results;
};

const rubrics = {
  getAll,
};

export default rubrics;
