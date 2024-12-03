function reverseArray(arr){
    let rev_arr=[]
        for(i=arr.length-1;i>=0;i--)
        {
          rev_arr.push(arr[i])
        }
        return rev_arr
    }
    let new_arr=[10,30,50,70]
    
    let res=reverseArray(new_arr)
    
    console.log(res)