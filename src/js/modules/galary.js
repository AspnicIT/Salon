function galary(
    galaryBtns,
    galaryImg,
    activBtnClass,
    classOn,
    classOff,
    classOffTwo
) {
    


    const btnsGalary = document.querySelectorAll(galaryBtns),
        imgsGalary = document.querySelectorAll(galaryImg);

    const variants = {
        all: 'galary__img',
        hair: 'hair',
        nailes: 'nailes',
        vizazh: 'vizazh'
    };

    btnsGalary.forEach((item, i) => {
        item.addEventListener('click', (e) => {
            filtrGalary(i);
            btnsGalary.forEach(item => item.classList.remove(activBtnClass));
            e.target.classList.add(activBtnClass);

        });
    });

    function filtrGalary(index) {
        let variant = index;
        console.log(variant);
        if (variant === 0) {
            imgsGalary.forEach((item) => {
                hideImg(item);
                filtrShow(variants.all);
            });
        } else if (variant === 1) {
            imgsGalary.forEach((item) => {
                hideImg(item);
                filtrShow(variants.hair);
            });
        } else if (variant === 2) {
            imgsGalary.forEach((item) => {
                hideImg(item);
                filtrShow(variants.nailes);
            });
        } else if (variant === 3) {
            imgsGalary.forEach((item) => {
                hideImg(item);
                filtrShow(variants.vizazh);
            });
        }
    }

    function hideImg(item) {
        item.classList.remove(classOn);
        item.classList.add(classOff);
        setTimeout(() => {

            item.classList.add(classOffTwo);
        }, 410);
    }

    function filtrShow(sign) {
        setTimeout(() => {
            imgsGalary.forEach((item) => {
                if (item.classList.contains(sign)) {
                    item.classList.remove(classOffTwo);

                    setTimeout(() => {

                        item.classList.add(classOn);
                        item.classList.remove(classOff);
                    }, 0);
                }
            });
        }, 1000);

    }


}
export default galary;