<template>
    <div class="pagination-wrapper">
        <button 
        v-for="page in totalPages" 
        :key="page" 
        @click="changePage(page)"
        :class="{ active: page === currentPage }"
        >
            {{ page }}
        </button>
    </div>
</template>

<script>
export default {
    name: 'pagination-table',
    props: {
        currentPage: {
        type: Number,
        required: true
        },
        totalPages: {
        type: Number,
        required: true
        }
    },
    methods: {
        changePage(page) {
        this.$emit('change-page', page);
        }
    }
}
</script>

<style scoped>
.pagination-wrapper {
display: flex;
justify-content: center;
margin-top: 20px;
}

.pagination-wrapper button {
margin: 0 5px;
padding: 10px 15px;
background: #f0f0f0;
border: 1px solid #c4ede2;
cursor: pointer;
transition: all .4s ease;
border-radius: 8px;
border: none;
}

.pagination-wrapper button.active {
background: #8abef5;
color: #fff;
border-color: #92bdeb;
border-radius: 8px;
}

.pagination-wrapper button:hover {
background: #cedaee;
border-radius: 8px;
}
</style>
