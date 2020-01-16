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
/* .even-row .hex:first-child {
    margin-left:85px;
    grid-column: span 1 / -1;
}
.even-row .hex:nth-child(2) {
    margin-left:85px;
    grid-column: span 2 / -1;
} */
.hex-container {
    /* width: 100%; */
    min-height: 300px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    /* grid-template-columns: repeat(10, 1fr); */
    align-items: center;
    justify-items: center;

    padding-left: 25%;
    padding-right: 25%;
}


</style>
