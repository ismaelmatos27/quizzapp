var questAns = [{question:"In which year was FC Barcelona founded?",answer:1899},
{question:"Which trophy the FC Barcelona disputes every year in honor to one of their founding member?", answer:"joan gamper"},
{question:"In wich year the FC Barcelona won their first La Liga trophy?", answer:1929},
{question:"How many Champions League has won the FC Barcelona?", answer:"5"},
{question:"Who was known as 'El Flaco' in the FC Barcelona history?", answer:"johan cruyff"},
{question:"With which name is known the youth academy of the club?", answer:"la masia"},
{question:"Who is the top scorer of the club history?", answer:"lionel messi"},
{question:"Against which team, the FC Barcelona, disputes every year 'El Clasico'?", answer:"real madrid"},
{question:"Who is the actual coach of the team?", answer: "ernesto valverde"},
{question:"Which is the name of the FC Barcelona stadium?", answer:"camp nou"}]

var correct =0
var incorrect=0
var info=document.getElementById('info')
// Create an event when the user logins
  getInfo.addEventListener("click",function(){
    // Get the name of the user
    var user= document.getElementById("username").value;
    console.log(user);
    var userUpper=user.toUpperCase()
    console.log(userUpper);
    // Check if is a valid name
    if (userUpper == 0){
    // Create a message requiring a valid name
    var unValid =document.createElement("h4")
    unValid.textContent =("Please insert a name!")

    info.appendChild(unValid)

    }else{
        var askingName=document.getElementById("askingName")
        askingName.style.display="none"
        var bckg=document.getElementById("questions")
        // bckg.style.backgroundImage="url(../quizzapp/img/players2.jpg)"
        // var body=document.getElementById("body")
        // document.body.style.backgroundImage="url(../quizzapp/img/logo9.jpg)"
        bckg.style.backgroundRepeat="no-repeat"
        bckg.style.backgroundSize="cover"



        // Delete the previus message if there's any
        info.style.display ="none"
        // Greets the user with a new message
        var welcome=document.createElement("h2")
        welcome.setAttribute = ("id","welcome")
        welcome.textContent = ("Welcome "+userUpper)
        console.log(welcome)
        var greets = document.getElementById('greets')
        greets.appendChild(welcome)

        // Display all the questions from the array and all the input elements
        for(var i=0;i<questAns.length;i++){
            // This variable select the h tag from the HTML
            var question=document.getElementById('q' + i);
            // This variable create the input for the answer of each question
            var formAns=document.createElement("form")
            formAns.setAttribute("id","form"+i)

            var answerSpace = document.createElement("input")
            answerSpace.setAttribute ("placeholder", "Your Answer")
            answerSpace.setAttribute("id","userAns" + i)
            // This variable select the div tag from the HTML
            var answerInput=document.getElementById('ans' + i)
            // Write the question inside of the h tag
            question.textContent = questAns[i].question;
            // Append the input element to the div
            formAns.appendChild(answerSpace)
            answerInput.appendChild(formAns)
            console.log(question);

          }
          // Create the button to submit the answers
        var submitAns = document.createElement("button")
        submitAns.textContent="Submit answers"
        submitAns.setAttribute ("id","buttonAns")
        var answers=document.getElementById("submitAns")
        answers.appendChild(submitAns)

        // Create the event when submit the answers
          buttonAns.addEventListener("click",function(){

            // This for is to get all the answers from the array and from the user
            for(var j=0;j<questAns.length;j++){
              // Answers fro the array
              var ans = questAns[j].answer
                console.log(ans)
              // Answer fro the user
              var userAns = document.getElementById("userAns" + j).value;
              var userAnsLower = userAns.toLowerCase()
              console.log(userAnsLower)
                      // Compare answers
                      if(ans == userAnsLower){
                      // add 1 to correct if the answer is correct
                        correct++
                        // to put thee question in color green if the answer is correct
                        colourCorrectquestion = document.getElementById("q" + j)
                        colourCorrectquestion.style.color = "green"
                        console.log("correct");

                      }else{
                        // add 1 to incorrect if the answer is incorrect
                        incorrect++
                        // to put thee question in color red if the answer is incorrect
                        colourIncorrectquestion = document.getElementById("q" + j)
                        colourIncorrectquestion.style.color = "red"
                        console.log("incorrect");

                      }

                      console.log(correct)
                      console.log(incorrect);
            }
                // To show the results in a new div
              var  resultDiv = document.getElementById("resultDiv")


              var results = document.createElement("span")
              results.setAttribute = ("class","results")
              results.textContent = ("Your results are: " )
              var correctResults = document.createElement("h5")
              var incorrectResults = document.createElement("h5")
              correctResults.textContent = (correct + " correct answers")
              incorrectResults.textContent = (incorrect + " incorrrect answers")
              var resultHeader = document.getElementById("results")
              resultHeader.appendChild(results)
              var finalResultsC = document.getElementById("correct")
              var finalResultsI = document.getElementById("incorrect")


              finalResultsC.appendChild(correctResults)
              finalResultsI.appendChild(incorrectResults)
              var congrats = document.getElementById('congrats')


              var tryAgain = document.createElement("button")
              tryAgain.setAttribute ("id","goAgain")
              tryAgain.textContent = ("Take the quiz again!")
              takeagain.appendChild(tryAgain)


              if(correct>=incorrect){
                correctResults.style.fontSize = "25px"
                correctResults.style.fontWeight = "bold"
                var happy = document.createElement("img")
                happy.setAttribute ("src","../quizzapp/img/win.jpg" )
                var congratsMessage = document.createElement("h2")
                congratsMessage.textContent = "You're a real FC Barcelona fan"
                congrats.appendChild(happy)
                congrats.appendChild(congratsMessage)
                }else{
                  incorrectResults.style.fontSize = "25px"
                  incorrectResults.style.fontWeight = "bold"

                  var sad = document.createElement("img")
                  sad.setAttribute ("src","../quizzapp/img/lose.jpg")
                  var congratsMessage = document.createElement("h2")
                  congratsMessage.textContent = "Try harder"
                  congrats.appendChild(sad)
                  congrats.appendChild(congratsMessage)
                  document.getElementById('goAgain').scrollIntoView()
                         }

              // this will happen if the user wants to try again
              tryAgain.addEventListener("click",function(){
                // welcome.style.display = "none"
                // resultDiv.style.display="none"
                // askingName.style.display="block"
                // info.style.display ="block"
                // answers.style.display ="none"
                //
                // To reload the page
                location.reload()
                // document.getElementById('login').scrollIntoView()
                // document.getElementById("info").reset();
                //         for(var k=0;k<questAns.length;k++){
                //           var questionNew=document.getElementById('q' + k)
                //           var answerInput=document.getElementById('ans' + k)
                //           var formAns=document.getElementById("formAns"+k)
                //         questionNew.style.color="black"
                //
                //         console.log(formAns);
                //         document.getElementById("form"+k).reset();
                        // answerInput.style.display="none"
                        // var reset=document.getElementById("resultDiv")
                        // reset.textContent = ""
                        // }


              })
          // var correct=0
          // var incorrect=0

          })

        }
})




var button = document.getElementById('submitAns')
