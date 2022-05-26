// Write your solution in this file!

const employee = {
    name: "John",
    
    streetAddress: "110 John street",
}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    const newObj = {...obj}

    newObj[key] = value

    return newObj
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value) {
    employee[key] = value

    return employee
}

function deleteFromEmployeeByKey (employee, key) {

    const newObj = {...key}

    delete newObj.key

    return newObj
}

function destructivelyDeleteFromEmployeeByKey (employee, key) {

    delete employee[key]

    return employee
}

