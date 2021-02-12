var vm = new Vue({
    el: '#app',
    data: {
        message: "Hello Vue",
        newNum:"",
        nums: []
    },
    methods:{
      addNum:function(event){
        alert();
        if (this.newNum=='')return;
        var num ={
          item: this.newNum
        };
        this.nums.push(num);
        this.newNum = ''
      }
    }
})
