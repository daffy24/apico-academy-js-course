// Global Scope
const globalVariable = "Global variable";

function printGlobalVariable() {
    console.log(globalVariable);
}

printGlobalVariable();

// Function Scope
function printLocalVariable() {
    const localVariable = "Local variable";
    console.log(localVariable);
}

printLocalVariable();
console.log(localVariable);

// Block Scope
function printBlockVariable() {
    if (true) {
        const blockVariable = "Block variable";
        console.log(blockVariable);
    }
    console.log(blockVariable);
}

printBlockVariable();
console.log(blockVariable);