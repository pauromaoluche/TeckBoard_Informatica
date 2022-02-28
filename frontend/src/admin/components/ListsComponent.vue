<template>
  <div class="Lists card">
    <div class="top d-flex align-items-center pb-2">
      <p>
        <strong
          >{{ description }}
          <b-badge class="countValue" pill>{{ data.length }}</b-badge></strong
        >
      </p>
      <router-link
        type="button"
        class="btn btn-primary"
        :to="{ name: 'addclients' }"
        >Adicionar usuario</router-link
      >
    </div>

    <div class="content">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th
              v-for="(colum, index) in columns"
              v-bind:key="index"
              scope="col"
            >
              {{ colum.nameColumn }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <td scope="row">{{ item.id }}</td>
            <td
              scope="row"
              v-for="(colum, index) in columns"
              v-bind:key="index"
            >
              {{ item[colum.valueColumn] }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListsComponent",

  computed: {
    columTable() {
      return this.$store.state.colum;
    },
  },

  props: {
    data: Array,
    description: String,
    columns: Array,
  },
};
</script>

<style lang="scss" scoped>
.Lists {
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;

  .users {
    font-size: 13px;
  }

  .countValue {
    background: #007bff;
    margin-left: 10px;
  }

  .top {
    justify-content: space-between;
  }

  p {
    margin: 0;
  }
}
</style>
