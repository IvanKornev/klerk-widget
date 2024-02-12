<template>
  <section :class="rootCss">
    <div class="tree__header" @click="toggleTreeVisibility">
      <h3 class="header__subtitle">Выделите рубрики</h3>
      <div>
        <v-icon icon="keyboard_arrow_down" />
      </div>
    </div>
    <div v-if="treeIsOpen && list.length > 0" class="tree__list">
      <ul v-for="(item, index) in list" :key="index" class="list__item">
        <li class="item__row">
          <div class="row__cell">
            <checkbox />
            <p class="cell__text">
              {{ item.title }}
            </p>
          </div>
          <div>
            <v-icon icon="keyboard_arrow_down" />
          </div>
        </li>
        <div v-if="false">
          Подсписок
        </div>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      treeIsOpen: false,
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
  },
};
</script>

<style lang="scss" scoped>
.tree {
  margin: 0 auto;
  max-width: 1000px;
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
  }
}
</style>
