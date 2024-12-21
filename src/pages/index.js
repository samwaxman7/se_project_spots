import "./index.css";
import {
  disableButton,
  enableValidation,
  settings,
  resetValidation,
} from "../scripts/validation.js";
import Api from "../utils/Api.js";
import setButtonText from "../utils/helpers.js";

// const initialCards = [
//   {
//     name: "Val Thorens",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
//   {
//     name: "Restaurant terrace",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
//   },
//   {
//     name: "An outdoor cafe",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
//   },
//   {
//     name: "A very long bridge, over the forest and through the trees",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
//   },
//   {
//     name: "Tunnel with morning light",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
//   },
//   {
//     name: "Mountain house",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
//   },
//   {
//     name: "Golden Gate bridge",
//     link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
//   },
// ];

const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "5245a489-af25-4cde-8c45-a659361cb9e9",
    "Content-Type": "application/json",
  },
});

api
  .getAppInfo()
  .then(([cards, { name, about, avatar }]) => {
    cards.forEach((item) => {
      const cardElement = getCardElement(item);
      cardsList.append(cardElement);
    });
    profileName.textContent = name;
    profileDescription.textContent = about;
    profileAvatar.setAttribute("src", avatar);
  })
  .catch((err) => {
    console.error(err);
  });

// Profile elements
const editModalButton = document.querySelector(".profile__edit-button");
const cardModalButton = document.querySelector(".profile__post-button");
const avatarModalButton = document.querySelector(".profile__avatar-button");
const profileAvatar = document.querySelector(".profile__avatar");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

const modals = [...document.querySelectorAll(".modal")];

// Edit profile elements
const editModal = document.querySelector("#edit-modal");
const editFormElement = editModal.querySelector("#edit-profile-form");
const editModalCloseButton = editModal.querySelector(".modal__close-button");
const editModalNameInput = editModal.querySelector("#profile-name-input");
const editModalDescriptionInput = editModal.querySelector(
  "#profile-description-input"
);
const editSubmitButton = editModal.querySelector(".modal__submit-button");

// Avatar form elements
const avatarModal = document.querySelector("#avatar-modal");
const avatarModalCloseButton = avatarModal.querySelector(
  ".modal__close-button"
);
const avatarSubmitButton = avatarModal.querySelector(".modal__submit-button");
const avatarFormElement = avatarModal.querySelector("#edit-avatar-form");
const avatarInput = avatarModal.querySelector("#profile-avatar-input");

// delete modal elements
const deleteModal = document.querySelector("#delete-modal");
const deleteButton = deleteModal.querySelector(".modal__delete-button");
const deleteForm = deleteModal.querySelector(".modal__form");

//Card related elements
const cardModal = document.querySelector("#add-card-modal");
const cardModalCloseButton = cardModal.querySelector(".modal__close-button");
const cardSubmitButton = cardModal.querySelector(".modal__submit-button");
const cardFormElement = cardModal.querySelector("#add-card-form");
const cardTemplate = document.querySelector("#card-template");
const cardsList = document.querySelector(".cards__list");
const cardNameInput = cardModal.querySelector("#add-card-name-input");
const cardLinkInput = cardModal.querySelector("#add-card-link-input");

//card preview elements
const modalPreview = document.querySelector("#preview-modal");
const modalPreviewCloseButton = modalPreview.querySelector(
  ".modal__close-button_type_preview"
);
const modalPreviewImage = modalPreview.querySelector(".modal__image");
const modalPreviewCaption = modalPreview.querySelector(".modal__caption");

