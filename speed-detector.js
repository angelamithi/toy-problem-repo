function speedDetector (travellingSpeed){
if (travellingSpeed <=70){
    console.log("OK")
} else if (travellingSpeed > 70)
{
    calculateSpeedLimit(travellingSpeed);
}
    
function calculateSpeedLimit(travellingSpeed) {
    const acceptedSpeedLimit=70;
    let demeritPoints=0;
    let diffrenceInSpeedLimit=travellingSpeed-acceptedSpeedLimit;

        if (diffrenceInSpeedLimit >=5 && diffrenceInSpeedLimit<10 ){
        demeritPoints++;
        console.log(`Points ${demeritPoints}`);
        } 
        else if (diffrenceInSpeedLimit >=10 && diffrenceInSpeedLimit <15){
         demeritPoints=demeritPoints+2;
        console.log(`Points ${demeritPoints}`);
        } 
        else if (diffrenceInSpeedLimit >=15 && diffrenceInSpeedLimit <20){
            demeritPoints=demeritPoints+3;
            console.log(`Points ${demeritPoints}`);
        }
        else if (diffrenceInSpeedLimit >=20 && diffrenceInSpeedLimit <25){
            demeritPoints=demeritPoints+4;
            console.log(`Points ${demeritPoints}`);
        }
        else if (diffrenceInSpeedLimit >=25 && diffrenceInSpeedLimit <30){
            demeritPoints=demeritPoints+5;
            console.log(`Points ${demeritPoints}`);
        }
        else if (diffrenceInSpeedLimit >=30 && diffrenceInSpeedLimit <35){
            demeritPoints=demeritPoints+6;
            console.log(`Points ${demeritPoints}`);
        }
        else if (diffrenceInSpeedLimit >=35 && diffrenceInSpeedLimit <40){
            demeritPoints=demeritPoints+7;
            console.log(`Points ${demeritPoints}`);
        }
        else if (diffrenceInSpeedLimit >=40 && diffrenceInSpeedLimit <45){
            demeritPoints=demeritPoints+8;
            console.log(`Points ${demeritPoints}`);
        }
        else if (diffrenceInSpeedLimit >=45 && diffrenceInSpeedLimit <50){
            demeritPoints=demeritPoints+9;
            console.log(`Points ${demeritPoints}`);
        }
        else if (diffrenceInSpeedLimit >=50 && diffrenceInSpeedLimit <55){
            demeritPoints=demeritPoints+10;
            console.log(`Points ${demeritPoints}`);
        }
        else if (diffrenceInSpeedLimit >=55 && diffrenceInSpeedLimit <60){
            demeritPoints=demeritPoints+11;
            console.log(`Points ${demeritPoints}`);
        }
        else if (diffrenceInSpeedLimit === 60){
            demeritPoints=demeritPoints+12;
            console.log(`Points ${demeritPoints}`);
        } 
        else if (diffrenceInSpeedLimit > 60){
            console.log('License Suspended');
        }
              
    }
}

speedDetector(125);
speedDetector(135);