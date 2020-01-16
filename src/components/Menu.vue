<template>
    <div class="menu">
        Menu
        <div class="hex-container">
            <Hex></Hex>
            <Hex></Hex>
            <!-- <div class="hex">

            </div>
            <div class="hex">

            </div> -->
        </div>
    </div>
</template>

<script>
import Hex from './Hex.vue'

export default {
    name: 'Menu',
    components: {
        Hex
    }
}
</script>

<style>
body {
    background: #000;
}
.menu {
    color: #e24f33;
}

.hex-container {
    width: 100%;
    padding: 25px;
    min-height: 300px;
}


</style>
