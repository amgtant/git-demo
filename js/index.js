document.addEventListener('DOMContentLoaded', () => {
    // 获取father元素
    const oFDiv = document.querySelector('.father')
    // 获取son元素
    const oSDiv = document.querySelector('.son')
    // 给father绑定点击事件
    oFDiv.addEventListener('click', (event) => {
        // 当点击子元素修改子元素的宽度
        if (event.target == oFDiv) {
            oFDiv.style.width = '600px'
            oFDiv.style.height = '600px'
        } else if (event.target == oSDiv) {
            oSDiv.style.width = '400px'
            oSDiv.style.height = '400px'
        }
    })
})