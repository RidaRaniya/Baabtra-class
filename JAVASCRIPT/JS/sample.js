// var name=prompt("Enter your name")
// document.write("Hello "+name)

var studentId=20;
var studentName="riya"
var marks=[90,85,95]
var percentage=90.5
var address={
    houseName:"hello",district:"kozhikode",state:"kerala"
}
console.log("studentId :",studentId)
console.log("studentName is ",studentName)
console.log("marks :",marks)
console.log("percentage :",percentage)
console.log("address :",address)
console.log("type of studentId :",typeof(studentId))
console.log("type of studentName :",typeof(studentName))
console.log("type of marks :",typeof(marks))
console.log("type of percentage :",typeof(percentage))
console.log("type of address :",typeof(address))

console.log(studentId + studentId)
console.log(studentId + 100)
console.log(studentId + studentName)

// var isconfirm=confirm("are you sure")
// console.log(isconfirm)

a="10"
b=10
console.log(a==b)
console.log(a===b)
console.log(a!=b)
console.log(a!==b)

// num1=Number(prompt("enter number1"))
// num2=Number(prompt("enter number2"))
// result=num1+num2
// document.write("<h1>result :" +result+"</h1>" )

// var num1=Number(prompt("enter a number"))
// if(num1>5)
// {
//     document.write("number is greater than 5")
// }
// else if(num1===5)
// {
//     document.write("number is 5")
// }
// else{
//     document.write("number is less than 5")
// }

// if(num1>10 && num1<20)
// {
//    document.write("number is between 10 and 20")
// }
// else{
//     document.write("number is not between 10 and 20")
// }


// var num1=Number(prompt("enter a number"))
// if(num1%2==0)
// {
//     document.write("number is even")
// }
// else{
//     document.write("number is odd")
// }

// var num1=Number(prompt("enter a number"))
// if(num1==1){
// document.write("SUNDAY")
// }
// else if(num1==2)
// {
//     document.write("MONDAY")
// }
// else if(num1==3)
// {
//     document.write("TUESDAY")
// }
// else if(num1==4)
// {
//     document.write("WEDNESDAY")
// }
// else if(num1==5)
// {
//     document.write("THURSDAY")
// }
// else if(num1==6)
// {
//     document.write("FRIDAY")
// }
// else if(num1==7)
// {
//     document.write("SATURDAY")
// }
// else{
//     document.write("invalid")
// }

var num=Number(prompt("Enter a number"))
switch(num){
    case 1:
        console.log("Monday")
        break
    case 2:
        console.log("Tuesday")
        break
    case 3:
        console.log("Wednesday")
        break
    case 4:
        console.log("Thursday")
        break
    case 5:
        console.log("Friday")
        break
    case 6:
        console.log("Saturday")
        break
    case 7:
        console.log("Sunday")
        break
    default:
        console.log("Invalid")
}




