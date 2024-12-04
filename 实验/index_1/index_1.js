









// 关闭滚动字幕的函数
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


// 第一个幻灯片切换的函数
document.addEventListener('DOMContentLoaded', function () {
    let index = 0;
    const slides = document.querySelectorAll('.slide_1');
    const radios = document.querySelectorAll('input[type="radio"][name="control"]');
    const nextButton = document.querySelector('.slide-right-btn');
    const prevButton = document.querySelector('.slide-left-btn');
    const interval = 3000; // 3秒切换一次幻灯片

    // 切换幻灯片的函数
    function changeSlide(forward) {
        index = forward ? (index + 1) % slides.length : (index - 1 + slides.length) % slides.length;
        radios[index].checked = true;
    }

    // 自动播放轮播图的函数
    function startAutoPlay() {
        setInterval(() => {
            changeSlide(true);
        }, interval);
    }

    // 绑定按钮事件以切换幻灯片
    nextButton.addEventListener('click', () => changeSlide(true));
    prevButton.addEventListener('click', () => changeSlide(false));

    // 初始化自动播放
    startAutoPlay();
});


// 时间
function updateClock() {
    var now = new Date(); // 获取当前时间
    var year = now.getFullYear(); // 年份
    var month = now.getMonth() + 1; // 月份
    var day = now.getDate(); // 日
    var hour = now.getHours(); // 小时
    var minute = now.getMinutes(); // 分钟
    var second = now.getSeconds(); // 秒

    // 将时间格式化为两位数，如果小于10则前面加0
    month = month < 10 ? '0' + month : month;
    day = day < 10 ? '0' + day : day;
    hour = hour < 10 ? '0' + hour : hour;
    minute = minute < 10 ? '0' + minute : minute;
    second = second < 10 ? '0' + second : second;

    // 更新页面上的时间和日期
    document.getElementById('date').textContent = year + '-' + month + '-' + day;
    document.getElementById('time').textContent = hour + ':' + minute + ':' + second;
}

// 页面加载时更新时间，并每1000毫秒（1秒）更新一次
updateClock();
setInterval(updateClock, 1000);



document.addEventListener('DOMContentLoaded', function(){
    let index = 0;
    const slides = document.querySelectorAll('.d7-1-1 .sl-1, .d7-1-1 .sl-2, .d7-1-1 .sl-3, .d7-1-1 .sl-4'); // 获取所有幻灯片元素 
    const nextButton = document.querySelector('.d7-1-3');
    const prevButton = document.querySelector('.d7-1-2');
    const interval = 5000; // 5秒切换一次幻灯片

    
    // 切换幻灯片的函数
    function changeSlide(forward) { 
        slides.forEach(slide => {
            slide.style.left = `${index * -100}%`; // 将当前幻灯片归位
        });
        index = forward ? (index + 1) % slides.length : (index - 1 + slides.length) % slides.length;
        for (let i = 0; i < slides.length; i++) { 
            slides[i].style.left=`${(i - index) * 100}%`;
        }
    }
    

    // 自动播放轮播图的函数
    function startAutoPlay() {
        setInterval(() => {
            changeSlide(true);
        }, interval);
    }

    // 绑定按钮事件以切换幻灯片
    nextButton.addEventListener('click', () => changeSlide(true));
    prevButton.addEventListener('click', () => changeSlide(false));

    // 初始化自动播放
    startAutoPlay();
})




