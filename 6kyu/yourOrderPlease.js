function yourOrder(string){
    const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const result = [];

    const splitStr = string.split(" ");
    
    for(let i = 0; i < splitStr.length; i++){
        splitStr.filter(el => {
            if(el.includes(nums[i])){
                result.push(el)
            }
        })
    }
    return result.join(" ")
}

yourOrder("4of Fo1r pe6ople g3ood th5e the2")
