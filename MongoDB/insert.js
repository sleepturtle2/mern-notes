db.studentInfo.insert({
    name : { firstName : 'John', lastName : 'Doe'}, 
    class : 6, 
    rollNo : 23, 
    subjects : ['Maths', 'Phy'], 
    attendance : {
        Jan : '90%', 
        Feb : '85%', 
        Mar : '98%'
    }
}); 

// notice how the properties aren't the same
db.studentInfo.insert({
    name : { firstName : 'Andrew', lastName : 'Mead'}, 
    rollNo : 23, 
    subjects : ['Eng', 'Chem'], 
    attendance : {
        Jan : '97%', 
        Feb : '84%', 
        Mar : '23%'
    }
}); 