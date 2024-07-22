(function(){"use strict";var e={5589:function(e,t,a){var n=a(5130),o=a(6768);const r={class:"header container"},s={class:"main container"};function i(e,t,a,n,i,l){const c=(0,o.g2)("my-input"),d=(0,o.g2)("my-button"),u=(0,o.g2)("company-table"),p=(0,o.g2)("pagination-table"),m=(0,o.g2)("modal-window");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.Lk)("header",r,[(0,o.bF)(c,{placeholder:"Найти по ФИО...",modelValue:i.searchQuery,"onUpdate:modelValue":t[0]||(t[0]=e=>i.searchQuery=e)},null,8,["modelValue"]),(0,o.bF)(d,{onClick:l.showModal},{default:(0,o.k6)((()=>[(0,o.eW)(" Добавить ")])),_:1},8,["onClick"])]),(0,o.Lk)("main",s,[(0,o.bF)(u,{onUpdate:l.sortCompanies,modelValue:i.ascendingOrder,"onUpdate:modelValue":t[1]||(t[1]=e=>i.ascendingOrder=e),companies:l.pagedCompanies,onRemove:l.removeCompany},null,8,["onUpdate","modelValue","companies","onRemove"]),(0,o.bF)(p,{"current-page":i.currentPage,"total-pages":l.totalPages,onChangePage:l.setPage},null,8,["current-page","total-pages","onChangePage"])]),(0,o.bF)(m,{show:i.modalVisible,"onUpdate:show":t[2]||(t[2]=e=>i.modalVisible=e),onCreate:l.createCompany},null,8,["show","onCreate"])],64)}a(4114);const l={class:"btn"};function c(e,t,a,n,r,s){return(0,o.uX)(),(0,o.CE)("button",l,[(0,o.RG)(e.$slots,"default")])}var d={name:"my-button"},u=a(1241);const p=(0,u.A)(d,[["render",c]]);var m=p,h=a(4232),g=a.p+"img/arrow-up-solid.2e9e80c2.svg",b=a.p+"img/xmark-solid.ab3b4798.svg";const v=e=>((0,o.Qi)("data-v-541d9d0c"),e=e(),(0,o.jt)(),e),f={class:"table"},y={class:"table-head"},C={class:"table-items"},k=v((()=>(0,o.Lk)("td",{class:"table-item"},"Название",-1))),P={class:"table-item"},w=v((()=>(0,o.Lk)("td",{class:"table-item"},"Номер телефона",-1))),V=v((()=>(0,o.Lk)("td",{class:"table-item"},null,-1))),L={key:0},O={class:"table-item"},_={class:"table-item"},E={class:"table-item"},A={class:"table-item"},F=["onClick"],X=v((()=>(0,o.Lk)("img",{src:b,alt:"xmark"},null,-1))),M=[X],$={key:1,class:"message"};function I(e,t,a,n,r,s){return(0,o.uX)(),(0,o.CE)("table",f,[(0,o.Lk)("thead",y,[(0,o.Lk)("tr",C,[k,(0,o.Lk)("td",P,[(0,o.Lk)("button",{onClick:t[0]||(t[0]=(...e)=>s.changeOrder&&s.changeOrder(...e)),class:"sort-btn"},[(0,o.eW)(" ФИО Директора "),(0,o.Lk)("img",{class:(0,h.C4)({active:this.modelValue}),src:g,alt:"arrow"},null,2)])]),w,V])]),a.companies.length>0?((0,o.uX)(),(0,o.CE)("tbody",L,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.companies,(t=>((0,o.uX)(),(0,o.CE)("tr",{key:t.id,class:"table-items"},[(0,o.Lk)("td",O,(0,h.v_)(t.name),1),(0,o.Lk)("td",_,(0,h.v_)(t.director),1),(0,o.Lk)("td",E,(0,h.v_)(t.phone),1),(0,o.Lk)("td",A,[(0,o.Lk)("button",{class:"btn",onClick:a=>e.$emit("remove",t)},M,8,F)])])))),128))])):((0,o.uX)(),(0,o.CE)("div",$,'Компаний нет, нажмите кнопку "Добавить", чтобы они появились, или очистите поиск.'))])}var Q={name:"company-table",props:{companies:{type:Array,required:!0},ascendingOrder:{type:Boolean,required:!0},modelValue:{type:Boolean}},methods:{changeOrder(){this.$emit("update:modelValue",!this.modelValue),this.$emit("update",!this.ascendingOrder)}}};const T=(0,u.A)(Q,[["render",I],["__scopeId","data-v-541d9d0c"]]);var j=T;const x=e=>((0,o.Qi)("data-v-77aa8e92"),e=e(),(0,o.jt)(),e),S={key:0,class:"modal"},U=x((()=>(0,o.Lk)("h3",null,"Добавить организацию",-1))),W={class:"modal-btns"};function q(e,t,a,r,s,i){const l=(0,o.g2)("my-input"),c=(0,o.g2)("my-button");return a.show?((0,o.uX)(),(0,o.CE)("div",S,[(0,o.Lk)("form",{class:"modal-wrapper",onSubmit:t[3]||(t[3]=(0,n.D$)((()=>{}),["prevent"]))},[U,(0,o.bF)(l,{class:"input",placeholder:"Название",modelValue:s.company.name,"onUpdate:modelValue":t[0]||(t[0]=e=>s.company.name=e)},null,8,["modelValue"]),(0,o.bF)(l,{class:"input",placeholder:"ФИО Директора",modelValue:s.company.director,"onUpdate:modelValue":t[1]||(t[1]=e=>s.company.director=e)},null,8,["modelValue"]),(0,o.bF)(l,{class:"input",placeholder:"Номер телефона",type:"phone",modelValue:s.company.phone,"onUpdate:modelValue":t[2]||(t[2]=e=>s.company.phone=e)},null,8,["modelValue"]),(0,o.Lk)("div",W,[(0,o.bF)(c,{class:"cancel-btn",onClick:(0,n.D$)(i.hideModal,["stop"])},{default:(0,o.k6)((()=>[(0,o.eW)("Отмена")])),_:1},8,["onClick"]),(0,o.bF)(c,{class:"ok-btn",onClick:(0,n.D$)(i.createCompany,["stop"])},{default:(0,o.k6)((()=>[(0,o.eW)("Ок")])),_:1},8,["onClick"])])],32)])):(0,o.Q3)("",!0)}var B={name:"modal-window",data(){return{company:{name:"",director:"",phone:""}}},props:{show:{type:Boolean,default:!1}},methods:{hideModal(){this.$emit("update:show",!1)},createCompany(){let e=this.company.name,t=this.company.director,a=this.company.phone;e&&t&&a&&(this.company.id=Date.now(),this.$emit("create",this.company),console.log("Все заполнено")),this.company={name:"",director:"",phone:""}}}};const D=(0,u.A)(B,[["render",q],["__scopeId","data-v-77aa8e92"]]);var K=D;const N={class:"pagination-wrapper"},R=["onClick"];function G(e,t,a,n,r,s){return(0,o.uX)(),(0,o.CE)("div",N,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(a.totalPages,(e=>((0,o.uX)(),(0,o.CE)("button",{key:e,onClick:t=>s.changePage(e),class:(0,h.C4)({active:e===a.currentPage})},(0,h.v_)(e),11,R)))),128))])}var z={name:"pagination-table",props:{currentPage:{type:Number,required:!0},totalPages:{type:Number,required:!0}},methods:{changePage(e){this.$emit("change-page",e)}}};const H=(0,u.A)(z,[["render",G],["__scopeId","data-v-02707958"]]);var J=H;const Y=["value"];function Z(e,t,a,n,r,s){return(0,o.uX)(),(0,o.CE)("input",{class:"input",type:"text",value:a.modelValue,onInput:t[0]||(t[0]=(...e)=>s.updateInput&&s.updateInput(...e))},null,40,Y)}var ee={name:"my-input",props:{modelValue:[String,Number]},methods:{updateInput(e){this.$emit("update:modelValue",e.target.value)}}};const te=(0,u.A)(ee,[["render",Z]]);var ae=te,ne={name:"App",components:{MyInput:ae,CompanyTable:j,ModalWindow:K,MyButton:m,PaginationTable:J},data(){return{ascendingOrder:!1,modalVisible:!1,searchQuery:"",currentPage:1,previousPage:1,itemsPerPage:2,companies:[{id:1,name:'ООО "Вектор"',director:"Иванов И.И.",phone:"+70001234567"},{id:2,name:'ОФФ "Вектор"',director:"Бурунов И.И.",phone:"+70001234567"},{id:3,name:'ФФО "Вектор"',director:"Лобанов И.И.",phone:"+70001234567"},{id:4,name:'ОФО "Вектор"',director:"Куертов И.И.",phone:"+70001234567"},{id:5,name:'ООФ "Вектор"',director:"Зильбер И.И.",phone:"+70001234567"},{id:6,name:'ООФ "Вектор"',director:"Витальев И.И.",phone:"+70001234567"},{id:7,name:'ООФ "Вектор"',director:"Антипов И.И.",phone:"+70001234567"}]}},methods:{showModal(){this.modalVisible=!0},createCompany(e){this.companies.push(e),this.modalVisible=!1,this.updateTotalPages()},removeCompany(e){this.companies=this.companies.filter((t=>t.id!==e.id)),this.updateTotalPages()},sortCompanies(){this.companies=this.companies.sort(((e,t)=>{const a=e.director.toLowerCase().localeCompare(t.director.toLowerCase());return this.ascendingOrder?a:-a}))},setPage(e){this.currentPage=e},updateTotalPages(){this.totalPages=Math.ceil(this.searchedAndSortedCompanies.length/this.itemsPerPage),this.currentPage>this.totalPages&&(this.currentPage=1)}},computed:{searchedAndSortedCompanies(){return[...this.companies].filter((e=>e.director.toLowerCase().includes(this.searchQuery.toLowerCase())||e.name.toLowerCase().includes(this.searchQuery.toLowerCase())))},pagedCompanies(){const e=(this.currentPage-1)*this.itemsPerPage,t=e+this.itemsPerPage;return this.searchedAndSortedCompanies.slice(e,t)},totalPages(){return Math.ceil(this.searchedAndSortedCompanies.length/this.itemsPerPage)}},watch:{searchQuery(e,t){if(""===e?this.currentPage=this.previousPage:""===t&&(this.previousPage=this.currentPage,this.currentPage=1),this.searchedAndSortedCompanies.length){const e=Math.ceil(this.searchedAndSortedCompanies.length/this.itemsPerPage);this.currentPage>e&&(this.currentPage=e)}else this.currentPage=1},companies:{handler:"updateTotalPages",deep:!0}},created(){this.updateTotalPages()}};const oe=(0,u.A)(ne,[["render",i]]);var re=oe,se=[ae,j,K,m,J];const ie=(0,n.Ef)(re);se.forEach((e=>{ie.component(e.name,e)})),ie.mount("#app")}},t={};function a(n){var o=t[n];if(void 0!==o)return o.exports;var r=t[n]={exports:{}};return e[n].call(r.exports,r,r.exports,a),r.exports}a.m=e,function(){var e=[];a.O=function(t,n,o,r){if(!n){var s=1/0;for(d=0;d<e.length;d++){n=e[d][0],o=e[d][1],r=e[d][2];for(var i=!0,l=0;l<n.length;l++)(!1&r||s>=r)&&Object.keys(a.O).every((function(e){return a.O[e](n[l])}))?n.splice(l--,1):(i=!1,r<s&&(s=r));if(i){e.splice(d--,1);var c=o();void 0!==c&&(t=c)}}return t}r=r||0;for(var d=e.length;d>0&&e[d-1][2]>r;d--)e[d]=e[d-1];e[d]=[n,o,r]}}(),function(){a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,{a:t}),t}}(),function(){a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})}}(),function(){a.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){a.p="/stek-test-task/"}(),function(){var e={524:0};a.O.j=function(t){return 0===e[t]};var t=function(t,n){var o,r,s=n[0],i=n[1],l=n[2],c=0;if(s.some((function(t){return 0!==e[t]}))){for(o in i)a.o(i,o)&&(a.m[o]=i[o]);if(l)var d=l(a)}for(t&&t(n);c<s.length;c++)r=s[c],a.o(e,r)&&e[r]&&e[r][0](),e[r]=0;return a.O(d)},n=self["webpackChunktest_task"]=self["webpackChunktest_task"]||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))}();var n=a.O(void 0,[504],(function(){return a(5589)}));n=a.O(n)})();
//# sourceMappingURL=app.0025288b.js.map