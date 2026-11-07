const expression = 42; // 0, "", " ", 42 / 0, 42 / "a";

if (expression) {
    console.log(expression);
    console.log('truthy');
} else {
    console.log('falsy');
}