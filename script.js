$(document).ready(function(){
    //the questions
    let questions= ["Skateboarding began in the late 1940s in which part of the world:", "Who was the first professional female skateboarder?", "What is the name of this trick?", "Who is the founder of Unity Skateboards?", "Some skate companies rely on a heat-transfer decal process to add graphics to their boards.  Why is this process bad?"];

    //the answers
    let longAnswers= [["California","New York City","Australia","England"],["Elissa Steamer","Patti McGee","Peggy Oki","Vanessa Torres"],["Ollie","Bertlemann","50-50","Backside 180"],["Marbie Princess","Lizzy Armanto","Jeffrey Cheung","Tony Hawk"],["Produces non-recyclable waste","Reduces tensile strength of board","Creates toxic fumes","All of the above"]];

    //the answers value keys
    let answers= ["0","1","1","2","3"];

    //the responses
    let responses= ["Skateboarding began in California when surfers ordered roller skate wheels from Chicago and attached them to wooden boards to use when there were no waves to surf","Patti McGee was sponsored professionally in 1965.  She also appeared on the cover of Life Magazine that year, doing a handstand on her skateboard","Also known as a Bertlemann slide, or “Bert” for short, named after surfer Larry Bertlemann who first performed the trick on his surfboard and later adapted it to his skating","Jeffrey Cheung founded Unity Skateboards to host skate meet-ups for LGBTQ+ skaters in Oakland, CA","The heat-transfer decal process produces non-recyclable waste, reduces the tensile strength of the board, and creates toxic fumes"];

    //the images
    let images= ["images/caskate.jpg","images/patmcgee2.jpg", "images/bertlemannslide.jpg", "images/jeffreycheung.jpg", "images/heatpress.jpg"];

    //the image alts
    let imageAlts= ["California skater carving on cement", "Pat McGee riding her skateboard on a sunny day", "Skateboarder performing a trick where he is laying back on one hand", "Skateboard artist Jeffrey Cheung sitting in his studio", "Decal heat-press machinery"];

    //databank zero values
    let num1=0;
    let num2=0;
    let question=0;
    let answer=0;
    let response=0;


    //begin quiz button
    $(".beginQuiz").click(function(){

      let currentAns=longAnswers[question];

      num1++;
      $(".intro").addClass("hide");
      $(".restOfIt").removeClass("hide");
      $(".num1").text(num1);
      $(".questionSpot").text(questions[question]);
      $("form").removeClass("hide");
      $(".addNum1").text("submit");
      $("#ans1").text(currentAns[0]);
      $("#ans2").text(currentAns[1]);
      $("#ans3").text(currentAns[2]);
      $("#ans4").text(currentAns[3]);
      question++;
    });



    //submit answer, advance question button
    $(".addNum1").click(function(){

      

      
      let currentAns=longAnswers[question];

      if(num1<5) {

      num1++;
      
      
      $(".num1").text(num1);
      $(".questionSpot").text(questions[question]);
      $("form").removeClass("hide");
      $(".addNum1").text("submit");
      
      if (num1==3) {
        document.getElementById('questionPicture').src='images/bertlemannslide.jpg';
      }
      else {document.getElementById('questionPicture').src="";}
    

      if (num1>0) {
        $(".feedBackSpot").removeClass("hide");
      }
      

      if (trueFalse.value==answers[answer]) {
        $(".feedBackSpot").text("That's right!");
        $(".responseSpot").removeClass("hide");
        $(".score").addClass("red");
        $(".responseSpot").removeClass("hide");
        $(".responseSpot").text(responses[response]);
        document.getElementById('imageSpot').src=images[response];
        num2++;
      }
      else {$(".feedBackSpot").text("That's wrong");
      $(".responseSpot").removeClass("hide");
      $(".responseSpot").text(responses[response]);
      document.getElementById('imageSpot').src=images[response];}


      $(".num2").text(num2);

      question++;
      answer++;
      response++;

      $("#ans1").text(currentAns[0]);
      $("#ans2").text(currentAns[1]);
      $("#ans3").text(currentAns[2]);
      $("#ans4").text(currentAns[3]);

      
      $(".wholeThing").addClass("hide");
      $(".feedback-box").removeClass("hide");
      
  
  }
  else {$(".wholeThing").addClass("hide");
  $(".feedback-box").removeClass("hide");
  $(".responseSpot").text(responses[response]);
  document.getElementById('imageSpot').src=images[response];
  document.getElementById('imageSpot').alt=imageAlts[response];
  if (trueFalse.value==answers[answer]) {
  num2++;}
  num1++;
  response++;}
  });



  //button between questions 
  $(".newButton").click(function() {
    if (num1<=5){
    $(".wholeThing").removeClass("hide");
    $(".feedback-box").addClass("hide");
    }
    else {
      $(".allDone").removeClass("hide");
      $(".feedback-box").addClass("hide");
      $(".howMany").text(num2);
    }
    if (num2<=3){
      $(".endResult").text("Not so good, might want to study");}
    else if (num2==4){
    $(".endResult").text("That's pretty good!");
    }
    else $(".endResult").text("Great! You're a pro");
    });



  //restarter button
  $(".restarter").click(function() {
    window.location.reload();
  });
});