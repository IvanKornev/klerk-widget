function sumCountFields(acc, rubric) {
  if (rubric.children && rubric.children.length > 0) {
    return rubric.children.reduce(sumCountFields, rubric.count + acc);
  }
  acc += rubric.count;
  return acc;
}

const recursion = {
  sumCountFields,
};

export default recursion;
