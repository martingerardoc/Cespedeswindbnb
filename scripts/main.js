import { stays } from "./stays.js";
import { createStayCard } from "./utils.js";

const staysContainer = document.querySelector("#staysContainer")
const staysCount = document.querySelector("#staysCount")

const modal = document.querySelector("#modal")
const openModal = document.querySelector("#openModal")
const closeModal = document.querySelector("#closeModal")

const locationInput = document.querySelector("#locationInput")
const citiesList = document.querySelector("#citiesList")

const plusGuests = document.querySelector("#plusGuests")
const minusGuests = document.querySelector("#minusGuests")
const guestNumber = document.querySelector("#guestNumber")

const searchBtn = document.querySelector("#searchBtn")

let guests = 0

function renderStays(data){
    staysContainer.innerHTML = ""

    data.forEach(stay => {
        staysContainer.innerHTML += createStayCard(stay)
    });

    staysCount.textContent = `${data.length} stays`
}

renderStays(stays)

openModal.addEventListener("click",() => {
    modal.classList.remove("hidden")
})

closeModal.addEventListener("click", () => {
    modal.classList.add("hidden")
})

plusGuests.addEventListener("click", () => {
    guests++
    guestNumber.textContent = guests
})

minusGuests.addEventListener("click", () => {
    if (guests > 0) {
        guests--
        guestNumber.textContent = guests
    }
})

function renderCities() {
    const cities = [ ...new Set(stays.map(stay => stay.city + ", " + stay.country))]
    citiesList.innerHTML = ""

    cities.forEach( city => {
        const item = document.createElement("p")
        item.textContent = city
        item.classList.add("cursor-pointer", "p-2" , "hover:bg-gray-100")

        item.addEventListener("click", () =>{
            locationInput.value = city
        })

            citiesList.appendChild(item)
    })

}

renderCities()

searchBtn.addEventListener("click", () =>{
    const location = locationInput.value

    const filtered = stays.filter (stay =>{
        const cityCountry = stay.city + ", " + stay.country
        return cityCountry.includes(location) && stay.maxGuests >= guests
    })
    renderStays(filtered)
    modal.classList.add("hidden")
})

