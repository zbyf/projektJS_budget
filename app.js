// HELPER FUNCTIONS 

const qs = (selector) => document.querySelector(selector);
const qsAll = (selector) => document.querySelectorAll(selector);
const cel = (tagName) => document.createElement(tagName);

// INCOMES 

const incomeBtn = qs("#income_btn");

let income_arr = [];

const incomeName = () => {
    const income_name = document.querySelector("#income_name").value;
    const income_cost = document.querySelector("#income_cost").value;
    if (income_name !== "" && income_cost > 0) {
        const income_table = {id: income_name, cost: income_cost};
        const li = cel("li");
        const btn_edit = cel("button");
        const btn_del = cel("button");
        li.textContent = income_table.id + ": " + income_table.cost + "  PLN";
        li.classList.add("list_class");
        btn_edit.textContent = "edytuj";
        btn_edit.classList.add("btn_edit");
        btn_edit.id = "btn_edit";
        btn_del.textContent = "usuń";
        btn_del.classList.add("btn_del");
        btn_del.id = "btn_del";
        income_list.appendChild(li);
        li.appendChild(btn_edit);
        li.appendChild(btn_del);
        income_arr = [...income_arr, income_table];
        const grab_cost = income_arr.map(grab => parseInt(grab.cost, 0));
        const incomeTotal = grab_cost.reduce((acc, n) => acc + n, 0);
        total_income.textContent = "Suma przychodów: " + incomeTotal + " PLN";

// KOMBINACJE Z EDIT BTN


        // btnEdit.addEventListener("click", (e) => {
        //     incomeEdit
        // }); 

// KONIEC KOMBINACJI Z EDIT BTN

        }
    else {
            alert("Uzupełnij dane");
        };

};

incomeBtn.addEventListener("click", (e) => {
        incomeName()
    });  

    const x = () => { 
        if (qs("#btn_edit") === true) {
            const btnEdit = qs("#btn_edit");
            const incomeEdit = () => {
                console.log("dupa")
            };
            btnEdit.addEventListener("click", (e) => {
                incomeEdit()
                  }); 
        } else {
            console.log("i chuj");
        };
    };

// SYF ROBOCZY PONIŻEJ 
    
// const btnEdit = qsAll("#btn_edit");

// const incomeEdit = () => {
//     console.log("dupa")
// };

// btnEdit.addEventListener("click", (e) => {
//         incomeEdit()
//     });

// INCOME EDIT BTN 

// const incomeEdit = () => {
//         console.log("dupa")
// };

// btnEdit.addEventListener("click", (e) => {
//         incomeEdit()
// });



// OUTCOMES

const outcomeBtn = qs("#outcome_btn");

const outcomeName = () => {
    const outcome_name = document.querySelector("#outcome_name").value;
    const outcome_cost = document.querySelector("#outcome_cost").value;
    const outcome_table = {id: outcome_name, cost: outcome_cost}
    const li = cel("li");
    li.textContent = outcome_table.id + ": " + outcome_table.cost + "  PLN";
    outcome_list.appendChild(li);
}

outcome_btn.addEventListener("click", (e) => {
    outcomeName()
});
