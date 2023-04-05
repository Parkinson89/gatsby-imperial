export const openUl = (id) => {
  const button = document.getElementById(id + 100);
  const item = document.getElementById(id);
  if (item.className === "services-block__item-lower-list services-block__item-lower-list--list-hidden") {
    item.classList.remove("services-block__item-lower-list--list-hidden");
    item.classList.add("services-block__item-lower-list--list-show");
    button.classList.add("services-block__item-button--click");
  } else {
    item.classList.remove("services-block__item-lower-list--list-show");
    item.classList.add("services-block__item-lower-list--list-hidden");
    button.classList.remove("services-block__item-button--click");
  }
};
