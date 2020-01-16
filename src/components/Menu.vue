<template>
    <div class="menu">
        Menu
        <div class="hex-container">
            <Hex icon="fa-tv" label="Currently Playing"></Hex>
            <Hex icon="fa-info" label="About"></Hex>
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
    /* padding: 25px; */
    min-height: 300px;

    display: grid;
    grid-template-columns: repeat(10, 1fr);
    align-items: center;
    justify-items: center;
}


</style>
