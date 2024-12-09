!function(){"use strict";const e={formSelector:".modal__form",inputSelector:".modal__input",submitButtonSelector:".modal__submit-button",inactiveButtonClass:"modal__submit-button_inactive",inactiveButtonClassHover:"modal__submit-button_inactive:hover",inputErrorClass:"modal__input_type_error",errorClass:"modal__error"},t=(e,t,o)=>{const n=e.querySelector(`#${t.id}-error`);t.classList.remove(o.inputErrorClass),n.textContent=""},o=(e,t,o)=>{(e=>e.some((e=>!e.validity.valid)))(e)?n(t,o):(t.classList.remove([o.inactiveButtonClass]),t.classList.remove(o.inactiveButtonClassHover),t.disabled=!1)},n=(e,t)=>{e.classList.add(t.inactiveButtonClass),e.classList.add(t.inactiveButtonClassHover),e.disabled=!0},r=document.querySelector(".profile__edit-button"),a=document.querySelector(".profile__post-button"),s=document.querySelector(".profile__name"),c=document.querySelector(".profile__description"),i=[...document.querySelectorAll(".modal")],l=document.querySelector("#edit-modal"),u=l.querySelector("#edit-profile-form"),d=(l.querySelector(".modal__close-button"),l.querySelector("#profile-name-input")),m=l.querySelector("#profile-description-input"),p=document.querySelector("#add-card-modal"),_=(p.querySelector(".modal__close-button"),p.querySelector(".modal__submit-button")),f=p.querySelector("#add-card-form"),v=document.querySelector("#card-template"),y=document.querySelector(".cards__list"),b=p.querySelector("#add-card-name-input"),S=p.querySelector("#add-card-link-input"),g=document.querySelector("#preview-modal"),q=(g.querySelector(".modal__close-button_type_preview"),g.querySelector(".modal__image")),h=g.querySelector(".modal__caption");function w(e){const t=v.content.querySelector(".card").cloneNode(!0),o=t.querySelector(".card__title"),n=t.querySelector(".card__image"),r=t.querySelector(".card__like-button"),a=t.querySelector(".card__delete-button");return o.textContent=e.name,n.setAttribute("src",e.link),n.setAttribute("alt",e.name),r.addEventListener("click",(()=>{r.classList.toggle("card__like-button_liked")})),a.addEventListener("click",(function(e){t.remove()})),n.addEventListener("click",(()=>{L(g),h.textContent=e.name,q.setAttribute("src",e.link),q.setAttribute("alt",e.name)})),t}function k(e){i.forEach((t=>{(e.target===t||e.target.classList.contains("modal__close-button"))&&C(t)}))}function E(e){i.forEach((t=>{"Escape"===e.key&&C(t)}))}function L(e){e.classList.add("modal_opened"),document.addEventListener("keydown",E),e.addEventListener("mousedown",k)}function C(e){e.classList.remove("modal_opened"),document.removeEventListener("keydown",E),e.removeEventListener("mousedown",k)}var x;[{name:"Val Thorens",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg"},{name:"Restaurant terrace",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg"},{name:"An outdoor cafe",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg"},{name:"A very long bridge, over the forest and through the trees",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg"},{name:"Tunnel with morning light",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg"},{name:"Mountain house",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg"},{name:"Golden Gate bridge",link:"https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg"}].forEach((e=>{const t=w(e);y.append(t)})),r.addEventListener("click",(()=>{var o,n;d.value=s.textContent,m.value=c.textContent,o=u,n=e,[d,m].forEach((e=>{t(o,e,n)})),L(l)})),u.addEventListener("submit",(function(e){e.preventDefault(),s.textContent=d.value,c.textContent=m.value,C(l)})),a.addEventListener("click",(()=>{L(p)})),f.addEventListener("submit",(function(t){t.preventDefault();const o=w({name:b.value,link:S.value});y.prepend(o),t.target.reset(),disableButton(_,e),C(p)})),x=e,Array.from(document.querySelectorAll(x.formSelector)).forEach((e=>{((e,n)=>{const r=Array.from(e.querySelectorAll(n.inputSelector)),a=e.querySelector(n.submitButtonSelector);o(r,a,n),r.forEach((s=>{s.addEventListener("input",(function(){((e,o,n)=>{o.validity.valid?t(e,o,n):((e,t,o,n)=>{const r=e.querySelector(`#${t.id}-error`);t.classList.add(n.inputErrorClass),r.textContent=o})(e,o,o.validationMessage,n)})(e,s,n),o(r,a,n)}))}))})(e,x)}))}();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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YUUsRUFBTyxHIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy8uL3NyYy9zY3JpcHRzL3ZhbGlkYXRpb24uanMiLCJ3ZWJwYWNrOi8vc2VfcHJvamVjdF9zcG90cy8uL3NyYy9wYWdlcy9pbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3Qgc2V0dGluZ3MgPSB7XG4gIGZvcm1TZWxlY3RvcjogXCIubW9kYWxfX2Zvcm1cIixcbiAgaW5wdXRTZWxlY3RvcjogXCIubW9kYWxfX2lucHV0XCIsXG4gIHN1Ym1pdEJ1dHRvblNlbGVjdG9yOiBcIi5tb2RhbF9fc3VibWl0LWJ1dHRvblwiLFxuICBpbmFjdGl2ZUJ1dHRvbkNsYXNzOiBcIm1vZGFsX19zdWJtaXQtYnV0dG9uX2luYWN0aXZlXCIsXG4gIGluYWN0aXZlQnV0dG9uQ2xhc3NIb3ZlcjogXCJtb2RhbF9fc3VibWl0LWJ1dHRvbl9pbmFjdGl2ZTpob3ZlclwiLFxuICBpbnB1dEVycm9yQ2xhc3M6IFwibW9kYWxfX2lucHV0X3R5cGVfZXJyb3JcIixcbiAgZXJyb3JDbGFzczogXCJtb2RhbF9fZXJyb3JcIixcbn07XG5cbmNvbnN0IHNob3dJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGVycm9yTWVzc2FnZSwgY29uZmlnKSA9PiB7XG4gIGNvbnN0IGVycm9yRWxlbWVudCA9IGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYCMke2lucHV0RWxlbWVudC5pZH0tZXJyb3JgKTtcbiAgaW5wdXRFbGVtZW50LmNsYXNzTGlzdC5hZGQoY29uZmlnLmlucHV0RXJyb3JDbGFzcyk7XG4gIGVycm9yRWxlbWVudC50ZXh0Q29udGVudCA9IGVycm9yTWVzc2FnZTtcbn07XG5cbmNvbnN0IGhpZGVJbnB1dEVycm9yID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBjb25zdCBlcnJvckVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGAjJHtpbnB1dEVsZW1lbnQuaWR9LWVycm9yYCk7XG4gIGlucHV0RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGNvbmZpZy5pbnB1dEVycm9yQ2xhc3MpO1xuICBlcnJvckVsZW1lbnQudGV4dENvbnRlbnQgPSBcIlwiO1xufTtcblxuY29uc3QgY2hlY2tJbnB1dFZhbGlkaXR5ID0gKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBpZiAoIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZCkge1xuICAgIHNob3dJbnB1dEVycm9yKFxuICAgICAgZm9ybUVsZW1lbnQsXG4gICAgICBpbnB1dEVsZW1lbnQsXG4gICAgICBpbnB1dEVsZW1lbnQudmFsaWRhdGlvbk1lc3NhZ2UsXG4gICAgICBjb25maWdcbiAgICApO1xuICB9IGVsc2Uge1xuICAgIGhpZGVJbnB1dEVycm9yKGZvcm1FbGVtZW50LCBpbnB1dEVsZW1lbnQsIGNvbmZpZyk7XG4gIH1cbn07XG5cbmNvbnN0IGhhc0ludmFsaWRJbnB1dCA9IChpbnB1dExpc3QpID0+IHtcbiAgcmV0dXJuIGlucHV0TGlzdC5zb21lKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICByZXR1cm4gIWlucHV0RWxlbWVudC52YWxpZGl0eS52YWxpZDtcbiAgfSk7XG59O1xuXG5jb25zdCB0b2dnbGVCdXR0b25TdGF0ZSA9IChpbnB1dExpc3QsIGJ1dHRvbkVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBpZiAoaGFzSW52YWxpZElucHV0KGlucHV0TGlzdCkpIHtcbiAgICBkaXNhYmxlQnV0dG9uKGJ1dHRvbkVsZW1lbnQsIGNvbmZpZyk7XG4gIH0gZWxzZSB7XG4gICAgYnV0dG9uRWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFtjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzc10pO1xuICAgIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzc0hvdmVyKTtcbiAgICBidXR0b25FbGVtZW50LmRpc2FibGVkID0gZmFsc2U7XG4gIH1cbn07XG5cbmNvbnN0IGRpc2FibGVCdXR0b24gPSAoYnV0dG9uRWxlbWVudCwgY29uZmlnKSA9PiB7XG4gIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzcyk7XG4gIGJ1dHRvbkVsZW1lbnQuY2xhc3NMaXN0LmFkZChjb25maWcuaW5hY3RpdmVCdXR0b25DbGFzc0hvdmVyKTtcbiAgYnV0dG9uRWxlbWVudC5kaXNhYmxlZCA9IHRydWU7XG59O1xuXG5leHBvcnQgY29uc3QgcmVzZXRWYWxpZGF0aW9uID0gKGZvcm1FbGVtZW50LCBpbnB1dExpc3QsIGNvbmZpZykgPT4ge1xuICBpbnB1dExpc3QuZm9yRWFjaCgoaW5wdXQpID0+IHtcbiAgICBoaWRlSW5wdXRFcnJvcihmb3JtRWxlbWVudCwgaW5wdXQsIGNvbmZpZyk7XG4gIH0pO1xufTtcblxuY29uc3Qgc2V0RXZlbnRMaXN0ZW5lcnMgPSAoZm9ybUVsZW1lbnQsIGNvbmZpZykgPT4ge1xuICBjb25zdCBpbnB1dExpc3QgPSBBcnJheS5mcm9tKFxuICAgIGZvcm1FbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoY29uZmlnLmlucHV0U2VsZWN0b3IpXG4gICk7XG4gIGNvbnN0IGJ1dHRvbkVsZW1lbnQgPSBmb3JtRWxlbWVudC5xdWVyeVNlbGVjdG9yKGNvbmZpZy5zdWJtaXRCdXR0b25TZWxlY3Rvcik7XG5cbiAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpO1xuXG4gIGlucHV0TGlzdC5mb3JFYWNoKChpbnB1dEVsZW1lbnQpID0+IHtcbiAgICBpbnB1dEVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImlucHV0XCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgIGNoZWNrSW5wdXRWYWxpZGl0eShmb3JtRWxlbWVudCwgaW5wdXRFbGVtZW50LCBjb25maWcpO1xuICAgICAgdG9nZ2xlQnV0dG9uU3RhdGUoaW5wdXRMaXN0LCBidXR0b25FbGVtZW50LCBjb25maWcpO1xuICAgIH0pO1xuICB9KTtcbn07XG5cbmV4cG9ydCBjb25zdCBlbmFibGVWYWxpZGF0aW9uID0gKGNvbmZpZykgPT4ge1xuICBjb25zdCBmb3JtTGlzdCA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjb25maWcuZm9ybVNlbGVjdG9yKSk7XG4gIGZvcm1MaXN0LmZvckVhY2goKGZvcm1FbGVtZW50KSA9PiB7XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoZm9ybUVsZW1lbnQsIGNvbmZpZyk7XG4gIH0pO1xufTtcbiIsImltcG9ydCBcIi4vaW5kZXguY3NzXCI7XG5pbXBvcnQge1xuICBlbmFibGVWYWxpZGF0aW9uLFxuICBzZXR0aW5ncyxcbiAgcmVzZXRWYWxpZGF0aW9uLFxufSBmcm9tIFwiLi4vc2NyaXB0cy92YWxpZGF0aW9uLmpzXCI7XG5cbmNvbnN0IGluaXRpYWxDYXJkcyA9IFtcbiAge1xuICAgIG5hbWU6IFwiVmFsIFRob3JlbnNcIixcbiAgICBsaW5rOiBcImh0dHBzOi8vcHJhY3RpY3VtLWNvbnRlbnQuczMudXMtd2VzdC0xLmFtYXpvbmF3cy5jb20vc29mdHdhcmUtZW5naW5lZXIvc3BvdHMvMS1waG90by1ieS1tb3JpdHotZmVsZG1hbm4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIlJlc3RhdXJhbnQgdGVycmFjZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8yLXBob3RvLWJ5LWNlaWxpbmUtZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkFuIG91dGRvb3IgY2FmZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy8zLXBob3RvLWJ5LXR1YmFudXItZG9nYW4tZnJvbS1wZXhlbHMuanBnXCIsXG4gIH0sXG4gIHtcbiAgICBuYW1lOiBcIkEgdmVyeSBsb25nIGJyaWRnZSwgb3ZlciB0aGUgZm9yZXN0IGFuZCB0aHJvdWdoIHRoZSB0cmVlc1wiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy80LXBob3RvLWJ5LW1hdXJpY2UtbGFzY2hldC1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiVHVubmVsIHdpdGggbW9ybmluZyBsaWdodFwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy81LXBob3RvLWJ5LXZhbi1hbmgtbmd1eWVuLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuICB7XG4gICAgbmFtZTogXCJNb3VudGFpbiBob3VzZVwiLFxuICAgIGxpbms6IFwiaHR0cHM6Ly9wcmFjdGljdW0tY29udGVudC5zMy51cy13ZXN0LTEuYW1hem9uYXdzLmNvbS9zb2Z0d2FyZS1lbmdpbmVlci9zcG90cy82LXBob3RvLWJ5LW1vcml0ei1mZWxkbWFubi1mcm9tLXBleGVscy5qcGdcIixcbiAgfSxcbiAge1xuICAgIG5hbWU6IFwiR29sZGVuIEdhdGUgYnJpZGdlXCIsXG4gICAgbGluazogXCJodHRwczovL3ByYWN0aWN1bS1jb250ZW50LnMzLnVzLXdlc3QtMS5hbWF6b25hd3MuY29tL3NvZnR3YXJlLWVuZ2luZWVyL3Nwb3RzLzctcGhvdG8tYnktZ3JpZmZpbi13b29sZHJpZGdlLWZyb20tcGV4ZWxzLmpwZ1wiLFxuICB9LFxuXTtcblxuLy8gUHJvZmlsZSBlbGVtZW50c1xuY29uc3QgZWRpdE1vZGFsQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5wcm9maWxlX19lZGl0LWJ1dHRvblwiKTtcbmNvbnN0IGNhcmRNb2RhbEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fcG9zdC1idXR0b25cIik7XG5jb25zdCBwcm9maWxlTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fbmFtZVwiKTtcbmNvbnN0IHByb2ZpbGVEZXNjcmlwdGlvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIucHJvZmlsZV9fZGVzY3JpcHRpb25cIik7XG5cbmNvbnN0IG1vZGFscyA9IFsuLi5kb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLm1vZGFsXCIpXTtcblxuLy8gZm9ybSBlbGVtZW50c1xuY29uc3QgZWRpdE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNlZGl0LW1vZGFsXCIpO1xuY29uc3QgZWRpdEZvcm1FbGVtZW50ID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIjZWRpdC1wcm9maWxlLWZvcm1cIik7XG5jb25zdCBlZGl0TW9kYWxDbG9zZUJ1dHRvbiA9IGVkaXRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idXR0b25cIik7XG5jb25zdCBlZGl0TW9kYWxOYW1lSW5wdXQgPSBlZGl0TW9kYWwucXVlcnlTZWxlY3RvcihcIiNwcm9maWxlLW5hbWUtaW5wdXRcIik7XG5jb25zdCBlZGl0TW9kYWxEZXNjcmlwdGlvbklucHV0ID0gZWRpdE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXG4gIFwiI3Byb2ZpbGUtZGVzY3JpcHRpb24taW5wdXRcIlxuKTtcblxuLy9DYXJkIHJlbGF0ZWQgZWxlbWVudHNcbmNvbnN0IGNhcmRNb2RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIjYWRkLWNhcmQtbW9kYWxcIik7XG5jb25zdCBjYXJkTW9kYWxDbG9zZUJ1dHRvbiA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiLm1vZGFsX19jbG9zZS1idXR0b25cIik7XG5jb25zdCBjYXJkU3VibWl0QnV0dG9uID0gY2FyZE1vZGFsLnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX3N1Ym1pdC1idXR0b25cIik7XG5jb25zdCBjYXJkRm9ybUVsZW1lbnQgPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1mb3JtXCIpO1xuY29uc3QgY2FyZFRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYXJkLXRlbXBsYXRlXCIpO1xuY29uc3QgY2FyZHNMaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkc19fbGlzdFwiKTtcbmNvbnN0IGNhcmROYW1lSW5wdXQgPSBjYXJkTW9kYWwucXVlcnlTZWxlY3RvcihcIiNhZGQtY2FyZC1uYW1lLWlucHV0XCIpO1xuY29uc3QgY2FyZExpbmtJbnB1dCA9IGNhcmRNb2RhbC5xdWVyeVNlbGVjdG9yKFwiI2FkZC1jYXJkLWxpbmstaW5wdXRcIik7XG5cbi8vY2FyZCBwcmV2aWV3IGVsZW1lbnRzXG5jb25zdCBtb2RhbFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3ByZXZpZXctbW9kYWxcIik7XG5jb25zdCBtb2RhbFByZXZpZXdDbG9zZUJ1dHRvbiA9IG1vZGFsUHJldmlldy5xdWVyeVNlbGVjdG9yKFxuICBcIi5tb2RhbF9fY2xvc2UtYnV0dG9uX3R5cGVfcHJldmlld1wiXG4pO1xuY29uc3QgbW9kYWxQcmV2aWV3SW1hZ2UgPSBtb2RhbFByZXZpZXcucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9faW1hZ2VcIik7XG5jb25zdCBtb2RhbFByZXZpZXdDYXB0aW9uID0gbW9kYWxQcmV2aWV3LnF1ZXJ5U2VsZWN0b3IoXCIubW9kYWxfX2NhcHRpb25cIik7XG5cbmZ1bmN0aW9uIGdldENhcmRFbGVtZW50KGRhdGEpIHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBjYXJkVGVtcGxhdGUuY29udGVudFxuICAgIC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRcIilcbiAgICAuY2xvbmVOb2RlKHRydWUpO1xuXG4gIGNvbnN0IGNhcmROYW1lRWwgPSBjYXJkRWxlbWVudC5xdWVyeVNlbGVjdG9yKFwiLmNhcmRfX3RpdGxlXCIpO1xuICBjb25zdCBjYXJkSW1hZ2VFbCA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9faW1hZ2VcIik7XG4gIGNvbnN0IGNhcmRMaWtlQnV0dG9uID0gY2FyZEVsZW1lbnQucXVlcnlTZWxlY3RvcihcIi5jYXJkX19saWtlLWJ1dHRvblwiKTtcbiAgY29uc3QgY2FyZERlbGV0ZUJ1dHRvbiA9IGNhcmRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuY2FyZF9fZGVsZXRlLWJ1dHRvblwiKTtcbiAgY2FyZE5hbWVFbC50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgY2FyZEltYWdlRWwuc2V0QXR0cmlidXRlKFwic3JjXCIsIGRhdGEubGluayk7XG4gIGNhcmRJbWFnZUVsLnNldEF0dHJpYnV0ZShcImFsdFwiLCBkYXRhLm5hbWUpO1xuXG4gIGNhcmRMaWtlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgY2FyZExpa2VCdXR0b24uY2xhc3NMaXN0LnRvZ2dsZShcImNhcmRfX2xpa2UtYnV0dG9uX2xpa2VkXCIpO1xuICB9KTtcblxuICBjYXJkRGVsZXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVEZWxldGVDYXJkKTtcbiAgZnVuY3Rpb24gaGFuZGxlRGVsZXRlQ2FyZChldnQpIHtcbiAgICBjYXJkRWxlbWVudC5yZW1vdmUoKTtcbiAgfVxuXG4gIGNhcmRJbWFnZUVsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKSA9PiB7XG4gICAgb3Blbk1vZGFsKG1vZGFsUHJldmlldyk7XG4gICAgbW9kYWxQcmV2aWV3Q2FwdGlvbi50ZXh0Q29udGVudCA9IGRhdGEubmFtZTtcbiAgICBtb2RhbFByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJzcmNcIiwgZGF0YS5saW5rKTtcbiAgICBtb2RhbFByZXZpZXdJbWFnZS5zZXRBdHRyaWJ1dGUoXCJhbHRcIiwgZGF0YS5uYW1lKTtcbiAgfSk7XG4gIHJldHVybiBjYXJkRWxlbWVudDtcbn1cblxuaW5pdGlhbENhcmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgY29uc3QgY2FyZEVsZW1lbnQgPSBnZXRDYXJkRWxlbWVudChpdGVtKTtcbiAgY2FyZHNMaXN0LmFwcGVuZChjYXJkRWxlbWVudCk7XG59KTtcblxuZnVuY3Rpb24gY2xpY2tDbG9zZU1vZGFsKGV2dCkge1xuICBtb2RhbHMuZm9yRWFjaCgobW9kYWwpID0+IHtcbiAgICBpZiAoXG4gICAgICBldnQudGFyZ2V0ID09PSBtb2RhbCB8fFxuICAgICAgZXZ0LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJtb2RhbF9fY2xvc2UtYnV0dG9uXCIpXG4gICAgKSB7XG4gICAgICBjbG9zZU1vZGFsKG1vZGFsKTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBlc2NhcGVDbG9zZU1vZGFsKGV2dCkge1xuICBtb2RhbHMuZm9yRWFjaCgobW9kYWwpID0+IHtcbiAgICBpZiAoZXZ0LmtleSA9PT0gXCJFc2NhcGVcIikge1xuICAgICAgY2xvc2VNb2RhbChtb2RhbCk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gb3Blbk1vZGFsKG1vZGFsKSB7XG4gIG1vZGFsLmNsYXNzTGlzdC5hZGQoXCJtb2RhbF9vcGVuZWRcIik7XG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIGVzY2FwZUNsb3NlTW9kYWwpO1xuICBtb2RhbC5hZGRFdmVudExpc3RlbmVyKFwibW91c2Vkb3duXCIsIGNsaWNrQ2xvc2VNb2RhbCk7XG59XG5cbmZ1bmN0aW9uIGNsb3NlTW9kYWwobW9kYWwpIHtcbiAgbW9kYWwuY2xhc3NMaXN0LnJlbW92ZShcIm1vZGFsX29wZW5lZFwiKTtcbiAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImtleWRvd25cIiwgZXNjYXBlQ2xvc2VNb2RhbCk7XG4gIG1vZGFsLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJtb3VzZWRvd25cIiwgY2xpY2tDbG9zZU1vZGFsKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlRWRpdEZvcm1TdWJtaXQoZXZ0KSB7XG4gIGV2dC5wcmV2ZW50RGVmYXVsdCgpO1xuICBwcm9maWxlTmFtZS50ZXh0Q29udGVudCA9IGVkaXRNb2RhbE5hbWVJbnB1dC52YWx1ZTtcbiAgcHJvZmlsZURlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dC52YWx1ZTtcbiAgY2xvc2VNb2RhbChlZGl0TW9kYWwpO1xufVxuXG5mdW5jdGlvbiBoYW5kbGVBZGRGb3JtU3VibWl0KGV2dCkge1xuICBldnQucHJldmVudERlZmF1bHQoKTtcbiAgY29uc3Qgc3VibWl0RGF0YSA9IHtcbiAgICBuYW1lOiBjYXJkTmFtZUlucHV0LnZhbHVlLFxuICAgIGxpbms6IGNhcmRMaW5rSW5wdXQudmFsdWUsXG4gIH07XG4gIGNvbnN0IGNhcmRFbGVtZW50ID0gZ2V0Q2FyZEVsZW1lbnQoc3VibWl0RGF0YSk7XG4gIGNhcmRzTGlzdC5wcmVwZW5kKGNhcmRFbGVtZW50KTtcbiAgZXZ0LnRhcmdldC5yZXNldCgpO1xuICBkaXNhYmxlQnV0dG9uKGNhcmRTdWJtaXRCdXR0b24sIHNldHRpbmdzKTtcbiAgY2xvc2VNb2RhbChjYXJkTW9kYWwpO1xufVxuXG5lZGl0TW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgZWRpdE1vZGFsTmFtZUlucHV0LnZhbHVlID0gcHJvZmlsZU5hbWUudGV4dENvbnRlbnQ7XG4gIGVkaXRNb2RhbERlc2NyaXB0aW9uSW5wdXQudmFsdWUgPSBwcm9maWxlRGVzY3JpcHRpb24udGV4dENvbnRlbnQ7XG4gIHJlc2V0VmFsaWRhdGlvbihcbiAgICBlZGl0Rm9ybUVsZW1lbnQsXG4gICAgW2VkaXRNb2RhbE5hbWVJbnB1dCwgZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dF0sXG4gICAgc2V0dGluZ3NcbiAgKTtcbiAgb3Blbk1vZGFsKGVkaXRNb2RhbCk7XG59KTtcblxuZWRpdEZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlRWRpdEZvcm1TdWJtaXQpO1xuXG5jYXJkTW9kYWxCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgpID0+IHtcbiAgb3Blbk1vZGFsKGNhcmRNb2RhbCk7XG59KTtcblxuY2FyZEZvcm1FbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJzdWJtaXRcIiwgaGFuZGxlQWRkRm9ybVN1Ym1pdCk7XG5cbmVuYWJsZVZhbGlkYXRpb24oc2V0dGluZ3MpO1xuIl0sIm5hbWVzIjpbInNldHRpbmdzIiwiZm9ybVNlbGVjdG9yIiwiaW5wdXRTZWxlY3RvciIsInN1Ym1pdEJ1dHRvblNlbGVjdG9yIiwiaW5hY3RpdmVCdXR0b25DbGFzcyIsImluYWN0aXZlQnV0dG9uQ2xhc3NIb3ZlciIsImlucHV0RXJyb3JDbGFzcyIsImVycm9yQ2xhc3MiLCJoaWRlSW5wdXRFcnJvciIsImZvcm1FbGVtZW50IiwiaW5wdXRFbGVtZW50IiwiY29uZmlnIiwiZXJyb3JFbGVtZW50IiwicXVlcnlTZWxlY3RvciIsImlkIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwidGV4dENvbnRlbnQiLCJ0b2dnbGVCdXR0b25TdGF0ZSIsImlucHV0TGlzdCIsImJ1dHRvbkVsZW1lbnQiLCJzb21lIiwidmFsaWRpdHkiLCJ2YWxpZCIsImhhc0ludmFsaWRJbnB1dCIsImRpc2FibGVCdXR0b24iLCJkaXNhYmxlZCIsImFkZCIsImVkaXRNb2RhbEJ1dHRvbiIsImRvY3VtZW50IiwiY2FyZE1vZGFsQnV0dG9uIiwicHJvZmlsZU5hbWUiLCJwcm9maWxlRGVzY3JpcHRpb24iLCJtb2RhbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZWRpdE1vZGFsIiwiZWRpdEZvcm1FbGVtZW50IiwiZWRpdE1vZGFsTmFtZUlucHV0IiwiZWRpdE1vZGFsRGVzY3JpcHRpb25JbnB1dCIsImNhcmRNb2RhbCIsImNhcmRTdWJtaXRCdXR0b24iLCJjYXJkRm9ybUVsZW1lbnQiLCJjYXJkVGVtcGxhdGUiLCJjYXJkc0xpc3QiLCJjYXJkTmFtZUlucHV0IiwiY2FyZExpbmtJbnB1dCIsIm1vZGFsUHJldmlldyIsIm1vZGFsUHJldmlld0ltYWdlIiwibW9kYWxQcmV2aWV3Q2FwdGlvbiIsImdldENhcmRFbGVtZW50IiwiZGF0YSIsImNhcmRFbGVtZW50IiwiY29udGVudCIsImNsb25lTm9kZSIsImNhcmROYW1lRWwiLCJjYXJkSW1hZ2VFbCIsImNhcmRMaWtlQnV0dG9uIiwiY2FyZERlbGV0ZUJ1dHRvbiIsIm5hbWUiLCJzZXRBdHRyaWJ1dGUiLCJsaW5rIiwiYWRkRXZlbnRMaXN0ZW5lciIsInRvZ2dsZSIsImV2dCIsIm9wZW5Nb2RhbCIsImNsaWNrQ2xvc2VNb2RhbCIsImZvckVhY2giLCJtb2RhbCIsInRhcmdldCIsImNvbnRhaW5zIiwiY2xvc2VNb2RhbCIsImVzY2FwZUNsb3NlTW9kYWwiLCJrZXkiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaXRlbSIsImFwcGVuZCIsInJlc2V0VmFsaWRhdGlvbiIsInZhbHVlIiwiaW5wdXQiLCJwcmV2ZW50RGVmYXVsdCIsInByZXBlbmQiLCJyZXNldCIsIkFycmF5IiwiZnJvbSIsInNldEV2ZW50TGlzdGVuZXJzIiwiY2hlY2tJbnB1dFZhbGlkaXR5Iiwic2hvd0lucHV0RXJyb3IiLCJlcnJvck1lc3NhZ2UiLCJ2YWxpZGF0aW9uTWVzc2FnZSJdLCJzb3VyY2VSb290IjoiIn0=