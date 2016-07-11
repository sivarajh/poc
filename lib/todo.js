angular.module('todoApp', [])
    .controller('TodoListController', function() {
        var todoList = this;


        todoList.convert = function() {
            var arr = todoList.sourcetxt;
            console.log(arr);
            //.join("','");
            todoList.targetBox = String(arr);
            //.replace(\(\w+)\,'\'$1\',');

        };



    });