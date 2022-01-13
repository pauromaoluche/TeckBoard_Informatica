<template>
    <div class="main">
    
        <div class="Banner-login">
            <div class="content-login">
                <header>
                    <h1>Login</h1>
                </header>
                <div class="card card-login">
                    <div class="card-body">
                        <form>
                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-12">
                                        <input type="email" class="form-control" id="email-login" aria-describedby="emailHelp" placeholder="E-mail de login">
                                    </div>
                                    <div class="col-lg-12">
                                        <input type="password" class="form-control" id="passw-login" placeholder="Senha">
                                    </div>
                                    <div class="col-lg-12">
                                        <span class="help-block">
                                                        <a href="#">Esqueceu sua senha?</a>
                                                    </span>
                                    </div>
                                    <div class="text-right">
                                        <button type="submit" class="btn btn-primary btnRegister" @click.prevent="login">Logar</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'AdminComponent',

    data() {
        return {

        }
    },
    methods: {
        login() {
            alert('Clicou em logar');
        }
    }

}
</script>

<style lang="scss" src="./style.scss" scoped/>
