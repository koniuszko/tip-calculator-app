const tip_div = document.querySelector(".tip")
const bill_div = document.querySelector(".bill")
const people_div = document.querySelector(".people")

const btn_5 = document.querySelector(".btn_5")
const btn_10 = document.querySelector(".btn_10")
const btn_15 = document.querySelector(".btn_15")
const btn_25 = document.querySelector(".btn_25")
const btn_50 = document.querySelector(".btn_50")
const btn_custom = document.querySelector(".custom_button")
const btn_reset = document.querySelector(".reset")
const input_bill = document.querySelector(".bill_total")
const input_people = document.querySelector(".people_total")
const summary_tip = document.querySelector(".summary_tip")
const summary_total = document.querySelector(".summary_total")
const error_span = document.querySelector(".error_span")




function submit(e) {
    if (input_bill.value) {
        if (input_people.value > 0) {
            let bill_amount = input_bill.value
            let people_amount = input_people.value

            let person_tip_amount = (bill_amount * e.dataset.tip / people_amount).toFixed(2)
            let person_total_amount = (bill_amount / people_amount).toFixed(2)

            summary_tip.textContent = `$${person_tip_amount}`
            summary_total.textContent = `$${person_total_amount}`

            e.classList.add('active')

            btn_reset.classList.remove('unactive')

            tip_div.style.pointerEvents = 'none'
            bill_div.style.pointerEvents = 'none'
            people_div.style.pointerEvents = 'none'
        } else {
            input_people.classList.add("error")
            error_span.textContent = "Can't be zero"
        }

    }
}

function customSubmit(tip) {
    if (input_bill.value) {
        if (input_people.value > 0) {
            let bill_amount = input_bill.value
            let people_amount = input_people.value

            let person_tip_amount = (bill_amount * tip / people_amount).toFixed(2)
            let person_total_amount = (bill_amount / people_amount).toFixed(2)

            summary_tip.textContent = `$${person_tip_amount}`
            summary_total.textContent = `$${person_total_amount}`

            btn_custom.classList.add('active')

            btn_reset.classList.remove('unactive')

            tip_div.style.pointerEvents = 'none'
        } else {
            input_people.classList.add("error")
            error_span.textContent = "Can't be zero"
        }

    }
}

function reset() {
    summary_tip.textContent = `$0.00`
    summary_total.textContent = `$0.00`
    input_bill.value = ""
    input_people.value = ""
    btn_custom.value = ""

    btn_5.classList.remove('active')
    btn_10.classList.remove('active')
    btn_15.classList.remove('active')
    btn_25.classList.remove('active')
    btn_50.classList.remove('active')
    btn_custom.classList.remove('active')

    btn_reset.classList.add('unactive')

    tip_div.style.pointerEvents = 'auto'
    bill_div.style.pointerEvents = 'auto'
    people_div.style.pointerEvents = 'auto'
}


btn_5.addEventListener('click', event => {
    submit(event.target)
})
btn_10.addEventListener('click', event => {
    submit(event.target)
})
btn_15.addEventListener('click', event => {
    submit(event.target)
})
btn_25.addEventListener('click', event => {
    submit(event.target)
})
btn_50.addEventListener('click', event => {
    submit(event.target)
})
btn_custom.addEventListener("keyup", ({
    key
}) => {
    if (key === "Enter") {
        let tip = btn_custom.value / 100
        customSubmit(tip)
    }
})

input_people.addEventListener('focus', () => {
    input_people.classList.remove('error')
    error_span.textContent = ""
})

btn_reset.addEventListener('click', () => reset())