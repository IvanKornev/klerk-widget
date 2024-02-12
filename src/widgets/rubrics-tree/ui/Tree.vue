<template>
  <section :class="rootCss">
    <div
      class="tree__header"
      @click="toggleTreeVisibility"
    >
      <h3 class="header__subtitle">
        Рубрики
      </h3>
      <div>
        <v-icon icon="keyboard_arrow_down" />
      </div>
    </div>
    <div
      v-if="treeIsOpen && list.length > 0"
      class="tree__list"
    >
      <div class="list__panel">
        <v-checkbox label="Отображать пустые рубрики" hide-details />
      </div>
      <div v-for="rubric in list" :key="rubric.id" class="list__item">
        <RubricRow
          :rubric="rubric"
          @click="toggleRubricVisibility(rubric)"
          :disabled="rubric.children.length < 1"
          with-arrow
        />
        <div v-if="openedRubricId === rubric.id">
          <RubricRow
            v-for="childRubric in rubric.children"
            :key="childRubric.id"
            :rubric="childRubric"
          />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import { RubricRow } from '@/entities/rubric';
export default {
  components: {
    RubricRow,
  },
  data() {
    return {
      treeIsOpen: false,
      openedRubricId: null,
    };
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    rootCss() {
      return ['tree', {
        'tree_disabled': this.disabled,
      }];
    },
  },
  methods: {
    toggleTreeVisibility() {
      if (!this.disabled) {
        this.treeIsOpen = !this.treeIsOpen;
      }
    },
    toggleRubricVisibility(item = {}) {
      if (this.disabled) {
        return;
      }
      const { id } = item;
      const updatedValue = this.openedRubricId === id ? null : id;
      this.openedRubricId = updatedValue;
    },
  },
};
</script>

<style lang="scss" scoped>
.tree {
  margin: 0 auto;
  max-width: 600px;
  transition: opacity 0.3s;
  &_disabled {
    opacity: 0.5;
    pointer-events: none;
  }
  &__header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px #000 solid;
  }
  &__list {
    max-height: 350px;
    overflow-y: auto;
  }
}
</style>
