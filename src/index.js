function handleSearchSubmit(event) {
    event.prevent.default ();
    let searchInput = document.querySelector("#search-form-input");
    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = searchInput.value;
}

let searchFormElement = document.querySelector("#searcg-form")
searchFormElement.addEventListener("submit",handleSearchSubmit)