let selectedCard;
let selectedCardId;

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardNameEl = cardElement.querySelector(".card__title");
  const cardImageEl = cardElement.querySelector(".card__image");
  const cardLikeButton = cardElement.querySelector(".card__like-button");
  const cardDeleteButton = cardElement.querySelector(".card__delete-button");
  let isLiked = data.isLiked;

  if (isLiked) {
    cardLikeButton.classList.add("card__like-button_liked");
  }

  cardNameEl.textContent = data.name;
  cardImageEl.setAttribute("src", data.link);
  cardImageEl.setAttribute("alt", data.name);

  cardLikeButton.addEventListener("click", () => handleLikeButton(data._id));

  function handleLikeButton(cardId) {
    api
      .changeLikeStatus(cardId, isLiked)
      .then(() => {
        cardLikeButton.classList.toggle("card__like-button_liked");
        isLiked = !isLiked;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  cardDeleteButton.addEventListener("click", () =>
    handleDeleteCard(cardElement, data._id)
  );

  function handleDeleteCard(cardElement, cardId) {
    selectedCard = cardElement;
    selectedCardId = cardId;
    openModal(deleteModal);
  }

  cardImageEl.addEventListener("click", () => {
    openModal(modalPreview);
    modalPreviewCaption.textContent = data.name;
    modalPreviewImage.setAttribute("src", data.link);
    modalPreviewImage.setAttribute("alt", data.name);
  });
  return cardElement;
}

function clickCloseModal(evt) {
  modals.forEach((modal) => {
    if (
      evt.target === modal ||
      evt.target.classList.contains("modal__close-button") ||
      evt.target.classList.contains("modal__cancel-button")
    ) {
      closeModal(modal);
    }
  });
}

function escapeCloseModal(evt) {
  modals.forEach((modal) => {
    if (evt.key === "Escape") {
      closeModal(modal);
    }
  });
}

function openModal(modal) {
  modal.classList.add("modal_opened");
  document.addEventListener("keydown", escapeCloseModal);
  modal.addEventListener("mousedown", clickCloseModal);
}

function closeModal(modal) {
  modal.classList.remove("modal_opened");
  document.removeEventListener("keydown", escapeCloseModal);
  modal.removeEventListener("mousedown", clickCloseModal);
}

function handleEditFormSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  setButtonText(submitButton, true);
  api
    .editUserInfo({
      name: editModalNameInput.value,
      about: editModalDescriptionInput.value,
    })
    .then((data) => {
      profileName.textContent = data.name;
      profileDescription.textContent = data.about;
      disableButton(editSubmitButton, settings);
      closeModal(editModal);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(submitButton, false);
    });
}

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  setButtonText(submitButton, true);
  api
    .editUserAvatar({
      avatar: avatarInput.value,
    })
    .then((data) => {
      profileAvatar.setAttribute("src", data.avatar);
      closeModal(avatarModal);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(submitButton, false);
    });
}

function handleAddFormSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  setButtonText(submitButton, true);
  const submitData = {
    name: cardNameInput.value,
    link: cardLinkInput.value,
  };
  api
    .createCard(submitData)
    .then((data) => {
      const cardElement = getCardElement(data);
      cardsList.prepend(cardElement);
      evt.target.reset();
      disableButton(cardSubmitButton, settings);
      closeModal(cardModal);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(submitButton, false);
    });
}

function handleDeleteSubmit(evt) {
  evt.preventDefault();
  const submitButton = evt.submitter;
  setButtonText(submitButton, true, "Deleting...", "Delete");
  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
      closeModal(deleteModal);
    })
    .catch(console.error)
    .finally(() => {
      setButtonText(submitButton, false, "Deleting...", "Delete");
    });
}

editModalButton.addEventListener("click", () => {
  editModalNameInput.value = profileName.textContent;
  editModalDescriptionInput.value = profileDescription.textContent;
  resetValidation(
    editFormElement,
    [editModalNameInput, editModalDescriptionInput],
    settings
  );
  openModal(editModal);
});

editFormElement.addEventListener("submit", handleEditFormSubmit);

deleteForm.addEventListener("submit", handleDeleteSubmit);

avatarModalButton.addEventListener("click", () => {
  openModal(avatarModal);
});

avatarFormElement.addEventListener("submit", handleAvatarSubmit);

cardModalButton.addEventListener("click", () => {
  openModal(cardModal);
});

cardFormElement.addEventListener("submit", handleAddFormSubmit);

enableValidation(settings);
