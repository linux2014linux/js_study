(function(){
    var Student = function(options) {
        this.options = options;        
    };
    Student.prototype.print = function() {
        alert(JSON.stringify(this.options));
    };    
    window.Student = Student;
})();

(function(){
    /**
     * = function(){}即就是构造方法
     */
    var Teacher = function(){};
    Teacher.name = "unknow";
    Teacher.age = 0;    
    Teacher.prototype.init = function(options) {
        this.name = options.name;
        this.age = options.age;
    };
    Teacher.prototype.test = function() {
        alert("name: " + this.name + "\nage: " + this.age);
    };

    window.Teacher = Teacher;
})();
