<template>
  <div>
    <!-- O componente DashboardComponent esta sendo renderizado -->
    <DashboardComponent>
      <!-- Joga o conteudo pro slot-pages que esta dentro do dashboard -->
      <div slot="slot-pages" class="content-pages">
        <header class="title-pages">
          <p>Inicio</p>
        </header>
        <div>
          <div class="row">
            <div class="col-12 col-sm-3">
              <CardsComponent
                :type="'Clientes'"
                :percentage="'7%'"
                :icon="'fa-users'"
                :qtd="'150'"
              />
            </div>
            <div class="col-12 col-sm-3">
              <CardsComponent
                :type="'Produtos'"
                :percentage="'22%'"
                :icon="'fa-store'"
                :qtd="'1350'"
              />
            </div>
            <div class="col-12 col-sm-3">
              <CardsComponent
                :type="'Pedidos'"
                :percentage="'15%'"
                :icon="'fa-box'"
                :qtd="'78'"
              />
            </div>
            <div class="col-12 col-sm-3">
              <CardsComponent
                :type="'Relatórios'"
                :percentage="'2'"
                :icon="'fa-chart-bar'"
                :qtd="'23'"
              />
            </div>
          </div>
        </div>

        <div>
          <div class="row">
            <div class="col-12 col-md-6">
              <ListsComponent :data="users" description="Clientes" :columns="['Nome', 'E-mail', 'Cidade', 'Endereço']"/>
            </div>
            <div class="col-12 col-md-6">
              <ListsComponent :data="users" description="Produtos" :columns="['Remetente', 'Nome', 'Status', 'Data' ]" />
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
import CardsComponent from "../../components/CardsComponent";
import ListsComponent from "../../components/ListsComponent";
const axios = require("axios");

export default {
  name: "HomeComponent",

  data() {
    return {
      users: [],
    };
  },

  mounted() {
    /* chama um metodo do proprio componente */
    this.getUsers();
  },

  methods: {
    async getUsers() {
      const response = await axios.get("https://jsonplaceholder.typicode.com/users");

      if (response.status == 200) {
        console.log(response.data);
        this.users = response.data;
      } else {
        console.error("Erro ao consultar a API");
      }

      console.log(response);
    },
  },
  components: {
    DashboardComponent,
    CardsComponent,
    ListsComponent,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
