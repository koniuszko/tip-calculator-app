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


function submit(tip) {
    let bill_amount = input_bill.value
    let people_amount = input_people.value

    let person_tip_amount = (bill_amount * tip / people_amount).toFixed(2)
    let person_total_amount = (bill_amount / people_amount).toFixed(2)

    summary_tip.textContent = `$${person_tip_amount}`
    summary_total.textContent = `$${person_total_amount}`
}

function reset() {
    summary_tip.textContent = `$0.00`
    summary_total.textContent = `$0.00`
    input_bill.value = ""
    input_people.value = ""
}


btn_5.addEventListener('click', () => submit(0.05))
btn_10.addEventListener('click', () => submit(0.10))
btn_15.addEventListener('click', () => submit(0.15))
btn_25.addEventListener('click', () => submit(0.25))
btn_50.addEventListener('click', () => submit(0.50))
btn_custom.addEventListener("keyup", ({
    key
}) => {
    if (key === "Enter") {
        let tip = btn_custom.value / 100
        submit(tip)
    }
})

btn_reset.addEventListener('click', () => reset())