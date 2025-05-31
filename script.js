let billInput = document.querySelector('#bill-input')
let billError = document.querySelector('#bill-error')
let billValue = 0



let boxArea = document.querySelector('#box-area')
let tipBoxes = document.querySelectorAll('.boxes')
let customSpan = document.querySelector('#custom-span')
let customDiv = document.querySelector('#custom-div')
let customInput = document.querySelector('#custom-tip-input')
let selectError = document.querySelector('#select-error')
let tip = -1


let numberInput = document.querySelector('#number-input')
let numberError = document.querySelector('#number-error')
let numberValue = 0




let tipAmount = document.querySelector('#tip-amount')
let totalAmount = document.querySelector('#total-amount')



let calculateButton = document.querySelector('#calculate-button')





// codes


// bill sec

billInput.addEventListener('input' , (e)=> {
    if (e.target.value <= 0) {
        billValue = 0
        billError.innerHTML = 'can not be zero or negative'
        billError.style.display = 'unset'
    } else if (e.target.value > 100000000) {
        billValue = 0
        billError.innerHTML = 'too large number'
        billError.style.display = 'unset'
    } else {
        billError.style.display = 'none'
        billValue = e.target.value
    }
})


// boxes sec

boxArea.addEventListener('click' , (e)=> {
    selectError.style.display = 'none'
    if (e.target.classList.contains('boxes')) {
        customDiv.style.display = 'none'
        customSpan.style.display = 'unset'
        tipBoxes.forEach((box)=> {
            box.classList.remove('active')
        })
        e.target.classList.add('active')
        tip = e.target.getAttribute('val')
    }
    else {
        return
    }
})


customSpan.addEventListener('click' , (e)=> {
    tip = -1
    tipBoxes.forEach((box)=> {
            box.classList.remove('active')
    })
    customSpan.style.display = 'none'
    customDiv.style.display = 'unset'
    customInput.style.border= '1px solid hsl(183, 100%, 15%)'
    customInput.addEventListener('input' , (e)=> {
        if (e.target.value < 0) {
            tip = -1
            selectError.innerHTML = 'can not be negative'
            selectError.style.display = 'unset'
        } else if (e.target.value > 100) {
            tip = -1
            selectError.innerHTML = 'tip must be between 0% and 100%'
            selectError.style.display = 'unset'
        } else {
            selectError.style.display = 'none'
            tip = e.target.value
        }
    })
})


// number sec

numberInput.addEventListener('input' , (e)=> {
   if (e.target.value <= 0) {
    numberValue = 0
    numberError.innerHTML = 'can not be zero or negative'
    numberError.style.display = 'unset'
   } else if (e.target.value > 10000) {
    numberValue = 0
    numberError.innerHTML = 'too large number'
    numberError.style.display = 'unset'
   } else {
    numberError.style.display = 'none'
    numberValue = e.target.value
   }
})


// result sec

calculateButton.addEventListener('click' , (e)=> {
    if (billValue == 0) {
        billError.innerHTML = 'please fill this input'
        billError.style.display = 'unset'
    } else {
        billError.style.display = 'none'
    }
    if (tip == -1) {
        selectError.innerHTML = 'please select one option'
        selectError.style.display = 'unset'
    } else {
        selectError.style.display = 'none'
    }
    if (numberValue == 0) {
        numberError.innerHTML = 'please fill this input'
        numberError.style.display = 'unset'
    } else {
        numberError.style.display = 'none'
    }
    if (billValue != 0 && tip != -1 && numberValue != 0) {
        tipPerPerson = Math.round(((billValue * (tip/100) / numberValue )) * 100 ) / 100
        totalPerPerson = Math.round(((billValue / numberValue) + tipPerPerson) * 100 ) /100
        tipAmount.innerHTML = `$${tipPerPerson}`
        totalAmount.innerHTML = `$${totalPerPerson}`
    } else {
        return
    }
})



