<template>
    <div class="d-flex flex-column flex-shrink-0 p-3 text-white side-bar h-100">
        <div class="top">
            <div class="avatar">
                <span><i class="fas fa-user"></i></span>
            </div>
            <div class="info">
                <p class="name">Pauluci</p>
                <p class="status">Online</p>
            </div>
        </div>
        <ul class="nav nav-pills flex-column mb-auto mt-3">
            <li>
                <router-link class="nav-link active text-white" :to="{name: 'home'}"><i class="fas fa-home"></i> Home</router-link>
            </li>
            <li>
                <router-link class="nav-link text-white" :to="{name: 'orders'}"><i class="fa fa-box"></i> Pedidos</router-link>
            </li>
            <li>
                <router-link class="nav-link text-white" :to="{name: 'products'}"><i class="fa fa-store"></i> Produtos</router-link>
            </li>
            <li>
                <router-link class="nav-link text-white" :to="{name: 'clients'}"><i class="fa fa-users"></i> Clientes</router-link>
            </li>
            <li>
                <router-link class="nav-link text-white" :to="{name: 'reports'}"><i class="fa fa-chart-bar"></i> Relatórios</router-link>
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
</template>

<script>
export default {
    name: 'SideBarMComponent',

}
</script>

<style lang="scss">
.side-bar {
    background-color: rgba(23, 27, 31, 0.8);
    .nav-link {
        padding-left: 10px;
    }
    .top {
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 25px 30px 20px 1px;
        .avatar {
            margin-right: 15px;
            span {
                display: block;
                width: 50px;
                height: 50px;
                border-radius: 50%;
                background-color: white;
                color: #494949;
                display: flex;
                justify-content: center;
                align-items: center;
                font-size: 30px;
            }
        }
        .info {
            .name,
            .status {
                margin: 0px;
            }
            .name {
                font-size: 20px;
            }
            .status {
                font-size: 10px;
            }
        }
    }
}
</style>