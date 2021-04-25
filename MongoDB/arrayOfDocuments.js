var studentInfoArray = [
    {
        name : {
            firstName : "Sayantan", lastName : "Mukherjee"
        }, 
        age : 16, 
        subjects : [ "Math", "Phy", "Chem"], 
        attendance : {
            Jan : "100%",
            Feb : "99%", 
            Mar : "100%" 
        }
    }, 

    {
        name : {
            firstName : "Sunil", 
            lastName : "Gupta"
        }, 
        age : 20, 
        subjects : ["Philosophy", "Economics"], 
        attendance : {
            Jan : "23%", 
            Feb : "36%"
        }
    }
]; 

db.studentInfo.insert(studentInfoArray);  //you can either add to some existing DB or create a new one