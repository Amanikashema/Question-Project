//using selectors inside the element
// traversing the dom


const article = document.querySelectorAll(".question")
const plusBtn = document.querySelector(".plus-icon")
const minusBtn = document.querySelector(".minus-icon")
const btns = document.querySelectorAll(".question-btn")

// traversing Dom Solutions
// btns.forEach(function(btn){
//     btn.addEventListener("click", function(e){
//         const articleQuestion = e.currentTarget.parentElement.parentElement
//         articleQuestion.classList.toggle("show-text")
// })
// })
article.forEach(function(results){
    const btn = results.querySelector(".question-btn")
    btn.addEventListener("click", function(){
        article.forEach(function(item){
            if(item !==results ){
                item.classList.remove("show-text")
            }
        })

        results.classList.toggle("show-text")
    })
})
