<template>
  <div class="Lists card">
    <div class="top">
      <p>
        <strong
          >{{ description }}
          <b-badge class="countValue" pill>{{ data.length }}</b-badge></strong
        >
      </p>
    </div>

    <div class="content">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th v-for="(colum, index) in columns" v-bind:key="index" scope="col">
              {{ colum }}
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.id">
            <th scope="row">
              <p>{{ item.id }}</p>
            </th>
            <td scope="row">{{ item.name }}</td>
            <td>
              <p class="users">
                {{ description == "Clientes" ? item.email : item.value }}
              </p>
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

  mounted() {
    this.validClients();
  },

  methods: {
      async validClients(){
    if(this.$route.name == 'clients'){
        alert('rota cliente');
    }
  },
},

  props: {
    data: Array,
    description: String,
    columns: {},
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
}
</style>
