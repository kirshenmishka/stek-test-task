<template>
    <table class="table">
        <thead class="table-head">
            <tr class="table-items">
                <td class="table-item">Название</td>
                <td class="table-item">
                    <button @click="changeOrder" class="sort-btn">
                        ФИО Директора 
                        <img :class="{'active' : this.modelValue}" src="../../img/arrow-up-solid.svg" alt="arrow">
                    </button>
                </td>
                <td class="table-item">Номер телефона</td>
                <td class="table-item"></td>
            </tr>
        </thead>
        <tbody v-if="companies.length > 0">
            <tr v-for="company in companies" :key="company.id" class="table-items">
                <td class="table-item">{{ company.name }}</td>
                <td class="table-item">{{ company.director }}</td>
                <td class="table-item">{{ company.phone }}</td>
                <td class="table-item"><button class="btn" @click="$emit('remove', company)"><img src="../../img/xmark-solid.svg" alt="xmark"></button></td>
            </tr>
        </tbody>
        <div class="message" v-else>Компаний нет, нажмите кнопку "Добавить", чтобы они появились, или очистите поиск.</div>
    </table>
    
</template>

<script>
export default {
    name: 'company-table', 
    props: {
        companies:{
        type: Array, 
        required: true
        },
        ascendingOrder:{
        type: Boolean, 
        required: true
        },
        modelValue:{
        type: Boolean
        }
    },
    methods:{
        changeOrder(){
        this.$emit('update:modelValue', !this.modelValue)
        this.$emit('update', !this.ascendingOrder)
        }
    }
}
</script>

<style scoped>
.table {
width: 100%;
min-height: 180px;
}

.table-head .table-items{
border-bottom: 2px solid #5fd4ad;
margin-bottom: 20px;
padding-bottom: 20px;
}

.table-items{
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
}

.table-item{
width: 200px;
text-align: left;
display: flex;
}

.table-items .table-item:last-child{
width: 50px;
}

.btn {
width: 30px;
background: transparent;
border: none;
cursor: pointer;
transition: all .2s ease;
padding: 0;
}

.btn:hover {
transform: scale(1.1);
}

.sort-btn {
display: flex;
align-items: center;
background: transparent;
border: none;
cursor: pointer;
}

.sort-btn img {
width: 15px;
margin-left: 20px;
}

.sort-btn img.active {
    transform: rotate(180deg);
}
</style>