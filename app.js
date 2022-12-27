let arr = [];
let totalTime = 0;

let addBtn = document.querySelector(".addBtn0");

let date = document.querySelector(".date");

let dateObj = new Date(),
  month = dateObj.getMonth(),
  day = dateObj.getDay(),
  year = dateObj.getFullYear();

displayTime = (tt) => {
  let hours = Math.floor(tt / 60);
  let mins = tt % 60;
  let displayTime = document.querySelector(".dsp-totalmins");
  displayTime.innerHTML = `Total Time:${hours}hours ${mins}Mins`;
  displayTime.style.boxShadow = "0.5px 0.5px 0.8px 1px rgba(0, 0, 0, 0.507)";
  date.style.boxShadow = "0.5px 0.5px 0.8px 1px rgba(0, 0, 0, 0.507)";
};

loadNote = () => {
  let addBtn = document.querySelector(`.addBtn${arr.length - 1}`);
  const div = document.createElement("div");
  div.innerHTML = `<div class="content">
          <form action="#">
            <div class="int-time">
              <h4>Start Time</h4>
              <div class="hour">
                <label>Hour:</label>
                <input
                  type="text"
                  pattern="\d*"
                  maxlength="2"
                  placeholder="HR"
                  required
                  id="intHour${arr.length + 1}"
                />
              </div>
              <div class="min">
                <label>Min:</label>
                <input
                  type="text"
                  pattern="\d*"
                  maxlength="2"
                  placeholder="MIN"
                  required
                  id="intMin${arr.length + 1}"
                />
              </div>
            </div>
            <div class="final-time">
              <h4>Final Time</h4>
              <div class="hour">
                <label>Hour:</label>
                <input
                  type="text"
                  pattern="\d*"
                  maxlength="2"
                  placeholder="HR"
                  required
                  id="finalHour${arr.length + 1}"
                />
              </div>
              <div class="min">
                <label>Min:</label>
                <input
                  type="text"
                  pattern="\d*"
                  maxlength="2"
                  placeholder="MIN"
                  required
                  id="finalMin${arr.length + 1}"
                />
              </div>
            </div>
            <div class="task-details">
              <label class="cus-label">Task Details</label>
              <textarea id="textArea${
                arr.length + 1
              }" maxlength="100"></textarea>
            </div>
          </form>
          <button class="addBtn${
            arr.length
          }" onclick="handleClick()">Add</button>
        </div>`;
  document.querySelector(".top").appendChild(div);
  // div.classList.add("details");
  addBtn.remove();
  date.innerHTML = `Date ${day}/${month}/${year}`;
};

CalTotalTime = (ih, im, fh, fm) => {
  let totalHours = Math.abs(fh - ih);
  let totalMins = Math.abs(fm - im);
  if (totalHours == 1 && totalMins == 30) {
    console.log(totalTime);
    // const hours = Math.floor(totalTime / 60);
    // const mins = totalTime % 60;
    // let tempTime = hours + mins;
    totalTime += totalMins;
    console.log("only mins", totalHours, totalMins, totalTime);
  } else {
    console.log(totalTime);
    let tempHr = totalHours * 60;
    console.log(totalHours, tempHr, totalMins);
    let tempTime = totalMins + tempHr;
    totalTime += tempTime;
    console.log("full mins and hours", totalTime);
  }

  loadNote();
  displayTime(totalTime);
};

handleClick = () => {
  let intHour = document.querySelector(`#intHour${arr.length + 1}`);
  let intMin = document.querySelector(`#intMin${arr.length + 1}`);
  let finalHour = document.querySelector(`#finalHour${arr.length + 1}`);
  let finalMin = document.querySelector(`#finalMin${arr.length + 1}`);
  let taskDet = document.querySelector(`#textArea${arr.length + 1}`);

  let obj = {};

  if (intHour?.value < 13) {
    obj.intHr = intHour?.value;
  } else {
    console.log("Add Proper Task Start Hour");
    return;
  }

  if (intMin?.value < 61) {
    obj.intMn = intMin?.value;
  } else {
    console.log("Add Proper Task Start Min");
    return;
  }

  if (finalHour?.value < 13) {
    obj.fnHr = finalHour?.value;
  } else {
    console.log("Add Proper Task End Hour");
    return;
  }

  if (finalMin?.value < 61) {
    obj.fnMN = finalMin?.value;
  } else {
    console.log("Add Proper Task End Hour");
    return;
  }
  //task should not be empty
  if (taskDet?.value) {
    obj.task = taskDet?.value;
  } else {
    console.log("Please Add Task Details");
    return;
  }

  arr.push(obj);

  //end task minus start
  //

  //extracts values from object
  const { intHr, intMn, fnHr, fnMN, task } = obj;

  //these extracted values are used in the if condition
  if (intHr && intMn && fnHr && fnMN && task) {
    CalTotalTime(intHr, intMn, fnHr, fnMN, task);
  }

  // console.log(" ARRAY ", arr);
};
