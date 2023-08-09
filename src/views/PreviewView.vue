<template>
  <div class="wrapper">
    <p class="title">Персональные данные</p>
    <p class="user">{{ user.name }}, {{ user.age }} {{ plural(user.age) }}</p>
    <div class="children">
      <p class="title">Дети</p>
      <div v-for="child in children" :key="child.id" class="child">
        {{ child.name }}, {{ child.age }} {{ plural(child.age) }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { useUserStore } from '@/stores/userStore'

export default {
  setup() {
    const store = useUserStore()

    function plural(age: number): string {
      const cases = [2, 0, 1, 1, 1, 2]
      const titles = ['год', 'года', 'лет']
      return titles[age % 100 > 4 && age % 100 < 20 ? 2 : cases[age % 10 < 5 ? age % 10 : 5]]
    }

    return {
      user: store.user,
      children: store.children,
      plural
    }
  }
}
</script>

<style lang="scss" scoped>
.wrapper {
  margin: 30px 0;
  width: 100%;
  max-width: 616px;
}

.user {
  margin-top: 30px;
  font-size: 20px;
  font-weight: 700;
}

.children {
  margin-top: 60px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  row-gap: 20px;
}

.child {
  padding: 15px 30px;
  font-size: 20px;
  font-weight: 700;
  border-radius: 5px;
  background-color: #f1f1f1;
}

@media screen and (max-width: 660px) {
  .wrapper {
    padding: 0 20px;
  }
}
</style>
