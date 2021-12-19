import createMenu from "./components/createMenu.js";
import displayMessage from "./components/displayMessages.js";
import { getToken } from "./utils/storage.js";
import { baseUrl } from "./settings/api.js";
import { renderEdit } from "./filter/renderEdit.js";

createMenu();
renderEdit();

const form = document.querySelector("form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const image = document.querySelector("#imageURL");
const description = document.querySelector("#description");
const message = document.querySelector(".message-container");

form.addEventListener("submit", submitForm);

function submitForm(event) {
  event.preventDefault();

  message.innerHTML = "";

  const titleValue = title.value.trim();
  const priceValue = parseInt(price.value);
  const descriptionValue = description.value.trim();
  const imageValue = image.value.trim();

  const cloudName = "iwa";
  const uploadPreset = "bspotaqh";
  const myWidget = cloudinary.createUploadWidget(
    {
      cloudName: cloudName,
      uploadPreset: uploadPreset,
    },
    (error, result) => {
      if (!error && result && result.event === "message--success") {
        console.log("Done! Here is the image info: ", result.info);
        image.value = `${result.info.url}`;
      }
    }
  );
  document.getElementById("imageuploadBtn").addEventListener(
    "click",
    function () {
      myWidget.open();
    },
    false
  );

  if (titleValue.length === 0 || priceValue.length === 0 || descriptionValue.length === 0 || imageValue.length === 0) {
    return displayMessage("message--warning", "please supply proper values", ".message-container");
  }

  addProduct(titleValue, priceValue, descriptionValue, imageValue);
}

async function addProduct(title, price, description, image) {
  const url = baseUrl + "products";
  const data = JSON.stringify({ title: title, price: price, description: description, image_url: image });

  const token = getToken();

  const options = {
    method: "POST",
    body: data,
    headers: {
      "content-type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  try {
    const response = await fetch(url, options);
    const json = await response.json();

    console.log(json);

    if (json.createdAt) {
      displayMessage("message--success", "Product created", ".message-container");
      form.reset();
    }

    if (json.error) {
      displayMessage("message--error", "You have to be logged in to perform this action", ".message-container");
    }
  } catch (error) {
    console.log(error);
    displayMessage("message--error", "An error occured", ".message-container");
  }
}
