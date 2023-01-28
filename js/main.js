let sum = (function() {
    let result = 0;
        return function(x) {
        alert(result += x);
    }
})();


sum(3);
sum(5);
sum(20);




