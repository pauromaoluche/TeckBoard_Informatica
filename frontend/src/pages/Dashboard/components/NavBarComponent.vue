<template>
    <b-navbar class="nav-bar" toggleable="md" type="dark">
        <b-navbar-toggle class="btn" target="sidebar-1"></b-navbar-toggle>
        <b-navbar-brand>
            <h1 class="logo"><i class="fas fa-microchip"></i> Teckboard informática</h1>
        </b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="d-flex menu-itens">
                <b-nav-item href="#">
                    <p>Quem somos ?</p>
                </b-nav-item>
                <b-nav-item href="#">
                    <p>Orçamento</p>
                </b-nav-item>
                <b-nav-item href="#">
                    <p>contato <i class="fas fa-phone-alt"></i></p>
                </b-nav-item>
                <b-nav-item href="#">
                    <p @click.prevent="logout" class="logout" > Sair <i class="fas fa-sign-in-alt"></i></p>
                </b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'NavBarComponent',

    methods:{
        logout(){
            this.$router.push({name: 'admin'})
        }
    }

}
</script>

<style lang="scss">
.nav-bar {
    width: 100%;
    padding-left: 30px;
    padding-right: 60px;
    height: 80px;
        background-color: rgba(23, 27, 31, 0.8);
    .menu-itens {
        margin-left: auto;
    }
    .logo {
        font-size: 25px;
    }

    p{
        color: white;
        font-size: 20p;
    }
}


</style>