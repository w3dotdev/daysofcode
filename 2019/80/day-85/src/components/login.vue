<template>
  <form class="form" @submit.prevent="login(user)">
    <p class="form-group">
      <label class="form-label" for="email">Email</label>
      <input required name="email" v-model="user.email" type="email" class="form-field">
    </p>
    <p class="form-group">
      <label class="form-label" for="password">Senha</label>
      <input name="password" v-model="user.password" type="password" class="form-field">
    </p>

    <p><button type="submit" class="form-submit">Entrar</button></p>

    <p><span>{{ this.$store.state.message }}</span></p>
  </form>
</template>

<script>
export default {
  data(){
    return{
      user: {
        email: '',
        password: ''
      },
    }
  },
  methods:{
    login: function (user) {
      this.$store.dispatch('login', user)
    },
  },
  mounted(){
    if (this.$store.state.Auth != '') {
      this.$router.push('/about');
    }

    localStorage.setItem('registers', JSON.stringify(this.$store.state.registers))
  }
}
</script>

<style>
.form { margin: 0 auto; width: 400px; }
.form-group { margin-bottom: 1rem; }
.form-label { display:block; font-size: 1.4rem; margin-bottom: 0.5rem; }
.form-field { border: none; height: 3.5rem; flex-grow: 1; padding: 0 1rem; width: 100%; }
.form-submit { background: #55127c; border: none; border-radius: 4px; color: #fff; float: right; font-size: 1.4rem; height: 3.5rem; margin-top: 1rem; padding: 0 1rem; }
</style>
