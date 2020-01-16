<template>
    <div class="hex">
        <i v-if="icon" class="fas" :class="icon"></i>
        <div class="hex-label">
            {{label}}
        </div>
    </div>
</template>

<script>
export default {
    name: 'Hex',
    props: {
        icon: String,
        label: String
    }
}
</script>

<style scoped>
.hex:hover .fas {
    opacity: 0;
}
.hex:hover .hex-label {
    opacity: 1;
}
.hex-label {
    opacity: 0;
    color: #000;
}
.fas {
    color: #000;
    position: absolute;
}
.hex {
    margin-top: 30px;
    width: 104px;
    height: 60px;
    background-color: #ec6e2f;
    position: relative;
    display: inline-block;
    margin-left: 4px;
    
    display: grid;
        align-items: center;
        justify-items: center;

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
