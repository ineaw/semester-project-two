import { baseUrl } from "./settings/api.js";
import { getToken } from "./utils/storage.js";
import createMenu from "./components/createMenu.js";
import deleteButton from "./components/articles/deleteButton.js";
import { displayMessage } from "./components/displayMessages.js";

createMenu();

const querystring = document.location.search;

const params = new URLSearchParams(querystring);

const id = params.get("id");

if (!id) {
  document.location.href = "add.js";
}

const productUrl = baseUrl + "products/" + id;

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const image = document.querySelector("#image");
const idInput = document.querySelector("#id");
const message = document.querySelector(".message-container");
const loader = document.querySelector(".loader");

(async function () {
  try {
    const response = await fetch(productUrl);
    const details = await response.json();

    title.value = details.title;
    price.value = details.price;
    image.value = details.image;
    description.value = details.description;
    idInput.value = details.id;

    deleteButton(details.id);
  } catch (error) {
    console.log(error);
  } finally {
    loader.style.display = "none";
    form.style.display = "block";
  }
})();

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = price.value.trim();
  const descriptionValue = description.value.trim();
  const imageValue = image.value;
  const idValue = idInput.value;

  if (titleValue.length === 0 || priceValue.length === 0 || imageValue.length === 0 || descriptionValue.length === 0) {
    return displayMessage("warning", "please supply proper login values", ".message-container");
  }

  updateProduct(titleValue, priceValue, descriptionValue, imageValue, idValue);
}

async function updateProduct(title, price, description, image, id) {
  const url = baseUrl + "products/" + id;

  const data = JSON.stringify({ title: title, price: price, image: image, description: description });

  const token = getToken();

  const options = {
    method: "PUT",
    body: data,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    if (json.created_at) {
      displayMessage("success", "item updated", ".message-container");
    }

    if (json.error) {
      displayMessage("error", "You have to be logged in to perform this action", ".message-container");
    }
  } catch (error) {
    console.log(error);
    displayMessage("error", "An error occured", ".message-container");
  }
}
