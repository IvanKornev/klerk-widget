function addSubrubric(payload = {}) {
  const { rubricId, subrubric } = payload;
  if (!this.checkedRubrics[rubricId]) {
    this.checkedRubrics[rubricId] = [];
  }
  this.checkedRubrics[rubricId].push(subrubric.id);
  this.activeSubrubricsCounts[subrubric.id] = subrubric.count;
};

function removeSubrubric(payload = {}) {
  const { rubricId, subrubric } = payload;
  const filteredRubrics = this.checkedRubrics[rubricId].filter(
    (currentId) => subrubric.id !== currentId,
  );
  this.checkedRubrics[rubricId] = filteredRubrics;
  if (this.checkedRubrics[rubricId].length === 0) {
    delete this.checkedRubrics[rubricId];
  }
  delete this.activeSubrubricsCounts[subrubric.id];
};

function addRubric(payload = {}) {
  const { rubricId, subrubrics } = payload;
  this.checkedRubrics[rubricId] = [...subrubrics.ids];
  this.activeSubrubricsCounts = {
    ...this.activeSubrubricsCounts,
    ...subrubrics.counts,
  };
};

function removeRubric(payload = {}) {
  const { rubricId, subrubrics } = payload;
  delete this.checkedRubrics[rubricId];
  subrubrics.ids.forEach((subrubricId) => {
    delete this.activeSubrubricsCounts[subrubricId];
  });
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
