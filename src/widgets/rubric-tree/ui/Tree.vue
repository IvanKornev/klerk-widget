<template>
  <section class="tree">
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
  },
  async created() {
    const list = await this.$api.rubrics.getAll();
    console.log('LIST', list);
  },
  methods: {
    toggleTreeVisibility() {
      this.treeIsOpen = !this.treeIsOpen;
    },
  },
};
</script>

<style lang="scss" scoped>
.tree {
  margin: 0 auto;
  max-width: 1000px;
  &__header {
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
  }
}
</style>
