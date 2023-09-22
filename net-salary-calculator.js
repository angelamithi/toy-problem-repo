//function for calculating Net Salary
function calculateNetSalary(basicSalary,benefits){
    let grossPay=parseInt(basicSalary+benefits);
    let employeeTax=calculateTax(basicSalary,benefits);
    let nhifPayment=calculateNhif(basicSalary,benefits);
    let nssfPayment=calculateNssf(basicSalary,benefits);
    let netSalary=parseInt(grossPay-employeeTax-nhifPayment-nssfPayment);
    console.log(`Your Net Salary is ${netSalary}`);
    //return netSalary;
    }

//function for calculating  tax
function calculateTax(basicSalary,benefits){
let tax=0;
let grossPay=parseInt(basicSalary+benefits);
if (grossPay<=24000){
    tax=grossPay*0.1;
} else if( grossPay>24000 && grossPay<=32333){
    tax=grossPay*0.25;
} else if (grossPay>=32,334 && grossPay <= 500000)
{
   tax=grossPay *0.30;
} else if (grossPay>50000 && grossPay<80000)
{
    tax=grossPay *0.325;
} else if (grossPay>=80000)
{
    tax=grossPay*0.35;
} else 
{
    console.log("Key in the correct basic Salary and benefits");
}
return tax;
}

//function to calculate NHIF
function calculateNhif(basicSalary,benefits){
let nhif=0;
let grossPay=parseInt(basicSalary+benefits);
switch(true){
    case (grossPay > 0 && grossPay<=5999): 
    nhif=150;
    break;
    case (grossPay >= 6000 && grossPay<=7999): 
    nhif=300;
    break;
    case (grossPay >= 8000 && grossPay<=11999): 
    nhif=400;
    break;
    case (grossPay >= 12000 && grossPay<=14999): 
    nhif=500;
    break;
    case (grossPay >= 15000 && grossPay<=19999): 
    nhif=600;
    break;
    case (grossPay >= 20000 && grossPay<=24999): 
    nhif=750;
    break;
    case (grossPay >= 25000 && grossPay<=29999): 
    nhif=850;
    break;
    case (grossPay >= 30000 && grossPay<=34999): 
    nhif=900;
    break;
    case (grossPay >= 35000 && grossPay<=39999): 
    nhif=950;
    break;
    case (grossPay >= 40000 && grossPay<=44999): 
    nhif=1000;
    break;
    case (grossPay >= 45000 && grossPay<=49999): 
    nhif=1100;
    break;
    case (grossPay >= 50000 && grossPay<=59999): 
    nhif=1200;
    break;
    case (grossPay >= 60000 && grossPay<=69999): 
    nhif=1300;
    break;
    case (grossPay >= 70000 && grossPay<=79999): 
    nhif=1400;
    break;
    case (grossPay >= 80000 && grossPay<=89999): 
    nhif=1500;
    break;
    case (grossPay >= 90000 && grossPay<=99999): 
    nhif=1600;
    break;
    case (grossPay >= 100000): 
    nhif=1700;
    break;
    default:
        console.log('Key in the correct basic salary and benefits');

}
return nhif;

}

//function calculate NSSF
function calculateNssf(basicSalary,benefits){
    let nssf=0;
    let grossPay=parseInt(basicSalary+benefits);
    switch(true){
        case (grossPay > 0 && grossPay<=18000): 
        nssf=grossPay*0.6;
        break;
        case (grossPay > 18000): 
        nssf=1080;
        break;       
        default:
            console.log("Grosspay can't be less than Ksh 3000");
        }
    return nssf;
    
    }

calculateNetSalary(2000,100000);