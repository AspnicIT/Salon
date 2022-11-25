function modalW(
    parentInner,
    selModal,
    btnsOn,
    btnOff,
    classOffOne,
    classOffTwo,
    classOn,
    
) {
    const modalParent = document.querySelector(parentInner);

    const modalWindow = document.createElement('div');
    modalWindow.classList.add('modal', classOffOne, classOffTwo);
    modalWindow.innerHTML = `
            <div class="modal__body">
                <div class="modal__content">
                    <a href="" class="modal__close">X</a>
                    <div class="modal__wrap">
                        <form class="modal__wrap form" method="post" enctype="multipart/form-data">
                            <h3 class="modal__tittle" for="">Записаться</h3>
                            <div class="modal__text">
                                <input class="modal__input" require type="text" name="name" placeholder="Ваше имя">
                            </div>
                            <div class="modal__text">
                                <input class="modal__input" require type="tel" name="phone" placeholder="+79991234567">
                            </div>
                            <button class="modal__button" type="submit">Связаться со мной</button>
                        </form>
                    </div>
                </div>
            </div>
            `;
    modalParent.append(modalWindow);


    const modal = document.querySelector(selModal),
        btnOpen = document.querySelectorAll(btnsOn),
        btnClose = document.querySelector(btnOff);


    btnOpen.forEach((item) => {
        item.addEventListener('click', openModal);
    });


    btnClose.addEventListener('click', (event) => {
        event.preventDefault();
        closeModal();
    });

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            closeModal();
        }
    });


    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            closeModal();
        }

    });

    const modalTimerId = setTimeout(openModal, 600000);


    function showMoladByScroll() {
        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            openModal();
            window.removeEventListener('scroll', showMoladByScroll);
        }
    }

    window.addEventListener('scroll', showMoladByScroll);




    function openModal() {

        modal.classList.remove(classOffOne);
        // modal.classList.add(classOn);
        document.body.style.overflow = 'hidden';

        setTimeout(() => {
            modal.classList.remove(classOffTwo);
            modal.classList.add(classOn);
        }, 0);
    }

    function closeModal() {
        modal.classList.remove(classOn);
        modal.classList.add(classOffTwo);
        document.body.style.overflow = '';


        setTimeout(() => {

            // modal.classList.remove('show');
            modal.classList.add(classOffOne);
        }, 300);
    }
    
}

export default modalW;