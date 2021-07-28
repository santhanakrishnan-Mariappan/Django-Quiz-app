const modalBtns = [...document.getElementsByClassName("model-button")]
const modalBody = document.getElementById("model-body-confirm")
const startBtn = document.getElementById("start-button")

const url = window.location.href

modalBtns.forEach(modelBtn=> modelBtn.addEventListener("click",function(){ 
    
    const pk = modelBtn.getAttribute('data-pk')
    const name = modelBtn.getAttribute('data-name')
    const numQuestions = modelBtn.getAttribute('data-questions')
    const difficulty = modelBtn.getAttribute('data-difficulty')
    const scoreToPass = modelBtn.getAttribute('data-pass')
    const time = modelBtn.getAttribute('data-time') 
    console.log(name)
    modalBody.innerHTML = ` 
    <div class ="h5 mb-3">
    Get started with Quiz <br><br><b>${name}</b> </div>
    <div class ="text-muted">
    <ul>
    <li> Number of Questions:"<b>${numQuestions}</b>" </li>
    <li> Difficulty:"<b>${difficulty}</b>" </li>
    <li> Score to pass:"<b>${scoreToPass}</b>" </li>
    <li> Time:"<b>${time}</b>" </li></div>
    `
    startBtn.addEventListener("click", ()=> {
        window.location.href=url+pk
    })
    
}))