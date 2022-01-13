<template>
    <b-navbar class="nav-bar" toggleable="md" type="dark" variant="dark">
        <b-navbar-toggle class="btn" target="sidebar-1"></b-navbar-toggle>
        <b-navbar-brand>Teckboard Ínformática</b-navbar-brand>
        <b-collapse id="nav-text-collapse" is-nav>
            <b-navbar-nav class="d-flex menu-itens">
                <b-nav-item href="#">Quem somos ?</b-nav-item>
                <b-nav-item href="#">Orçamento</b-nav-item>
                <b-nav-item href="#">Contato</b-nav-item>
            </b-navbar-nav>
        </b-collapse>
    </b-navbar>
</template>

<script>
export default {
    name: 'NavBarComponent',

}
</script>

<style lang="scss">
.nav-bar {
    width: 100%;
    padding-left: 30px;
    padding-right: 60px;
    height: 80px;
}

.menu-itens {
    margin-left: auto;
}
</style>