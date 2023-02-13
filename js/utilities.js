function getNewValue(id) {
    const targetElement = document.getElementById(id);
    const stringValue = targetElement.value;
    targetElement.value = '';
    if (stringValue === '') {
        alert('Koto tk ta to likhbi!!!');
        return 0;
    }
    return parseFloat(stringValue);
}
function getOldValue(id) {
    const targetElement = document.getElementById(id);
    const stringValue = targetElement.innerText;
    return parseFloat(stringValue);
}
function changeValue(id, amount) {
    const targetElement = document.getElementById(id);
    targetElement.innerText = amount;
}