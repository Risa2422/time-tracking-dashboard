import data from "./data.json" assert { type: "json" };

const container = document.querySelector(".container");

function generateActivities(timeframe) {
  let counter = 2;
  let prevText = "Yesterday";
  if (timeframe === "weekly") {
    prevText = "Last Week";
  } else if (timeframe === "monthly") {
    prevText = "Last Month";
  }
  
  data.forEach((timeData) => {
    const newBox = document.createElement("div");
    newBox.classList.add("box", `box-${counter}`);
    newBox.innerHTML = `        
        <div class="inner">
          <div class="header">
            <h4>${timeData.title}</h4>
            <div class="ellipsis">
              <button>...</button>
            </div>
          </div>
          <div class="content">
            <h5>${timeData.timeframes[timeframe].current}hrs</h5>
            <div class="date">${prevText} - ${timeData.timeframes[timeframe].previous}hrs</div>
          </div>
        </div>
    `;
    container.append(newBox);
    counter++;
  });
}

function removeBoxes() {
  const boxes = document.querySelectorAll(".box");
  boxes.forEach((box) => {
    box.remove();
  });
}

const occurences = document.querySelectorAll(".terms");
console.log(occurences);
occurences.forEach((time) => {
  console.log(time);
  time.addEventListener("click", () => {
    occurences.forEach((p) => {
      p.classList.remove("selected");
    });
    time.classList.add("selected");
    removeBoxes();
    const timeframe = time.innerText.toLowerCase();
    generateActivities(timeframe);
  });
});

generateActivities("daily");
