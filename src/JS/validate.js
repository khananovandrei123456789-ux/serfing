

const inputNameElement=document.querySelector('.nameInput');
const nameError=document.querySelector('.error-name')

// ред бордер на выход с поля инпута и значением символов 0
inputNameElement.addEventListener('blur',()=>{
    const isValidEmpty=inputNameElement.value.length===0;
    const goodInput=inputNameElement.value.length>0;
    inputNameElement.classList.toggle('is-invalid',isValidEmpty)

            // сообщение об ошибке
    if (isValidEmpty && !goodInput) {
            nameError.textContent = 'Значение отсутствует';
            nameError.style.display = 'block';
            nameError.style.color='red';
            inputNameElement.style.border='3px solid red'
    } else {
            nameError.style.display = 'none';
    }

    // Если все окей- делаем рамку зеленой и выводим сообщение что все окей
    if(goodInput && !isValidEmpty){
        inputNameElement.classList.toggle('is-valid')
        inputNameElement.style.border='3px solid green '
        nameError.textContent = `Здравствуй, ${inputNameElement.value}`;
        nameError.style.display = 'block';
        nameError.style.color='green';
        nameError.style.fontSize='1.5rem'
        nameError.style.marginBottom='1.5rem'
        nameError.style.lineHeight='2rem'
        nameError.style.fontFamily="Roboto Condensed',sans-serif"
    }
})


    // провека на цифры
    inputNameElement.addEventListener('keydown',(event)=>{
        const anyDigitTextRect=/\d/.test(event.key)

    //если нажимаем цифру в поле ввода- она не выводится 

        if(anyDigitTextRect){
            event.preventDefault()
            nameError.textContent = 'Значение не может быть числом';
            nameError.style.display = 'block';
            nameError.style.color='red';
        }
    })


inputNameElement.addEventListener('focus',()=>{
        inputNameElement.classList.remove('is-invalid')
    })

// ======================================================






const InputTelElement=document.querySelector('.telInput');
const telError=document.querySelector('.error-name-tel')

// добавляем стандартный шаблон при фокусе
InputTelElement.addEventListener('focus',(event)=>{
    if(event.target.value===''){
        event.target.value='+7 (   )'
        
        // Автоподстановка курсора на нужное место
        setTimeout(()=>{
            event.target.setSelectionRange(2,8)
        }, 0)
    }
})


InputTelElement.addEventListener('blur',()=>{
    const isValidEmpty=InputTelElement.value.length===0;
    const goodInput=InputTelElement.value.length>=10;
    InputTelElement.classList.toggle('is-invalid',isValidEmpty)

    // Проверка на пустое значение 
    if(isValidEmpty){
            telError.textContent = 'Значение отсутствует';
            telError.style.display = 'block';
            telError.style.color='red';
            InputTelElement.style.border='3px solid red'
    } else {
            telError.style.display = 'none';
    }

    // проверка на то что вводятся только цифры
})

InputTelElement.addEventListener('keydown',(event)=>{
        const anyDigitTextRect=/\d/.test(event.key)

        // Разрешаем спецклавиши
    const allowedKeys = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 
                        'ArrowRight', 'ArrowUp', 'ArrowDown', 'Home', 'End'];
    
    if (allowedKeys.includes(event.key)) return;

    //если нажимаем цифру в поле ввода- она не выводится 

        if(!anyDigitTextRect){
            event.preventDefault()
            telError.textContent = 'Значение не может быть не числом';
            telError.style.display = 'block';
            telError.style.color='red';
        }

       /*  // Добавляем автоскрытие ошибки через 2 секунды
        setTimeout(() => {
            telError.style.display = 'none';
        }, 2000); */
    })


    InputTelElement.addEventListener('blur', () => {
    const value = InputTelElement.value;
    const hasOnlyDigits = /^[\d\s()+-]+$/.test(value); // Разрешаем цифры, пробелы, скобки, +, -
    const digitCount = (value.match(/\d/g) || []).length; // Считаем только цифры
    
    InputTelElement.classList.toggle('is-invalid', digitCount < 10 || !hasOnlyDigits);
    
    if (value.length === 0) {
        telError.textContent = 'Значение отсутствует';
        telError.style.display = 'block';
        telError.style.color = 'red';
    } else if (digitCount < 10) {
        telError.textContent = `Введено ${digitCount} цифр. Нужно минимум 10`;
        telError.style.display = 'block';
        telError.style.color = 'red';
    } else if (!hasOnlyDigits) {
        telError.textContent = 'Можно вводить только цифры и символы телефона';
        telError.style.display = 'block';
        telError.style.color = 'red';
    } else {
        InputTelElement.classList.add('is-valid')
        InputTelElement.style.border='3px solid green';
        telError.textContent = `Номер ${InputTelElement.value} -добавлен`;
        telError.style.display = 'block';
        telError.style.color='green';
        telError.style.fontSize='1.5rem'
        telError.style.marginBottom='1.5rem'
        telError.style.lineHeight='2rem'
        telError.style.fontFamily="Roboto Condensed',sans-serif"
        
    }
});