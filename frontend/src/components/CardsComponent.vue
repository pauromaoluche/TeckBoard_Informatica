<template>
    <div class="card-component">
        <div class="top">
            <h3>{{ type }}</h3>
            <p class="percentage"><i class="fa fa-arrow-up "></i>{{ percentage }}</p>
        </div>
        <div class="footer">
            <i :class="['fa ico', icon]"></i>
            <p class="qtd">{{ qtd }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'CardsComponent',
    props: {
        type: String,
        percentage: String,
        icon: String,
        qtd: String,
    }

}
</script>

<style lang="scss" scoped>
.card-component{
    display: flex;
    /* diz que o display é flex, mas por coluna */
    flex-direction: column;
    background-color: white;

    padding: 15px;
    border-radius: 15px;
    color: black;

    .top, .footer {
        /* deixa os itens da div top com display flex, assim fica um na frente do outro */
        display: flex;
        /* da um espaço total entre os elementos */
        justify-content: space-between;
    }

    .top {
        .percentage{
            color: #56b761;
        }
    }

    .footer{
        .ico{
            font-size: 35px;
        }

        .qtd{
            font-size: 25px;
            margin: 0px;
        }
    }
}
</style>