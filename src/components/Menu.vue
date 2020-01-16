<template>
    <div class="menu">
        Menu
        <div class="hex-container">
            <div class="hex">

            </div>
            <div class="hex">

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Menu'
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

.hex {
    margin-top: 30px;
    width: 104px;
    height: 60px;
    background-color: #e24f33;
    position: relative;
    display: inline-block;
}
.hex:before {
    content: " ";
    width: 0; height: 0;
    border-bottom: 30px solid #e24f33;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
    position: absolute;
    top: -30px;
    left: 0;
}
.hex:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -30px;
    border-top: 30px solid #e24f33;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
    left: 0;
}


</style>
