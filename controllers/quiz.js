

let quizContainer = document.getElementById('quiz');
let resultsContainer = document.getElementById('results');
let submitButton = document.getElementById('submit');







	const myQuestions = [
        {
            question: "1. How many types of fashion design are there?",
            answers: {
                a: '3',
                b: '4',
                c: '5'
            },
            correctAnswer: 'c'
        },
        {
            question: "2. Is Dior a brand of Fast Fashion or Luxury Fashion?",
            answers: {
                a: 'Fast',
                b: 'Luxury',
                c: 'Neither'
            },
            correctAnswer: 'b'
        },
        {
            question: "3. Which is the greatest attention seeker item?",
            answers: {
                a: 'a nice shirt',
                b: 'nice shoes',
                c: 'a nice watch',
                d: 'nice pants'
            },
            correctAnswer: 'c'
        },
        {
            question: "4. Is hot and cold one of the five main types of color?",
            answers: {
                a: 'Yes',
                b: 'No'
                
            },
            correctAnswer: 'b'
        },
        {
            question: "5. Red, yellow, and pink match the analogous principle?",
            answers: {
                a: 'true',
                b: 'false'
              
            },
            correctAnswer: 'b'
        },
        {
            question: "6. Should men be wearing short socks with jeans ",
            answers: {
                a: 'yes',
                b: 'no',
                c: 'it depends'
            },
            correctAnswer: 'a'
        },
        {
            question: "7. What is secondary color?",
            answers: {
                a: 'combination of the warm and cool colors',
                b: 'combination of the primary colors',
                c: 'just plain colors'
            },
            correctAnswer: 'b'
        },
        {
            question: "8. Which fashion type results in a massive environmental and economic impact upon the world?",
            answers: {
                a: 'Fast',
                b: 'Luxury',
                c: 'Couture'
            },
            correctAnswer: 'a'
        },
        {
            question: "9. Never switching hand bags is a fashion mistake women make?",
            answers: {
                a: 'Agree',
                b: 'Disagree',
               
            },
            correctAnswer: 'a'
        },
     
        {
            question: "10. Which one below is NOT a type of fashion design?",
            answers: {
                a: 'Ready-to-wear',
                b: 'Fast fashion',
                c: 'Street wear',
                d: 'Luxury'
            },
            correctAnswer: 'c'
        }
    ];


let buildQuiz = () =>{
    const output = [];
    
    
    myQuestions.forEach((currentQuestion, questionNum)=>{
        //for each answer 
        //for key in object answers
        const answers = [];
        for(letter in currentQuestion.answers){
            //render html
            // add the list of letter answers into the answers array
            answers.push(
                `<label>
                <input type = "radio" name = "question${questionNum}" value = "${letter}">
                ${letter} : 
                ${currentQuestion.answers[letter]}
                
                </label> <br>`
            );
        }

        //add this question and its answers to the output array
        output.push(

            `<div class="slide">
            <div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join("")} </div>
            </div>`
        
            //join array into string so it can be renderd on screen  by template literal string
        );
    });
    
   // join all the questions together and show it on the page:
    quizContainer.innerHTML = output.join('');
}

let showResults = () => {
    const answerContainers = quizContainer.querySelectorAll(".answers");
    let correctCount = 0;


    myQuestions.forEach((currentQuestion, questionNum) =>{
        const eachAnswerContainer = answerContainers[questionNum];
        const selector = `input[name=question${questionNum}]:checked`;
        const userAnswer = (eachAnswerContainer.querySelector(selector) || {}).value;

        //correct
        if(userAnswer === currentQuestion.correctAnswer){
            correctCount++;
            answerContainers[questionNum].style.color = 'lightgreen';
        }
        else{ //incorrect or blank
            answerContainers[questionNum].style.color = 'red';
        }

    });
    resultsContainer.innerHTML = `You got ${correctCount} correct answers out of ${myQuestions.length} `;
}

let displaySlide = (slideNum) =>{
    slides[currentSlidePos].classList.remove('active');
    slides[slideNum].classList.add('active');
    currentSlidePos  = slideNum;

    if(currentSlidePos === 0){
        prev.style.display = "none";
    }
    else{
        prev.style.display = "inline-block";
    }
    if(currentSlidePos === slides.length-1){
        next.style.display = "none";
        submitButton.style.display = "inline-block";
    }
    else{
        next.style.display = 'inline-block';
        submitButton.style.display = 'none';
    }


}


// display quiz right away
buildQuiz();

// Pagination
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const slides = document.querySelectorAll(".slide");
let currentSlidePos = 0;


let displayNext = () =>{
    displaySlide(currentSlidePos + 1);
}
let displayPrev = () =>{
    displaySlide(currentSlidePos - 1);
}


//showing first slide
displaySlide(currentSlidePos);
prev.addEventListener("click", displayPrev);
next.addEventListener("click", displayNext);

// on submit, show results
submitButton.addEventListener('click', showResults);
   
    