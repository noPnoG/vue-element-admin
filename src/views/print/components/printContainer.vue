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
        display: none;
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
