import inquirer from "inquirer";
const ans = await inquirer.prompt([{
        type: "number",
        name: "first_number",
        message: "Enter your First Number:"
    },
    {
        type: "number",
        name: "second_number",
        message: "Enter your Second Number:"
    },
    {
        type: "list",
        name: "operator",
        message: "Please select operation type",
        choices: ["Addition", "Subtraction", "Division", "Multiplication"]
    }
]);
if (ans.operator === "Addition") {
    console.log(ans.first_number + ans.second_number);
}
else if (ans.operator === "Subtraction") {
    console.log(ans.first_number - ans.second_number);
}
else if (ans.operator === "Division") {
    console.log(ans.first_number / ans.second_number);
}
else if (ans.operator === "Multiplication") {
    console.log(ans.first_number * ans.second_number);
}
