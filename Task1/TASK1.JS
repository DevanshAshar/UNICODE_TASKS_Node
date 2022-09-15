class task1
{
    static main()
    {
        const ps=require("prompt-sync");
        const prompt=ps();
        //Declaring Variables
        var i=0,j=0,k=0,m=0,ct1=0,temp,temp1,flag=0;
        let n=prompt("Enter number of words ");
        var st = Array(n);
        var ct = Array(n);
        var nst = Array(n);
        //Initialising nst and ct to 0
        for (i = 0; i < n; i++)
        {
            nst[i] = " ";
            ct[i]=0;
        }
        //Taking Input of words
        for (i = 0; i < n; i++)
        {
            st[i]=prompt("Enter word " + (i + 1) + " ");
        }  
        //Storing words of st in nst which doesnt contain repeated words 
        for (i = 0; i < n; i++)
        {
            ct1 = 0;
            for (k = 0; k <= i; k++)
            {
                //checking for repeated words
                if (nst[k]== st[i])
                {
                    ct1++;
                }
            }
            if (ct1 == 0)
            {
                nst[m] = st[i];
                m++;
            }
        }
        //m is the length of nst so m=distinct words
        console.log("Distict words="+m);
        console.log("Frequency by words ");
        for(i=0;i<m;i++)
        {
            for(j=0;j<n;j++)
            if(nst[i]==st[j])//calculating frequency of each word by comparing elements of nst to that of st
            ct[i]++;
            console.log(nst[i]+"="+ct[i]);
        }
        console.log("Maximum Frequency");
        for(i=0;i<m;i++)
        {
            flag=0;
            for(j=0;j<m;j++)
            if(ct[i]>=ct[j])//checking for max 
            flag++;//if freq is max then condition will always be true and flag will be m
            if(flag==m)
            console.log(nst[i]);
        }
        console.log("Minimum Frequency");
        for(i=0;i<m;i++)
        {
            flag=0;
            for(j=0;j<m;j++)
            if(ct[i]<=ct[j])//similar to that of max
            flag++;
            if(flag==m)
            console.log(nst[i]);
        }
        for(i=0;i<m;i++)
        {
            for(j=0;j<m;j++)
            {
                if(ct[j]<ct[j+1])//sorting words with respect to their freq.
                {
                    temp1=ct[j];
                    temp=nst[j];
                    ct[j]=ct[j+1];
                    nst[j]=nst[j+1];
                    nst[j+1]=temp;
                    ct[j+1]=temp1;
                }
            }
        }
        console.log("In Descending Order");
        //printing
        for(i=0;i<m;i++)
        console.log(nst[i]);
    }
}
task1.main();