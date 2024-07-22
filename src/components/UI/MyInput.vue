<template>
    <input class="input" type="text" :value="modelValue" @input="updateInput">
</template>

<script>
export default {
    name: 'my-input',
    props: {
        modelValue: [String, Number]
    },
    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style>
.input{
    padding: 10px 15px;
    border-radius: 8px;
    border: none;
    transition: all .4s ease;
    outline: 2px solid transparent;
    background-color: #f1f1f1;
}

.input:focus{
    outline: 2px solid #726464;
}
</style>