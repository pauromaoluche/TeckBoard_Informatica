<template>
  <div>
    <!-- O componente DashboardComponent esta sendo renderizado -->
    <DashboardComponent>
      <!-- Joga o conteudo pro slot-pages que esta dentro do dashboard -->

      <div slot="slot-pages" class="content-pages">
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
                  :columns="
                    [{nameColumn: 'Nome', valueColumn: 'name'}, {nameColumn: 'E-mail', valueColumn: 'email'},
                    {nameColumn: 'Telefone', valueColumn: 'phone'}, {nameColumn: 'Estado', valueColumn: 'state'},
                    {nameColumn: 'Cidade', valueColumn: 'city'}, {nameColumn: 'Rua', valueColumn: 'street'},
                    {nameColumn: 'Numero', valueColumn: 'number'} ]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardComponent>
  </div>
</template>

<script>
/* dashboard vai estar em todas paginas, então devemos importalo */
import DashboardComponent from "../Dashboard/DashboardComponent";
import ListsComponent from "../../components/ListsComponent";
const axios = require("axios");

export default {
  name: "ClientsComponent",
  data() {
    return {
      clients: [],
      breadcrumb: [
        {
          text: "Home",
          to: { name: "home" },
        },
        {
          text: "Clientes",
          to: { name: "products" },
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
        this.$store.commit("incrementsColum");
      });
    },
  },

  components: {
    DashboardComponent,
    ListsComponent,
  },
};
</script>

<style lang="scss" scoped>
.main {
  background: #e9ecef;
}
</style>
