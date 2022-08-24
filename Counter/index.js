
function increment(){
    count++
    document.getElementById("count-el").textContent = count
}

function reset(){
    count = 0
    document.getElementById("count-el").textContent = count
}

reset()