function App(){

    const[num, setNum] = React.useState("0");
    const[dot, setDot] = React.useState(false);
    const[equel, setEquel] = React.useState(false);

 
    
    function addNum (number){
        if(equel===true && (num[num.length-1]!==" ")){
            setNum(number);
            setEquel(false);
        }else if(num[num.length-1]==="0" && num.length===1){
            setNum(number);
            console.log("elso"+num)
        }else if(num[num.length-1]==="0" && num.length!==1 && num[num.length-2]=== " "){
            
            let newState = num.slice(0, -1);
            newState+=number;
            setNum(newState);
            console.log("masodik"+num)
        }else if(num[num.length-1] !== " "){
            setNum(set => set + number);
            console.log("harmadik"+num)
        }else if(num[num.length-1] === " "){
            setNum(set => set + number);
        }else if(num[num.length-1] !== " " && num[num.length-1] !== "0"){
            setNum(set => set + number);
        }else {
            setNum(number);
            console.log("negyedik"+num)
        }
        
        
    }

    function addMark(mark){
        if(mark==="-" && num[num.length-1] !== "."){
            if(num[0]==="0"){
                setNum(mark+" ");
            }else if(num[num.length-1] === " "){
                 setNum(set=> set+ mark+ " ");
            }else{
                setNum(set=> set +" "+ mark+ " ");
            }
        }else if(num[num.length-1] !== "." && num[num.length-1] !== " "){
            setNum(set=> set +" "+ mark+ " ");
        }else if(num[num.length-1] !== "."){
            setNum(set=> set + mark+ " ");
        }
        if(dot){
            setDot(false)
        }
    }

    function addDot(d){
        let ar = num.split(" ");
        for(let i = 0; i!=ar.length;i++){
            if(!ar[i].includes(".")){
                 if(num[0]===0 && num.length===1){
                    setNum(0 + d);
            }else if(num[num.length-1] !== " "){
            setNum(set=> set + d)
            console.log("elso")
        }
            }
        }
       
        
    }

    function equalHandler (){
        setEquel(true);

        let arr = num.split(" ");
        console.log("szamok: \n" + arr);
        let index = [];
        let szam =0;

        /*let arr5 = [...arr];
        
        for(let i =0; i!=arr5.length;i++){ 
         
            if((arr5[i]==="+"||arr5[i]==="*"||arr5[i]==="/") && (arr5[i+1]==="+"||arr5[i+1]==="*"||arr5[i+1]==="/"||arr5[i+1]==="-")){
                arr5.splice(i,1);
                i--;
            }
            if(arr5[i]==="-" && (arr5[i+1]==="+"||arr5[i+1]==="*"||arr5[i+1]==="/")){
                arr5.splice(i, 1);
                i--;
                console.log("megvan 3" +arr);
            }
            console.log("arr5\n"+arr5);
        }

        
        arr=[...arr5]*/


        for(let i=0; i!=arr.length; i++){
            let dotCount = 0;
            let dotIndex1 = arr[i].indexOf(".");

            if(arr[i].charAt(0)==="0" && arr.length !==0 && !arr[i].includes(".")){
                arr[i]=arr[i].slice(1);
                
            }else if(arr[i].charAt(0)==="0" && arr[i].charAt(1)!=="."){
                arr[i]=arr[i].slice(1);
               
            }

            if(arr.length===2 && (arr[0]==="/"||arr[0]==="*" || arr[0]==="+")){
                arr.splice(0, 1);
              
            }

            let dotIndex2=arr[i].indexOf(".", dotIndex1+1);
            while (dotIndex2 !== -1) {
                dotCount++;
                if (dotCount > 1) {
                  arr[i] = arr[i].slice(0, dotIndex2) + arr[i].slice(dotIndex2 + 1);
                  console.log("dot "+dotCount)
                }
                dotIndex2 = arr[i].indexOf(".", dotIndex1+1);
                console.log(". indexek"+dotIndex2)
              }
        }
        console.log(arr);
 
//minusz átalakitas
        let i =0;
        let negIndex= [];
        /*Convertin String to Number*/

        /*for(let i = 0;i!=arr.length;i++){
            if(arr[i] !== "+" && arr[i] !== "/" && arr[i] !== "*" && arr[i] !== "-"){
                    console.log("előtte: "+ arr[i]+ typeof(i))
                    arr[i]=Number(arr[i].replace(/,/, "."));
                    console.log("parsefloat: "+ arr[i])
            }
            }*/
        /*Add index of - char  to negIndex for changing*/
        for(let i = 0; i!=arr.length;i++){
            if(arr[i]==="-"&& (arr[i-1]==="*"||arr[i-1]==="/"||arr[i-1]==="+") && (arr[i+1]==="*"||arr[i+1]==="/"||arr[i+1]==="+"||arr[i+1]==="-")){
                arr.splice(i,1)
            }
            if(arr[i]==="-" && (arr[i-1]==="*"||arr[i-1]==="/"||arr[i-1]==="+"||arr[0]==="-")&&(arr[i+1]!=="*"||arr[i+1]!=="/"||arr[i+1]!=="+"||arr[i+1]!=="-")){
                negIndex.push(i);
            }
        }

        console.log("minusz indexek"+negIndex)
    

       for(let i = 0; i!=negIndex.length;i++){
            console.log(negIndex[i])
            arr[negIndex[i]+1] = Number(arr[negIndex[i]+1]) * (-1);
            console.log("negativ:"+arr[negIndex[i]+1]);
            arr.splice(negIndex[i], 1);
            if((i+1)<negIndex.length){
                negIndex[i+1]-=1;
            }
            console.log("kovetkezo"+Number(negIndex[i+1]-1))
            console.log("negativ nelkul "+arr);
       }

       let arr5 = [...arr];
        
       for(let i =0; i!=arr5.length;i++){ 
        
           if((arr5[i]==="+"||arr5[i]==="*"||arr5[i]==="/") && (arr5[i+1]==="+"||arr5[i+1]==="*"||arr5[i+1]==="/"||arr5[i+1]==="-")){
               arr5.splice(i,1);
               i--;
           }
           if(arr5[i]==="-" && (arr5[i+1]==="+"||arr5[i+1]==="*"||arr5[i+1]==="/")){
               arr5.splice(i, 1);
               i--;
               console.log("megvan 3" +arr);
           }
         
        }
           console.log("arr5\n"+arr5);
       

       
       
       arr=[...arr5]
        


        while(i!=arr.length){
            if(arr[i]==="*"){
                let res = operation(arr[i-1],arr[i+1],arr[i]);
                arr[i-1]= res;
                arr.splice(i, 2);
                
                console.log(arr);
            } 
            if(arr[i]==="/"){
                let res = operation(arr[i-1],arr[i+1],arr[i]);
                arr[i-1]= res;
                arr.splice(i, 2);
                
                console.log(arr);
                }
                if(i!=arr.length){
                    i++; 
                }else{
                    i=0;
                }

                if(arr.length ===2 && (arr[0]==="+"||arr[0]==="*"||arr[0]==="/")){
                    arr.splice(0, 1);
                }

                setNum(arr[0]);
               
        }
        i=0;
        while(arr.length !=1){    
              
                if(arr[i]==="+"){
                let res = operation(arr[i-1],arr[i+1],arr[i]);
                arr[i-1]= res;
                arr.splice(i, 2);
               
                console.log(arr);
                }
                if(arr[i]==="-"){
                let res = operation(arr[i-1],arr[i+1],arr[i]);
                arr[i-1]= res;
                arr.splice(i, 2);
             
                console.log(arr);
                }
                if(i!=arr.length){
                    i++; 
                }else{
                    i=0;
                }
                
                if(arr.length ===2 && (arr[0]==="+"||arr[0]==="*"||arr[0]==="/")){
                    arr.splice(0, 1);
                }

                
            

                setNum(arr[0]);
       
        } 
        //setEquel(true);
    }
    //3 + 5 * 6 - 2 / 4 32.5 11.5

    function operation(num1,num2,op){
        if(op === "/"){
            return num1/num2;
        }
        if(op === "*"){
            return num1*num2;
        }
        if(op === "-"){
            return num1-num2;
        }
        if(op === "+"){
            return Number(num1)+Number(num2);
        }
    }


    return(
        <div className="container">
            <div className="row">
                <div id="display">{num}</div>
            </div>
            <div className="row mt-3">
                <button id="seven" className="btn btn-dark col pt-4 pb-4 m-1"onClick={()=>{
                    addNum("7");
                }}>7</button>
                <button id="eight" className="btn btn-dark col m-1" onClick={()=>{
                    addNum("8");
                }}>8</button>
                <button id="nine" className="btn btn-dark col m-1" onClick={()=>{
                    addNum("9");
                }}>9</button>
                <button id="multiply" className="btn btn-secondary col m-1" onClick={()=>{
                    addMark("*");
                }}>*</button>
            </div>
            <div className="row">
                <button id="four" className="btn btn-dark col pt-4 pb-4 m-1" onClick={()=>{
                    addNum("4");
                }}>4</button>
                <button id="five" className="btn btn-dark col m-1" onClick={()=>{
                    addNum("5");
                }}>5</button>
                <button id="six" className="btn btn-dark col m-1" onClick={()=>{
                    addNum("6");
                }}>6</button>
                <button id="subtract" className="btn btn-secondary col m-1" onClick={()=>{
                    addMark("-");
                }}>-</button>
            </div>
            
            <div className="row">  
                <button id="one" className="btn btn-dark col pt-4 pb-4 m-1" onClick={()=>{
                    addNum("1");
                }}>1</button>
                <button id="two" className="btn btn-dark col m-1" onClick={()=>{
                    addNum("2");
                }}>2</button>
                <button id="three" className="btn btn-dark col m-1" onClick={()=>{
                    addNum("3");
                }}>3</button>
                <button id="add" className="btn btn-secondary col m-1" onClick={()=>{
                    addMark("+");
                }}>+</button>
            </div>
            <div className="row">
                 <button id="zero" className="btn btn-dark col pt-4 pb-4 m-1" onClick={()=>{
                    addNum("0");
                }}>0</button>
                 <button id="decimal" className="btn btn-dark col m-1" onClick={()=>{
                    addDot(".");
                }}>.</button>   
                 <button id="equals" className="btn btn-primary col m-1" onClick={()=>{
                    equalHandler();
                }}>=</button>
                 <button id="divide" className="btn btn-secondary col m-1" onClick={()=>{
                    addMark("/");
                }}>/</button>
            </div>
           <div className="row">
                <button id="clear" className="btn btn-danger col pt-4 pb-4 m-1" onClick={()=>{
                    setNum("0");
                }}>AC</button>
            </div>
          



        </div>
    );
}

const root = ReactDOM.createRoot(
    document.getElementById('root')
  );

root.render(<App/>)