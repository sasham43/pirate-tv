<template>
    <div class="menu">
        H.I.V.E. TV
        <div class="hex-container">
            <Hex icon="fa-tv" label="Currently Playing"></Hex>
            <Hex icon="fa-info" label="About"></Hex>
            <Hex icon="fa-random" label="Shuffle"></Hex>
            <Hex icon="fa-list" label="All Channels"></Hex>
            <div class="even-row">
                <Hex icon="fa-check-double" label="Test Pattern"></Hex>
                <Hex icon="fa-power-off" label="Disable"></Hex>
                <Hex icon="" label=""></Hex>
            </div>
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
.even-row {
    display:contents;
}
.hex-container {
    width: 500px;
    margin: 0 auto;
    min-height: 300px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    align-items: center;
    justify-items: center;
}


</style>
