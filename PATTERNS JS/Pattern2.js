function Pattern2()
{

    let n = 3;

    let i = 1;

    let string = "";
    
    while(i<=n)
    {
        let  j = 1;
        while(j<=n)
        {
            string += i;
            j = j + 1; 
        }
       
        string += "\n";
        i = i + 1;
    }
    
    console.log(string);
}

Pattern2();