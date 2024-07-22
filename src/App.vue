<template>
  <header class="header container">
    <my-input 
    placeholder="Найти по ФИО..." 
    v-model="searchQuery"/>
    <my-button 
    @click="showModal"
    >
      Добавить
    </my-button>
  </header>
  <main class="main container">
    <company-table 
    @update="sortCompanies" 
    v-model="ascendingOrder" 
    :companies="pagedCompanies" 
    @remove="removeCompany"
    />
    <pagination-table 
    :current-page="currentPage" 
    :total-pages="totalPages" 
    @change-page="setPage" 
    />
  </main>
  <modal-window 
  v-model:show="modalVisible" 
  @create="createCompany"
  />
</template>

<script>
import MyButton from './components/UI/MyButton.vue';
import CompanyTable from './components/UI/CompanyTable.vue';
import ModalWindow from './components/UI/ModalWindow.vue';
import PaginationTable from './components/UI/PaginationTable.vue';
import MyInput from './components/UI/MyInput.vue';

export default {
  name: 'App',
  components: {
    MyInput, 
    CompanyTable,
    ModalWindow,
    MyButton,
    PaginationTable,
  },
  data(){
    return {
      ascendingOrder: false,
      modalVisible: false,
      searchQuery: '',
      currentPage: 1,
      previousPage: 1,
      itemsPerPage: 2,
      companies: [
        {id: 1, name: 'ООО "Вектор"', director: 'Иванов И.И.', phone: '+70001234567'},
        {id: 2, name: 'ОФФ "Вектор"', director: 'Бурунов И.И.', phone: '+70001234567'},
        {id: 3, name: 'ФФО "Вектор"', director: 'Лобанов И.И.', phone: '+70001234567'},
        {id: 4, name: 'ОФО "Вектор"', director: 'Куертов И.И.', phone: '+70001234567'},
        {id: 5, name: 'ООФ "Вектор"', director: 'Зильбер И.И.', phone: '+70001234567'},
        {id: 6, name: 'ООФ "Вектор"', director: 'Витальев И.И.', phone: '+70001234567'},
        {id: 7, name: 'ООФ "Вектор"', director: 'Антипов И.И.', phone: '+70001234567'},
      ]
    }
  },
  methods: {
    showModal(){
      this.modalVisible = true
    },
    createCompany(company){
      this.companies.push(company)
      this.modalVisible = false
      this.updateTotalPages()
    },
    removeCompany(company){
      this.companies = this.companies.filter(c => c.id !== company.id)
      this.updateTotalPages()
    },
    sortCompanies(){
      this.companies = this.companies.sort((company1, company2) => {
        const comparison = company1.director.toLowerCase().localeCompare(company2.director.toLowerCase());
        return this.ascendingOrder ? comparison : -comparison;
      });
    },
    setPage(page){
      this.currentPage = page;
    },
    updateTotalPages() {
      this.totalPages = Math.ceil(this.searchedAndSortedCompanies.length / this.itemsPerPage);
      if (this.currentPage > this.totalPages) {
        this.currentPage = 1;
      }
    }
  },
  computed: {
    searchedAndSortedCompanies(){
      return [...this.companies].filter(company => 
      company.director.toLowerCase().includes(this.searchQuery.toLowerCase()) || company.name.toLowerCase().includes(this.searchQuery.toLowerCase())
    );
    },
    pagedCompanies(){
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = start + this.itemsPerPage;
      return this.searchedAndSortedCompanies.slice(start, end);
    },
    totalPages(){
      return Math.ceil(this.searchedAndSortedCompanies.length / this.itemsPerPage);
    }
  },
  watch: {
    searchQuery(newQuery, oldQuery) {
      if (newQuery === '') { 
        this.currentPage = this.previousPage; 
      } else if (oldQuery === '') { 
        this.previousPage = this.currentPage;
        this.currentPage = 1; 
      }

      if (!this.searchedAndSortedCompanies.length) {
        this.currentPage = 1;  
      } else {
        const newTotalPages = Math.ceil(this.searchedAndSortedCompanies.length / this.itemsPerPage);
        if (this.currentPage > newTotalPages) {
          this.currentPage = newTotalPages;  
        }
      }
    },
    companies: {
      handler: 'updateTotalPages',
      deep: true
    }
  },
  created() {
    this.updateTotalPages();
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Montserrat", sans-serif;
    font-size: 17px;
  }
  .container{
    margin: 0 auto;
    max-width: 1140px;
  }
  .header{
    padding: 50px 0;
    display: flex;
    justify-content: space-between;
  }
</style>
