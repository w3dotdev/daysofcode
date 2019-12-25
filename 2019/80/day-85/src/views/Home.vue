<template>
  <div>
    <Login />
  </div>
</template>

<script>
// @ is an alias to /src
import Login from "@/components/login.vue";

export default {
  name: "home",
  components: {
    Login
  }
};
</script>
