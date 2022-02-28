<template>
  <section class="content-admin">
    <NavBarAdminComponent />
    <div class="container-fluid">
      <div class="row">
        <SideBarAdminComponent />

        <main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">
          <div
            class="
              justify-content-between
              flex-wrap flex-md-nowrap
              align-items-center
              pt-3
              pb-2
              mb-3
              border-bottom
            "
          >
            <div class="main">
              <div class="pages">
                <slot name="slot-pages"></slot>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
    <div></div>

  </section>
</template>

<script>
import SideBarAdminComponent from "./components/SideBarAdminComponent";
import NavBarAdminComponent from "./components/NavBarAdminComponent";

export default {
  name: "DashboardAdminComponent",
  /*  tem que registrar os components*/
  components: {
    SideBarAdminComponent,
    NavBarAdminComponent,
  },
};
</script>

<style lang="scss">
.content-admin {
  height: 100vh;
    @import "./style.scss";
  @import "./admin.scss";



}
</style>
