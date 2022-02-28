<template>
  <div class="main">
    <div class="Banner-login">
      <div class="content-login">
        <header>
          <h1>Login</h1>
        </header>
        <div class="card card-login">
          <div class="card-body">
            <form @submit.stop.prevent="login">
              <div class="container">
                <div class="row">
                  <div class="col-lg-12">
                    <input
                      v-model="email"
                      type="email"
                      class="form-control"
                      id="email-login"
                      aria-describedby="emailHelp"
                      placeholder="E-mail de login"
                      autocomplete="on"
                    />
                  </div>
                  <div class="col-lg-12">
                    <input
                      v-model="password"
                      type="password"
                      class="form-control"
                      id="passw-login"
                      placeholder="Senha"
                      autocomplete="off"
                    />
                  </div>
                  <div class="col-lg-12">
                    <span class="help-block">
                      <a href="#">Esqueceu sua senha?</a>
                    </span>
                  </div>
                  <div class="text-right">
                    <button type="submit" class="btn btn-primary btnRegister">
                      Logar
                    </button>
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
const axios = require("axios");
import Cookies from "js-cookie";


export default {
  name: "LoginAdminComponent",

  data() {
    return {
      email: null,
      password: null,
    };
  },
  methods: {
    async login() {
      axios
        .post("auth/login", {
          email: this.email,
          password: this.password,
        })
        .then((response) => response.data)
        .then((res) => {
          Cookies.set("_admin_access_token", res.access_token);
         this.$router.push({ name: 'admin' });
        });
    },
  },
};
</script>

<style lang="scss" src="./style.scss" scoped />
