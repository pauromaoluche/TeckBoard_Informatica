<template>
    <div class="main">
        <div class="sidebar">
            <SideBarComponent/>
        </div>
        <div class="content-right">
            <div>
                <NavBarComponent/>
            </div>
            <div class="pages">
                <slot name="slot-pages"></slot>
            </div>
        </div>
    
        <SideBarMComponent></SideBarMComponent>
    </div>
</template>



<script>
import SideBarMComponent from "./components/SideBarMComponent";
import SideBarComponent from "./components/SideBarComponent";
import NavBarComponent from "./components/NavBarComponent";

export default {
    name: 'DashboardComponent',
    /*  tem que registrar os components*/
    components: {
        SideBarMComponent,
        SideBarComponent,
        NavBarComponent,
    }

}
</script>

<style lang="scss" src="./style.scss" scoped/>
