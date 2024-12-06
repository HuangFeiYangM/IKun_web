
// 轮播图1

var controls = document.querySelectorAll('.control-a');

console.log(controls);

var sliders = document.querySelectorAll('.slider-a .sl');
var index = 0; // 当前显示的滑块索引

// 函数，用于更新轮播滑块的状态
function updateSlider() {
    // 移除所有列表项的激活类
    sliders.forEach(function(slider) {
        slider.classList.remove('active');
    });

    // 给当前的列表项添加激活类
    sliders[index].classList.add('active');

    // 重置所有单选按钮为未选中状态
    controls.forEach(function(control) {
        control.checked = false;
    });

    // 选中对应的单选按钮
    controls[index].checked = true;
}

// 定时播放函数，每隔一定时间调用updateSlider函数
function playSlider() {
    setInterval(function() {
        index = (index + 1) % sliders.length; // 计算下一个索引
        updateSlider(); // 更新滑块状态
    }, 3000); // 每3秒切换一次
}

// 页面加载完成后开始播放
playSlider();

// 为每个单选按钮添加事件监听器，以便手动切换也能同步
controls.forEach(function(control, idx) {
    control.addEventListener('change', function() {
        index = idx;
        updateSlider();
    });
});

// 为每个标签添加事件监听器
var labels = document.querySelectorAll('.control-visible-a label');
labels.forEach(function(label, idx) {
    label.addEventListener('click', function() {
        index = idx;
        updateSlider();
    });
});

// ==============================================================


