function addRubric(subrubric) {
  this.checkedRubrics[subrubric.id] = subrubric.count;
};

function removeRubric(subrubric) {
  delete this.checkedRubrics[subrubric.id];
};
const checkboxesHelper = {
  rubric: {
    add: addRubric,
    remove: removeRubric,
  },
};

export default checkboxesHelper;
