const url = window.location.href

const quizBox = document.getElementById("quiz-box")


$.ajax({
    type: 'GET',
    url: `${url}data`,
    success: function (response) {
        console.log(response)
        let data
        data = response.data
        data.forEach(el => {
            for (const [question, answers] of Object.entries(el)) {
            
                quizBox.innerHTML += `<hr>
                <div class = "mb-2" >
                <h4>${question}</h4>
                </div>`
           // console.log (answer)
    // console.log(question)
                answers.forEach((answer) => {
                    quizBox.innerHTML += `
                    <input type = "radio" class ="ans" id="${question}-${answer}" name="${question}" value="${answer}">
                    <label for = ${question} > ${answer}<label>`
                })
            }

        })

    }
})

let quizForm = document.getElementById("quiz-form");
const csrf = document.getElementsByName("csrfmiddlewaretoken");
// let quizBox = document.getElementById("quiz-box");


const sendData = () => {
    let elements = [...document.getElementsByClassName('ans')]
    // console.log(elements);
    const data = {}
    data["csrfmiddlewaretoken"] = csrf[0].value
    
    elements.forEach((el) => {
        // console.log(el)        
        if (el.checked) {
            data[el.name] = el.value                
        } 
        // else {
        //     if (!data[el.name]) {
        //         data[el.name] = null
        //     }
        // }       
    })
    
    $.ajax({
        type: 'POST',
        url: `${url}save`,
        data: data,
        success: function(response) {
            // console.log(response); 
            const results = response.result
            const score = response.score  ;
            document.write(results) ;         
            document.write("<h1>Your Score is : </h1>","<h1>",score,"</h1>") ; 
            const answers = response.answers
//             document.write(answers)
            console.log(results) ;   
            quizForm.setAttribute('class','invisible')  ;    
                 
            // quizForm.classList.add('not-visible')           
        },      
        error: function (error) {
            console.log(error)
        }

    })

}

quizForm.addEventListener("submit", e => {
    e.preventDefault()
    sendData()
})
