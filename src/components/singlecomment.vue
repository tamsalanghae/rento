<template>
  <div class="comment">
    <div class="avatar">
      <img :src="comment.avatar" />
    </div>
    <div class="text">
      <a class="username"> {{ comment.user }}</a>
      <span>{{ comment.text }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "singleComment",
  props: ["comment"],
};
</script>

<style scoped>
/* Single-comment component */
.comment {
  display: flex;
  padding: 10px;
  margin-bottom: 10px;
  align-items: center;
  background-color: #f2f2f2;
}
.comment .avatar {
  align-self: flex-start;
}
.comment .avatar > img {
  width: 40px;
  height: 40px;
  border-radius: 100%;
  align-self: start;
}
.comment .text {
  text-align: left;
  margin-left: 5px;
}
.comment .text span {
  margin-left: 5px;
}
.comment .text .username {
  font-weight: bold;
  color: #333;
}
</style>