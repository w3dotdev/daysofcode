<template>
  <div class="container">
    <header class="header">
      <h1>Nerd Calistênico --- <span @click="logout"><router-link v-if="this.$store.state.Auth != ''"  to="/" active-class exact class="link">Sair</router-link></span></h1>
    </header>

    <div class="content">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      auth:this.$store.state.Auth
    }
  },
  methods:{
   logout:function(){
     this.$router.push('/');
     localStorage.removeItem('user');
     localStorage.removeItem('authUser');
     this.$store.state.authUser = '';
     this.$store.state.Auth ='';
   }
},
  name: 'app',
  components: {}
}
</script>

<style>
  .header { background: #4c0a79; color: #fff; margin-bottom: 20px; padding: 10px; }
  .link { color: #fff7af;  text-decoration: none; }
</style>
