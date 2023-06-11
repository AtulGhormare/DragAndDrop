const items = document.querySelectorAll(".item");

const box2 = document.getElementById("box2");
const box1 = document.getElementById("box1");

for (let item of items) {
  item.addEventListener("dragstart", (e) => {
    let selected = e.target;
    console.log("start");
    box2.addEventListener("dragover", (e) => {
      e.preventDefault();
      console.log("over");
    });
    box2.addEventListener("drop", (e) => {
      console.log("drop", selected);
      box2.appendChild(selected);
      selected = null;
    });
    box1.addEventListener("dragover", (e) => {
      e.preventDefault();
      console.log("over");
    });
    box1.addEventListener("drop", (e) => {
      console.log("drop");
      box1.appendChild(selected);
      selected = null;
    });
  });
  item.addEventListener("dragend", (e) => {
    console.log("end");
  });
}

