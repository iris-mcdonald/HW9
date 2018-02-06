    function chgBoxColor1()
        {
            var result = 0;
            while ((result == 0) || (result > 3)) {//run until you get a 1, 2, or 3
                var result = myRandomNumber();
            }
            
            if(result == 1){
                        $("#a").removeClass();
                        $("#a").addClass("one"); 
            } else if(result == 2){
                        $("#a").removeClass(); 
                        $("#a").addClass("two");
            } else {
                        $("#a").removeClass();
                        $("#a").addClass("three");                     
            }
            console.log(" box 1 result: " + result);
                    
         return result;

        }//end of chgBoxColor1

    function chgBoxColor2()
    {
            var result = 0;
            while ((result == 0) || (result > 3)) {//run until you get a 1,2,3
                var result = myRandomNumber();
            }
            
            if(result == 1){
                        $("#b").removeClass();
                        $("#b").addClass("one"); 
            } else if(result == 2){
                        $("#b").removeClass(); 
                        $("#b").addClass("two");
            } else {
                        $("#b").removeClass();
                        $("#b").addClass("three");                     
            }
            console.log(" box 2 result: " + result);
                    
         return result;

    }//end of chgBoxColor2

    function chgBoxColor3()
    {
            var result = 0;
            while ((result == 0) || (result > 3)) {//run for each box
                var result = myRandomNumber();
            }
            
            if(result == 1){
                        $("#c").removeClass();
                        $("#c").addClass("one"); 
            } else if(result == 2){
                        $("#c").removeClass(); 
                        $("#c").addClass("two");
            } else {
                        $("#c").removeClass();
                        $("#c").addClass("three");                     
            };

         console.log(" box 3 result: " + result);
         return result;

    }//end of chgBoxColor3

    function myRandomNumber()
    {
            var result = Math.floor((Math.random() * 10) + 1);
            /*document.write("random generator: " + result);*/
            return result;
    }

    function setWinOrLoseMsg(boxColor1, boxColor2, boxColor3)
    {
            if ((boxColor1 == boxColor2) &&
                (boxColor2 == boxColor3))
            {
                 /*document.getElementById("msg").innerHTML = "Congratulations, you won!";*/
                $("#msg").text("Congratulations, you won!");
            } else {
                 /*document.getElementById("msg").innerHTML = "Sorry, try again!";*/
                $("#msg").text("Sorry, try again!");
            }
    }//end of setWinOrLoseMsg

    function startProcess()
    {
            checkButtonHover();
            
            for  (var i=1; i <= 10; i++)
            {
                var boxColor1 = chgBoxColor1();
            };
            
            for  (var i=1; i <= 10; i++)
            {
                var boxColor2 = chgBoxColor2();
            };

            for  (var i=1; i <= 10; i++)
            {
                var boxColor3 = chgBoxColor3();
            };
                 

           setWinOrLoseMsg(boxColor1, boxColor2, boxColor3); 
                   
    }//end of startProcess

    function checkButtonHover() 
    {
            $("#btn").hover(function()
            {
                $("#btn").text("SPIN NOW");
                $("#btn").css(
                    {
                    'background-color': 'darkgreen'
                    })
            });//end of button hover JQuery event handler    
    }//end of checkButtonHover      

$(document).ready(function () {
    $("button").click(function () {
        $("*").fadeOut(2000);
        });
        /*$("p").hide().delay(2000).text("Goodbye").fadeIn(2000);*/
    });
    
$(window).on('beforeunload', function () {
    return 'Are you sure you want to leave?';
});


     
    function onExit()
    {
        $("p").text("Goodbye");
        return "Goodbye!...";//this mgs never displays in W3Schools, or in my code!
    }
           
$(document).ready(function()
{
    console.log( "ready!" );
    startProcess();
}    
);
    
   
    







   
   


        

     

   
