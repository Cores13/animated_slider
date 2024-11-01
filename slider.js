let nextBtn = document.getElementById('next');
let prevBtn = document.getElementById('prev');
let carousel = document.querySelector('.carousel');
let listItem = document.querySelector('.carousel .list');
let thumbnail = document.querySelector('.carousel .thumbnail');
let animationTime = 800;
let timeAutoNext = 7000;
let runTimeOut;

nextBtn.onclick = () => {
    showSlider('next');
}

prevBtn.onclick = () => {
    showSlider('prev');
}

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
}