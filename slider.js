let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let nextBtnHidden = document.getElementById('nextBtn');
let prevBtnHidden = document.getElementById('prevBtn');
let carousel = document.querySelector('.carousel');
let listItem = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');
let animationTime = 800;
let runTimeOut;
let timeAutoNext = 7000;
let autoRun;

nextBtn.onclick = () => {
    showSlider('next');
}

prevBtn.onclick = () => {
    showSlider('prev');
}

nextBtnHidden.onclick = () => {
    showSlider('next');
}

prevBtnHidden.onclick = () => {
    showSlider('prev');
}

autoRun = setTimeout(() => {
    nextBtn.click();
}, timeAutoNext);

const showSlider = (type) => {
    let itemList = document.querySelectorAll('.carousel .list .item');
    let thumbnailList = document.querySelectorAll('.carousel .thumbnail .item');

    if(type === 'next') {
        listItem.appendChild(itemList[0]);
        thumbnail.appendChild(thumbnailList[0]);
        carousel.classList.add(type);
    } else {
        let lastItemPosition = itemList.length - 1;
        listItem.prepend(itemList[lastItemPosition]);
        thumbnail.prepend(thumbnailList[lastItemPosition]);
        carousel.classList.add(type);
    }
    
    clearInterval(runTimeOut);
    runTimeOut = setTimeout(() => {
        carousel.classList.remove(type);
    }, animationTime);

    clearTimeout(autoRun);
    autoRun = setTimeout(() => {
        nextBtn.click();
    }, timeAutoNext);
}