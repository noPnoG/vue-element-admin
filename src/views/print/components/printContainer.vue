<template>
  <div class="fixed">
    <slot />
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .fixed{
        position: fixed;
        display: none;
        top: 0;
        right: 0;
        left: 0;
        height: 10000px;
        margin: 0;
    }
    @media print {
        .fixed{
            display: block
        }
    }
    @page {
        margin: 5px 5px;
    }

</style>
