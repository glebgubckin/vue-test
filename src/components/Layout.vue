<template>
  <header class="header">
    <div class="header__wrapper">
      <Logo class="logo" />
      <nav class="nav" role="menu">
        <RouterLink role="menuitem" to="/" class="link">Форма</RouterLink>
        <RouterLink role="menuitem" to="/preview" class="link">Превью</RouterLink>
      </nav>
    </div>
  </header>
  <div class="layout">
    <RouterView />
  </div>
  <footer class="footer">
    <span class="footer__info">all rights reserved</span>
  </footer>
</template>

<script lang="ts" setup>
import Logo from '@/assets/logo.svg?sfc'
</script>

<style lang="scss" scoped>
.layout {
  width: 100%;
  flex: 1;
  display: flex;
  justify-content: center;
}

.header {
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: center;
  border-bottom: 1px #e8e8e8 solid;

  &__wrapper {
    width: 100%;
    max-width: 1264px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.logo {
  width: 94px;
  height: 30px;
}

.nav {
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
  column-gap: 24px;
}

.link {
  font-size: 16px;
  color: rgba(17, 17, 17, 0.48);
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.footer {
  width: 100%;
  height: 76px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fafafa;

  &__info {
    font-size: 16px;
  }
}

@media screen and (max-width: 1330px) {
  .header__wrapper {
    padding: 0 20px;
  }
}
</style>
