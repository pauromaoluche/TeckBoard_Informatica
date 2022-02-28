<template>
  <div>
    <!-- O componente DashboardComponent esta sendo renderizado -->
    <!-- Joga o conteudo pro slot-pages que esta dentro do dashboard -->
    <div slot="slot-pages" class="content-pages">
      <header class="title-pages">
        <p>Inicio</p>
      </header>
      <div>
        <div class="row">
          <div class="col-lg-3 col-md-3 col-sm-6">
            <CardsComponent
              :type="'Clientes'"
              :percentage="'7%'"
              :icon="'fa-users'"
              :qtd="clients.length"
            />
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <CardsComponent
              :type="'Produtos'"
              :percentage="'22%'"
              :icon="'fa-store'"
              :qtd="services.length"
            />
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <CardsComponent
              :type="'Pedidos'"
              :percentage="'15%'"
              :icon="'fa-box'"
              :qtd="services.length"
            />
          </div>
          <div class="col-lg-3 col-md-3 col-sm-6">
            <CardsComponent
              :type="'Relatórios'"
              :percentage="'2'"
              :icon="'fa-chart-bar'"
              :qtd="services.length"
            />
          </div>
        </div>
      </div>

      <div>
        <div class="row">
          <div class="col-12 col-md-6">
            <ListsComponent
              :data="clients"
              description="Clientes"
              :columns="[
                { nameColumn: 'Nome', valueColumn: 'name' },
                { nameColumn: 'E-mail', valueColumn: 'email' },
              ]"
            />
          </div>
          <div class="col-12 col-md-6">
            <ListsComponent
              :data="services"
              description="Produtos"
              :columns="[
                { nameColumn: 'Serviço', valueColumn: 'service' },
                { nameColumn: 'Tipo', valueColumn: 'type' },
              ]"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* dashboard vai estar em todas paginas, então devemos importalo */
import CardsComponent from "../../components/CardsComponent";
import ListsComponent from "../../components/ListsComponent";
const axios = require("axios");

export default {
  name: "IndexComponent",

  data() {
    return {
      clients: [],
      services: [],
      setDatas: [],
    };
  },

  mounted() {
    /* chama um metodo do proprio componente */
    this.getData();
    console.log(this.clients);
  },

  computed: {
    columTable() {
      return this.$store.state.colum;
    },
  },

  methods: {
    async getData() {
      axios.get("dashboard/services").then((response) => {
        this.services = response.data.services;
      });
      axios.get("dashboard/clients").then((response) => {
        this.clients = response.data.clients;
      });
    },
  },
  components: {
    CardsComponent,
    ListsComponent,
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
