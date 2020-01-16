<template>
    <div class="hex">
        <i class="fas fa-camera"></i>
    </div>
</template>

<script>

</script>

<style scoped>

.fas {
    color: black;
}
.hex {
    margin-top: 30px;
    width: 104px;
    height: 60px;
    background-color: #ec6e2f;
    position: relative;
    display: inline-block;
    margin-left: 4px;
}
.hex:before {
    content: " ";
    width: 0; height: 0;
    border-bottom: 30px solid #ec6e2f;
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
    border-top: 30px solid #ec6e2f;
    border-left: 52px solid transparent;
    border-right: 52px solid transparent;
    left: 0;
}
</style>
