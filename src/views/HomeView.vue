<template>
  <div class="wrapper">
    <form class="user">
      <p class="title">Персональные данные</p>
      <div class="user__inputs">
        <div class="user__input">
          <label>Имя</label>
          <input aria-label="Имя" type="text" v-model="username" maxlength="30" />
        </div>
        <div class="user__input">
          <label>Возраст</label>
          <input aria-label="Возраст" type="number" v-model="userAge" />
        </div>
      </div>
    </form>
    <form class="children">
      <div class="children__header">
        <p class="title">Дети (макс. 5)</p>
        <button
          v-if="children.length < 5"
          class="add-btn"
          aria-label=" Добавить ребенка"
          @click.prevent="addChild"
        >
          <Add />
          Добавить ребенка
        </button>
      </div>
      <div class="children__list">
        <div v-for="child in children" :key="child.id" class="child">
          <div class="child__input">
            <label>Имя</label>
            <input aria-label="Имя ребенка" type="text" v-model="child.name" maxlength="30" />
          </div>
          <div class="child__input">
            <label>Возраст</label>
            <input type="number" aria-label="Возраст ребенка" v-model="child.age" />
          </div>
          <button class="delete-btn" @click.prevent="deteleChild(child.id)">Удалить</button>
        </div>
      </div>
      <button aria-label="Сохранить" class="save-btn" @click.prevent="save">Сохранить</button>
    </form>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
import { useUserStore } from '@/stores/userStore'
import type { IChild } from '@/stores/userStore'
import Add from '@/assets/plus.svg?sfc'

export default {
  components: {
    Add
  },
  setup() {
    const store = useUserStore()
    const username = ref(store.user.name)
    const userAge = ref<number>(store.user.age)
    const children = ref<IChild[]>(store.children)

    function save() {
      store.user.name = username.value
      store.user.age = userAge.value || 0
      store.children = children.value
    }

    function addChild() {
      if (children.value.length < 5) {
        children.value.push({ id: Math.random(), name: '', age: 0 })
      }
    }

    function deteleChild(id: number) {
      children.value = children.value.filter((child) => child.id !== id)
    }

    return {
      username,
      userAge,
      children,
      save,
      addChild,
      deteleChild
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
  width: 100%;
  display: flex;
  flex-direction: column;

  &__inputs {
    margin-top: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    row-gap: 10px;
  }

  &__input {
    width: 100%;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    border: 1px #f1f1f1 solid;
    border-radius: 4px;

    & > label {
      font-size: 14px;
      color: rgba(17, 17, 17, 48);
    }

    & > input {
      padding: 4px 0;
      border: none;
      font-size: 16px;
    }
  }
}

.children {
  margin-top: 44px;
  width: 100%;

  &__header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__list {
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: stretch;
    row-gap: 10px;
  }
}

.child {
  width: 100%;
  display: flex;
  justify-content: space-between;
  column-gap: 18px;

  &__input {
    width: 100%;
    padding: 8px 16px;
    display: flex;
    flex-direction: column;
    row-gap: 4px;
    border: 1px #f1f1f1 solid;
    border-radius: 4px;

    & > label {
      font-size: 14px;
      color: rgba(17, 17, 17, 48);
    }

    & > input {
      padding: 4px 0;
      border: none;
      font-size: 16px;
    }
  }
}

.add-btn {
  padding: 15px 30px;
  color: #01a7fd;
  display: flex;
  align-items: center;
  column-gap: 10px;
  font-size: 20px;
  background: none;
  border: 2px #01a7fd solid;
  border-radius: 50px;
}

.save-btn {
  margin-top: 30px;
  padding: 15px 30px;
  color: #fff;
  font-size: 20px;
  background: #01a7fd;
  border: none;
  border-radius: 50px;
  transition: 0.1s all linear;

  &:hover {
    background: #72cffd;
  }
}

.delete-btn {
  color: #01a7fd;
  background: none;
  border: none;
  font-size: 20px;
}

@media screen and (max-width: 660px) {
  .wrapper {
    padding: 0 20px;
  }
}

@media screen and (max-width: 480px) {
  .children__header {
    flex-direction: column;
    row-gap: 20px;
  }
}

@media screen and (max-width: 620px) {
  .children__list {
    align-items: center;
    row-gap: 25px;
  }

  .child {
    flex-direction: column;
    row-gap: 10px;
  }
}
</style>
