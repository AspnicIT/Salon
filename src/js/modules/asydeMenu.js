function asydeMenu(
    selbtnOn,
    selparents,
    selsection,
    selbtnOff,
    classOn,
    classOff,
    classOnTwo,
    ClassOffTwo


) {
    const btnOn = document.querySelector(selbtnOn),
        parents = document.querySelector(selparents);




    const asideMenu = document.createElement('div');
    asideMenu.classList.add('aside__menu');


    asideMenu.innerHTML = `
            <aside class="main-right hide-right hide">
                <button class="main-right__button">
                    <span></span>                
                </button>
                <button class="main-right__button-modal">Записаться</button>
                <div class="main-right__p">
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum, adipiscing amet in egestas sem dui, arcu faucibus scelerisque. 
                    Nisl est felis id volutpat. Sed dolor fermentum amet lectus nibh quis. Tortor donec pellentesque leo ac placerat. Morbi.</p>
                </div>
                <div class="main-right__contacts">
                    <h3>Контакты</h3>
                    <ul>
                        <li class="top-elem"><a type="phone" href="#">+7-(911)-123-45-68</a></li>
                        <li class="top-elem"><a type="phone" href="#">+7-(911)-123-45-67</a></li>
                        <li><a href="contacts.php">Новоостровский проспект, дом 36 лит. С</a></li>

                    </ul>
                </div>
                <div class="main-right__workMode">
                    <h3>Режим работы</h3>
                    <p class="top-elem">C 10:00 до 21:00 (Пн-Пт)</p>
                    <p>С 11:00 до 20:00 (Сб-Вс)</p>
                </div>
            </aside>
    `;
    parents.append(asideMenu);

    const section = document.querySelector(selsection),
        btnOff = document.querySelector(selbtnOff);



    btnOn.addEventListener('click', () => {
        onMenu(btnOn, section);
    });
    btnOff.addEventListener('click', () => {
        offMenu(btnOn, section);
    });

    window.addEventListener('keydown', (e) => {
        if (e.code === 'Escape') {
            offMenu(btnOn, section);
        }
    });


    window.addEventListener('scroll', () => {

        if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight - 1) {
            offMenu(btnOn, section);
        }
    });


    function onMenu(targ, obj) {

        obj.classList.remove(classOff);
        setTimeout(() => {
            obj.classList.remove(ClassOffTwo);
            obj.classList.add(classOnTwo);

            targ.classList.add(classOff);
            targ.classList.remove(classOn);
        }, 0);
    }



    function offMenu(ghost, obj) {

        obj.classList.remove(classOnTwo);
        obj.classList.add(ClassOffTwo);

        ghost.classList.remove(classOff);
        ghost.classList.add(classOn);

        setTimeout(() => {
            if (!ghost.classList.contains(classOff)) {
                obj.classList.add(classOff);
            }
        }, 1000);
    }
}


export default asydeMenu;



