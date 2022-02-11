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
                <ListsComponent :data="clients" description="Clientes" :columns="['Nome', 'E-mail', 'Cidade', 'Endereço']" />
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

  methods: {
    async getUsers() {
      const response = await axios.get("dashboard/clients");

      if (response.status == 200) {
        console.log(response.data);
        this.clients = response.data.clients;
      } else {
        console.error("Erro ao consultar a API");
      }

      console.log(response);
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
