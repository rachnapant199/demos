function showLetConst(){

    const n =9;

    if(n==9)
    {
        let c=2;
        var m=90
        document.write(n*c);
    }

    document.write("<br/>"+c)
    document.write("Here n is constant which can not be changed & let is used to create local variable")

}

const myPro = new Promise((res, rej) =>{

    res();
    rej();
});

myPro.then(
    
)