<template>
    <div>
        <b-sidebar id="sidebar-1" title="teckboard informática">
            <div class="d-flex flex-column flex-shrink-0 p-3 text-white bg-dark" style="height: 100%;">
                <ul class="nav nav-pills flex-column mb-auto">
                    <li class="nav-item">
                        <a href="#" class="nav-link active" aria-current="page">Home</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">Dashboard</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">Pedidos</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">Produtos</a>
                    </li>
                    <li>
                        <a href="#" class="nav-link text-white">Clientes</a>
                    </li>
                </ul>
                <hr>
                <div class="dropdown">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="" width="32" height="32" class="rounded-circle me-2">
                        <strong>mdo</strong>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow" aria-labelledby="dropdownUser1">
                        <li><a class="dropdown-item" href="#">New project...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider">
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
            </div>
        </b-sidebar>
    </div>
</template>

<script>
    export default {
        name: 'SideBarMComponent',

    }
</script>

<style lang="scss">

</style>