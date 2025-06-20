<template>
  <div class="input-container">
    <span>Email: </span>
    <input
      v-model="email"
      type="text"
      placeholder="Enter email address"
    />
    <br /><br />

    <span>Password: </span>
    <input
      v-model="password"
      type="password"
      placeholder="Enter password"
    />
    <br /><br />

    <button @click="submitControl">Submit</button>

    
    <p v-if="successMessage" style="color: green">{{ successMessage }}</p>
    <p v-if="errorMessage" style="color: red">{{ errorMessage }}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: '',
      password: '',
      successMessage: '',
      errorMessage: ''
    };
  },
  methods: {
  submitControl(event) {
    event.preventDefault();

    
    if (!this.email || !this.password) {
      this.successMessage = '';
      this.errorMessage = 'Please fill in both fields.';
      return;
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(this.email)) {
      this.successMessage = '';
      this.errorMessage = 'Please enter a valid email address.';
      return;
    }

    this.errorMessage = '';
    this.successMessage = 'Login successful! Enjoy Shopping!';

    setTimeout(() => {
      this.$router.push('/catalogue'); 
    }, 1000); 
  }
}

};
</script>

<style scoped>
.input-container {
  max-width: 400px;
  margin: 2rem auto;
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 12px;
  text-align: left;
}

input {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.25rem;
  margin-bottom: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
}
button {
  padding: 0.5rem 1rem;
  border: none;
  background-color: #4CAF50;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
button:hover {
  background-color: black;
}
</style>
