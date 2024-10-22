document.getElementById('closeMarquee').addEventListener('click', function () {
    var marqueeContainer = document.getElementsByClassName('marquee');
    console.log("del marqueeContainer");
    // 不像GetElementById()，getElementsByClassName()返回的是一个数组，所以要用数组的length属性来判断是否有元素
    if (marqueeContainer.length > 0) { // 确保至少有一个元素
        marqueeContainer[0].style.display = 'none'; // 使用索引0来访问第一个元素
    } else {
        console.error('error1:No element with class "marquee" found');
    }
});