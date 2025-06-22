<template>
    <div class="card">
        <img :src="item.imageUrl" alt="">
        <h2>R {{ item.price }}</h2>
        <p>{{ item.description }}</p>
        <button type="button" @click="remove">Add to Cart</button>
    </div>
</template>
<script>
export default {
    props: [
        'item'
    ]
}
</script>
<style scoped>
    img{
        width: 100%;
        height: 200px;
        object-fit: cover;
    }
</style> (to display product image)






