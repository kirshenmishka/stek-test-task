<template>
    <div class="modal" v-if="show">
        <form class="modal-wrapper" @submit.prevent>
            <h3>Добавить организацию</h3>
            <my-input class="input" placeholder="Название" v-model="company.name"/>
            <my-input class="input" placeholder="ФИО Директора" v-model="company.director"/>
            <my-input class="input" placeholder="Номер телефона" type="phone" v-model="company.phone"/>
            <div class="modal-btns">
                <my-button class="cancel-btn" @click.stop="hideModal">Отмена</my-button>
                <my-button class="ok-btn" @click.stop="createCompany">Ок</my-button>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'modal-window',
    data(){
        return{
            company:{
                name: '',
                director: '',
                phone: '',
            }
        }
    },
    props: {
        show:{
            type: Boolean, 
            default: false
        }
    },
    methods:{
        hideModal() {
            this.$emit('update:show', false)
        },
        createCompany(){
            let name = this.company.name
            let director = this.company.director
            let phone = this.company.phone
            if (name && director && phone) {
                this.company.id = Date.now()
                this.$emit('create', this.company)
                console.log('Все заполнено');
            }
            this.company = {
                name: '',
                director: '',
                phone: '',
            }
        }
    }
}
</script>

<style scoped>
.modal{
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(0, 0, 0, 0.3);
}
.modal-wrapper{
    display: flex;
    flex-direction: column;
    background: #fff;
    padding: 20px;
    border-radius: 8px;
}
form h3{
    margin-bottom: 20px;
}
.input{
    margin-bottom: 20px;
}   
.modal-btns{
    display: flex;
    justify-content: space-around;
}
.cancel-btn:hover{
    background-color: #d4a5a5;
}

</style>