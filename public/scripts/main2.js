
let vm = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue",
        newNum:"",
        nums: []
    },
    methods:{
      addItem:function(event){
        // alert();
        if (this.newNum=='')return;
        var num ={
          item: this.newNum
        };
        this.nums.push(num);
        this.newNum = ''
      }
    }
})
