<template>
    <div class="main-container">
        <div class="container-1">
            <div class="container-1-1">
                qsqsdsq
            </div>
            <div class="container-1-1">
                qsqsdsqsqdsqdsqdsq
            </div>
        </div>
        <div class="container-2">
            <div class="container-2-1">
                    dqsdqsdqsdqsd
            </div>
            <div class="container-2-1">
                sqdsqdsqdqsd
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style lang="scss" scoped>
.main-container{
    width: 100%;
    height: 1376px;
    padding:  150px;
    display: flex;
    gap: 32px;
    flex-wrap: wrap;
   .container-1{
    flex: 0.3;
    display: flex;
    flex-direction: column;
    gap: 32px;
    .container-1-1,.container-1-2{
        flex: 0.5;
        background-color: #FFDDE4;
    }
   }
   .container-2{
    flex: 0.7;
    display: flex;
    flex-direction: column;
    gap: 32px;
    .container-2-1{
        flex-grow: 4;
        background-color: #FFDDE4;
    }
    .container-2-2{
        flex-grow: 1;
        background-color: #FFDDE4;
    }
   }
}
</style>