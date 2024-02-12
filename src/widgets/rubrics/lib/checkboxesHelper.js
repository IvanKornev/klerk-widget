function addSubrubric(payload = {}) {
  const { rubricId, subrubricId } = payload;
  if (!this.checkedRubrics[rubricId]) {
    this.checkedRubrics[rubricId] = [];
  }
  this.checkedRubrics[rubricId].push(subrubricId);
};

function removeSubrubric(payload = {}) {
  const { rubricId, subrubricId } = payload;
  const filteredRubrics = this.checkedRubrics[rubricId].filter(
    (currentId) => subrubricId !== currentId,
  );
  this.checkedRubrics[rubricId] = filteredRubrics;
  if (this.checkedRubrics[rubricId].length === 0) {
    delete this.checkedRubrics[rubricId];
  }
};

const checkboxesHelper = {
  subrubric: {
    add: addSubrubric,
    remove: removeSubrubric,
  },
};

export default checkboxesHelper;
