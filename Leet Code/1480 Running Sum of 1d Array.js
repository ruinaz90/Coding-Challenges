nums.map((num,index)=>{    
        if(index!=0){
            return nums[index] = num + nums[index-1];
        }
    })
    return nums
