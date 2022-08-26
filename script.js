const result = document.getElementById("result");
const btn = document.getElementsByTagName("button");

const ArrayBtn = Array.from(btn);

let newBtn = ArrayBtn.forEach((btn) =>
  btn.addEventListener("click", () => {
    switch (btn.innerHTML) {
      case "AC":
        result.textContent = "";
        break;

      case "DEL":
        result.textContent = result.textContent.slice(0, -1);
        break;

      case "=":
        result.textContent = eval(result.textContent);
        break;

      default:
        result.textContent += btn.innerHTML;
    }
  })
);
