const idArray = [
    "32d4944a-878b-11ec-a8a3-0242ac120002", 
    "4a7cdcbc-8793-11ec-a8a3-0242ac120002",
    "5044dc44-8793-11ec-a8a3-0242ac120002"

]

let userID = []
idArray.forEach(id =>{

    let splitID = id.split("-")
    
    splitID = [parseInt(splitID[0], 36).toString().split(""), parseInt(splitID[1], 36).toString().split(""), parseInt(splitID[2],36).toString().split(""),parseInt(splitID[3], 36).toString().split(""), parseInt(splitID[4],36).toString().split("")]
    
    splitID = splitID[0][0] + splitID[0][1] + splitID[0][2] + splitID[0][3] + "-" + splitID[2][0] + splitID[2][1] + splitID[2][2] + splitID[2][3]
    
    
    userID.push(splitID)
})

console.log(userID)

// let = variable that's mutable
