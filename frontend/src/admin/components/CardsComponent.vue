<template>
  <div class="card-component">
    <div class="title">
      <div class="tile-heading">
        <h2>{{ type }}</h2>
        <span class="pull-right">
          <i :class="['fa ico', icon]"></i>
          {{ percentage }}</span
        >
      </div>
      <div class="tile-body">
        <i :class="['cardIcon fa ico', icon]"></i>
        <h2 class="pull-right">{{ qtd }}</h2>
      </div>
      <div class="tile-footer">
        <a
          href="https://dajuju.com.br/admin/index.php?route=sale/order&amp;token=FhH7QMAKtRkAMle0CZp6DVwAjCwNIf9o"
          >Ver mais...</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardsComponent",
  props: {
    type: String,
    percentage: String,
    icon: String,
    qtd: Number,
  },
};
</script>

<style lang="scss">
.card-component {
  display: flex !important;
  /* diz que o display é flex, mas por coluna */
  flex-direction: column;
  background-color: white;
  border-radius: 15px;
  color: black;
  .title {
    margin-bottom: 15px;
    border-radius: 3px;
    background-color: #279fe0;
    color: #ffffff;
    .tile-heading {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 5px 8px;
      text-transform: uppercase;
      background-color: #1e91cf;
      color: #fff;
      h2 {
        font-size: 15px;
        margin: 0;
      }
    }
    .tile-body {
      padding: 15px;
      color: #ffffff;
      line-height: 48px;
      display: flex;
      justify-content: space-between;
      .cardIcon {
        font-size: 50px;
        opacity: 0.3;
        transition: all 1s;
      }
      h2 {
        font-size: 30px;
      }
    }
    .tile-footer {
      padding: 5px 8px;
      background-color: #3da9e3;
      a {
        color: #ffffff;
      }
    }
  }
}
</style>