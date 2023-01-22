   //created in strict mode
   "use stict";

   //caching errors
    try{
    function generate(){   
    let lowercase , upcase , numbers , symbols , newpwd;
    lowercase = document.getElementById("setedlowercasevalue").value;
    upcase = document.getElementById("seteduprcasevalue").value;
    numbers = document.getElementById("setednumber").value;
    symbols = document.getElementById("setedsymbols").value;
    newpwd = [
        //lowercaseletters
        "fedcbajlkhigpmonqtrusxvzyw",
        //upcaseletters
        "lonfdqtrbvcjzywemkhigpxusa",
        //symbols
        "_@$[+%]£§+-*)¬!^&(?"
    ];
        var lowercasevalue , upcasevalue , numbersvalue , symbolsvalue , sorter , pwd , ms , timer , addnumber;
        //setting password updater
        timer = new Date();
        ms = timer.getTime().toString();
        addnumber = 9 + Number(numbers);
        numbersvalue = ms.slice(9 , addnumber);

        //setting lowercase 
        lowercasevalue = newpwd[0].slice(0 , lowercase);

        //setting upcase
        upcasevalue = newpwd[1].slice(0 , upcase);
        
        //setting symbols
        symbolsvalue = newpwd[2].slice(0 , symbols);

        //sorting values
        sorter = [
            lowercasevalue ,
            upcasevalue.toUpperCase() , 
            numbersvalue ,
            symbolsvalue ,
        ];
        pwd = sorter.sort().join("");

        //generating a new password
        
        document.getElementById("newpassword").innerHTML = pwd;
        
        
        
        //saving data in the console
        console.log(pwd);
        }
        function copy(){
            document.execCommand("copy");
            alert("password copied")
        }
        //diplaying errors
    }catch(erros){
        console.log(erros.message);
    }
    //:)