<template>
    <div class="outer-hex">
        <div class="hex">
            <div class="hex-content">
                <i v-if="icon" class="fas" :class="icon"></i>
                <div class="hex-label">
                    {{label}}
                </div>
            </div>
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

.outer-hex:hover {
    background-color: #28afb0;
}
.outer-hex:hover:before {
    border-bottom-color: #28afb0;
}
.outer-hex:hover:after {
    border-top-color: #28afb0;
}

.hex:hover {
    background-color: #000;
    color: #28afb0;
}
.hex:hover:before {
    border-bottom-color: #000;
}
.hex:hover:after {
    border-top-color: #000;
}

.outer-hex {
    margin-top: 30px;
    width: 114px;
    height: 70px;
    /* background-color: #28AFB0; */
    background-color: transparent;
    position: relative;
    display: inline-block;
    margin-left: 4px;
}
.outer-hex:before {
    content: " ";
    width: 0; height: 0;
    border-bottom: 35px solid transparent;
    /* border-bottom: 35px solid #28AFB0; */
    border-left: 57px solid transparent;
    border-right: 57px solid transparent;
    position: absolute;
    top: -35px;
    left: 0;
}
.outer-hex:after {
    content: "";
    width: 0;
    position: absolute;
    bottom: -35px;
    border-top: 35px solid transparent;
    /* border-top: 35px solid #28AFB0; */
    border-left: 57px solid transparent;
    border-right: 57px solid transparent;
    left: 0;
}

.outer-hex:hover .hex {
    cursor: pointer;
}
.outer-hex:hover .hex .fas {
    display: none;
}
.outer-hex:hover .hex .hex-label {
    display: block;
}
.outer-hex:hover .hex-label {
    text-shadow: 0px 0px 4px;
}
.even-row .outer-hex {
    margin-top: -45px;
    margin-right: -125px;
}
.hex-content{
    height: 60px;
    display: grid;
    align-items: center;
    justify-items: center;
    position: relative;
}
.hex-label {
    display: none;
    /* color: #000; */
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
    /* margin-left: 4px; */

    margin-top: 5px;
    z-index: 99;
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
