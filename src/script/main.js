const cardLogo = document.querySelector(".cardLogo");
const bankLogo = document.querySelectorAll(".bankLogo");
const bankName = document.getElementById("bankName");
const inpNumber = document.querySelectorAll(".inp");
const targets = document.querySelectorAll("[data-target]");

// card logo & bank name //
bankLogo.forEach((logo, i) => {
  logo.addEventListener("click", () => {
    cardLogo.src = logo.src;
    switch (i) {
      case 0:
        bankName.innerText = "Pay With Saman Bank";
        break;
      case 1:
        bankName.innerText = "Pay With Mellat Bank";
        break;
      case 2:
        bankName.innerText = "Pay With Pasargad Bank";
        break;
      case 3:
        bankName.innerText = "Pay With Dey Bank";
        break;
      default:
        "Pay With Saman Bank";
        break;
    }
  });
});

// focus inputs //
inpNumber.forEach((inp, i) => {
  inp.addEventListener("input", (e) => {
     inp.value = inp.value.replace(/\D/g, "");
    if (e.code != "Backspace" && inp.value.length === inp.maxLength) {
      const nextInp = document.getElementById(inp.dataset.next);
      if (nextInp) {
        nextInp.focus();
      }
    } else if (e.code === "Backspace" && inp.value.length === 0) {
      const prvInp = document.getElementById(inp.dataset.prv);
      if (prvInp) {
        prvInp.focus();
      }
    }
  });
});

//  show inp value in card //

targets.forEach((target, i) => {
  target.addEventListener("input", (e) => {
    const cardId = document.getElementById(target.dataset.target);
    cardId.textContent = target.value || target.dataset.default;
  });
});
