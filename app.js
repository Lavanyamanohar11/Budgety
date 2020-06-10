var budgetController = (function(){

    var x = 23;
    
    function add(a){
        return x+a;
    }

    return {
        publicTest: function(b){
            return add(b);
        }
    }
})();


var UIController = (function(){

})();

var controller = (function(budgetCtrl, UICtrl){

    var z = budgetCtrl.publicTest(7);

    return {
        publicZ : z        
    }

})(budgetController, UIController);

console.log(controller.publicZ)