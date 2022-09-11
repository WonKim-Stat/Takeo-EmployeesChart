const ContentsGrid = document.querySelector(".contents-grid");
let RowNum = 1;

const ShowRemove = function () {
  for (let i = 1; i < RowNum; i++) {
    document.getElementById(`RemoveRow${i}`).style.visibility = "hidden";
  }
  document.getElementById(`RemoveRow${RowNum}`).style.visibility = "visible";
};

const RemoveRow = function () {
  if (RowNum >= 2) {
    let WillBeRemoveRow = document.getElementById(`row${RowNum}`);
    WillBeRemoveRow.remove();

    RowNum -= 1;
    ShowRemove();
    console.log(RowNum);
  } else {
    alert("You cannot remove this row.");
  }
};

const Addrow = function () {
  RowNum += 1;
  const html = `
  <div class="contents" id="row${RowNum}">
          <div class="Detail-Info-Grid">
          <input type="text" id="designation${RowNum}" placeholder="Designation" />
          <input type="text" id="name${RowNum}" placeholder="Employee Name" />
          <input type="text" id="id${RowNum}" placeholder="Employee ID" />
          <input type="text" id="from${RowNum}" placeholder="Prev Company" />
          </div>
          <div class="remove" id="RemoveRow${RowNum}">
            <button class="remove-btn" onclick="RemoveRow()">Remove</button>
          </div>
        </div>
  `;
  //   ContentsGrid.appendChild(html);
  ContentsGrid.insertAdjacentHTML("beforeend", html);
  //   ContentsGrid.innerHTML += html;

  ShowRemove();

  console.log(RowNum);
};

const SbmButton = document.querySelector("#submit-btn");
SbmButton.addEventListener("click", submit);

let Employees = []; // save data

function submit() {
  //   event.preventDefault();
  for (let i = 0; i < RowNum; i++) {
    Employees[i] = {
      designation: document.querySelector(`#designation${i + 1}`).value,
      name: document.querySelector(`#name${i + 1}`).value,
      id: document.querySelector(`#id${i + 1}`).value,
      from: document.querySelector(`#from${i + 1}`).value,
    };
  }

  const data = Employees;
  console.log(data);
  //   const url = " http://localhost:3000/posts";
  //   const method = "POST";
  //   fetch(url, {
  //     method,
  //     body: JSON.stringify(data),
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //   });
}

// function submit() {
//     const
// }

// document.getElementById("AddEmployeesRow").addEventListener("click", Addrow);
