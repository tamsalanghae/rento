<template>
  <div>
    <vue-horizontal-list :items="items" :options="options">
      <template v-slot:default="{ item }">
        <div v-on:click="changePage(item.id)">
          <div class="image-container">
            <img :src="item.image" />
          </div>

          <div class="subtitle">TIÊU ĐỀ</div>

          <h3 v-if="item.title != null">{{ item.title }}</h3>
          <p v-if="item.title != null">{{ item.content }}</p>
        </div>
      </template>
    </vue-horizontal-list>
  </div>
</template>

<script>
import VueHorizontalList from "vue-horizontal-list";
export default {
  name: "carousel",
  components: {
    VueHorizontalList,
  },
  data() {
    return {
      options: {
        responsive: [
          { end: 576, size: 1 },
          { start: 576, end: 768, size: 2 },
          { size: 3 },
        ],
      },
    };
  },
  methods: {
    changePage(index) {
      this.$router.push({
        name: "RentoDetail",
        params: { id: index },
      });
    },
  },
  props: {
    items: Array,
  },
};
</script>

<style scoped>
p {
  margin-top: 4px;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  word-break: break-word;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
}
.subtitle {
  margin-top: 12px;
  font-size: 14px;
  font-weight: 500;
  margin-bottom: 6px;
}
.image-container {
  border-radius: 3px;
  overflow: hidden;
  position: relative;
  width: 100%;
  padding-top: 60%;
}
img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>