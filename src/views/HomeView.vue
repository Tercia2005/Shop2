<template>
   <div class="home-container">
     <div class="card">
       
       <h1 v-if="login">Welcome Back!</h1>
       <h1 v-if="!login">Welcome User!</h1>  
        <a href="/login"><button @click="login = true">Log In</button></a>
        <a href="/login"><button @click="login = false">Sign Up</button></a>
       
      </div>
      
        <img :src="imageUrl" alt="pic">
  
    </div>
    </template>

<script>

export default {
  data() {
    return {
      imageUrl: "https://media.istockphoto.com/id/520536109/photo/contemporary-elegant-luxury-living-room.jpg?s=612x612&w=0&k=20&c=B2qVuu2PPjkw_CebnOicutAJdSa9K_z5IB4TnZWOTY4=",
      login:true,
    }
  },
  
}
</script>

<style>

.home-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem;
  box-sizing: border-box;
}

.card {
  background-color: beige;
  padding: 1rem;
  border-radius: 10px;
  margin-bottom: 1rem;
}


img {
  max-width: 600px;
  width: 100%;
  height: auto;
  display: block;
  margin: 2rem auto;
  border-radius: 12px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  opacity: 0;
  animation: fadeIn 1.2s ease forwards;
}


@keyframes fadeIn {
  to {
    opacity: 1;
  }
}


img {
  width: 100%;
  max-width: 100%;
  height: auto;
  display: block;
  margin-top: 1rem;
  border-radius: 12px;
  object-fit: cover;
}

h1 {
  font-size: 2rem;
  text-align: center;
  padding: 0.5rem 0;
}


button {
  padding: 0.5rem 1rem;
  margin: 0.5rem;
  font-size: 1rem;
  cursor: pointer;
}


@media (max-width: 600px) {
  .home-container {
    padding: 0.5rem;
  }

  h1 {
    font-size: 1.5rem;
  }

  button {
    display: block;
    width: 100%;
    margin: 0.5rem 0;
  }
}
</style>
