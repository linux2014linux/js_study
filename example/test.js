function test() {
	age = 10;
}
test();
document.getElementById('content').innerText += 'age: ' + age + '\n';

(function(){
    var age = 10, gender = '男';
    function formatData() {
        return {'age': age, 'gender': gender};
    }
    window.formatData = formatData;
})();
document.getElementById('content').innerText += JSON.stringify(formatData()) + '\n';
