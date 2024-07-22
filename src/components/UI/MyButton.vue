<template>
    <button class="btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',
}
</script>

<style>
    .btn{
        padding: 10px 15px;
        border-radius: 8px;
        border: none;
        cursor: pointer;
        transition: all .4s ease;
    }

    .btn:hover{
        background: #c2ddb6;
    }
</style>