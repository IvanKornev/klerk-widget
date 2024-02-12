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

function addRubric(payload = {}) {
  const { rubricId, subrubricsIds } = payload;
  this.checkedRubrics[rubricId] = [...subrubricsIds];
};

function removeRubric(rubricId) {
  delete this.checkedRubrics[rubricId];
};

const checkboxesHelper = {
  subrubric: {
    add: addSubrubric,
    remove: removeSubrubric,
  },
  rubric: {
    add: addRubric,
    remove: removeRubric,
  },
};

export default checkboxesHelper;
