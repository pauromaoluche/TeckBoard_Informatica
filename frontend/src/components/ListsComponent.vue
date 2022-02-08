<template>
  <div class="Lists card">
    <div class="top">
      <p><strong>{{description}}  <b-badge pill variant="primary">{{ data.length }}</b-badge></strong></p>
    </div>

    <div class="content">
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">{{columns[0]}}</th>
            <th scope="col">{{columns[1]}}</th>
            <th scope="col">{{columns[2]}}</th>
            <th scope="col">{{columns[3]}}</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in data" :key="user.id">
            <th scope="row">{{ user.id }}</th>
            <td><p class="users">{{ user.name }}</p></td>
            <td><p class="users">{{ user.email }}</p></td>
            <td><p class="users">{{ user.address['city']}}</p></td>
            <td><p class="users">Rua: {{ user.address['street']}}</p></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListsComponent",

  props:{
    data: Array,
    description: String,
    columns: {},
  }
};
</script>

<style lang="scss" scoped>
.Lists {
  width: 100%;
  margin-top: 30px;
  padding: 10px;
  border-radius: 10px;

  .users{
    font-size: 13px;
  }
}
</style>
