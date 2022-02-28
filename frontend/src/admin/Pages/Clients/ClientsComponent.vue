<template>
  <div slot="slot-pages" class="content-pages">
    <div v-if="$route.name == 'clients'">
      <header class="title-pages">
        <b-breadcrumb class="breadcrumb" :items="breadcrumb"></b-breadcrumb>
        <hr />
      </header>
      <div>
        <div class="row">
          <div class="col-12 col-md-12">
            <div>
              <ListsComponent
                :data="clients"
                description="Clientes"
                :columns="[
                  { nameColumn: 'Nome', valueColumn: 'name' },
                  { nameColumn: 'E-mail', valueColumn: 'email' },
                  { nameColumn: 'Telefone', valueColumn: 'phone' },
                  { nameColumn: 'Estado', valueColumn: 'state' },
                  { nameColumn: 'Cidade', valueColumn: 'city' },
                  { nameColumn: 'Rua', valueColumn: 'street' },
                  { nameColumn: 'Numero', valueColumn: 'number' },
                ]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
/* dashboard vai estar em todas paginas, então devemos importalo */
import ListsComponent from "../../components/ListsComponent";
const axios = require("axios");

export default {
  name: "ClientsComponent",
  data() {
    return {
      clients: [],
      breadcrumb: [
        {
          text: "Admin",
          to: { name: "admin" },
        },
        {
          text: "Clientes",
          to: { name: "addclients" },
        },
      ],
    };
  },

  mounted() {
    /* chama um metodo do proprio componente */
    this.getUsers();
  },

  computed: {
    columTable() {
      return this.$store.state.colum;
    },
  },
  methods: {
    async getUsers() {
      axios.get("dashboard/clients").then((response) => {
        this.clients = response.data.clients;
      });
    },
  },
  components: {
    ListsComponent,
  },
};
</script>

<style lang="scss" scoped></style>
