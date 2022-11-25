function forms(
    form,
    input,
    innerParent,
    errorClass
){


    const formModal = document.querySelector(form),
          inputs = document.querySelectorAll(input);

    const parrent = document.querySelector(innerParent);

    let goodValidation; 

    formModal.addEventListener('submit', (event) => {
        event.preventDefault();
        goodValidation = true;
        start(formModal, inputs);    
    });


    const statusMessage = {
        success: 'Мы с вами свяжемся',
        loading: 'Отправка...',
        empty: 'Заполните поле',
        fail: 'Что-то пошло не так'
    };


    
    function start(form, entry){ 
        validation(entry);
       
        if(goodValidation === true){
            showThanksModal(statusMessage.loading);
            setTimeout(() => {
                showThanksModal(statusMessage.success);
                form.reset();
                entry.forEach(item => item.classList.remove(errorClass));
            }, 3000);

            
            // bingPostData(form);
            // sendingMail(form);
        } else {
            showThanksModal(statusMessage.empty);
        }
    }
    
    
    function validation(entry){
        entry.forEach(item => {
            if (item.value != ''){
                item.classList.remove(errorClass);
            } else{
                goodValidation = false;
                item.classList.add(errorClass);
            }
        });
    }
    
    
    // function bingPostData(form) {
    
    //         const formData = new FormData(form);
    //         const json = JSON.stringify(Object.fromEntries(formData.entries()));
    
    //         postData('http://localhost:3000/answers', json)
    //         .then(data => {
    //             console.log(data);
    //             window.location.href = selHTML;
    //         }).catch(() => {
    //             showThanksModal(statusMessage.fail);
    //         }).finally(() => {
    //             form.reset();
    //         });  
    // }

    // async function sendingMail(form) {

    //     let formData = new FormData(form);
    
    //         await fetch('sendmailer.php', {
    //             method: 'POST',
    //             body: formData
    //         });
    //     }
    
    function showThanksModal(message){
        
        const text = document.createElement('p');
        text.innerHTML = `${message}`;
        parrent.append(text);
        setTimeout(()=> {
        text.innerHTML = ``;
        parrent.append(text);
        },3000);
    }
}

export default forms;
