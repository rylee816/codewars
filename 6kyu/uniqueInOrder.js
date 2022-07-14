

const uniqueInOrder = (iterable) => {
    iterable = !Array.isArray(iterable) ? iterable.split("") : iterable;
    let res = [];
    for (let i = 0; i < iterable.length; i++){
        if(iterable[i] === iterable[i + 1]) continue;
        else {
            res.push(iterable[i])
        }
    }
    return res;
}

uniqueInOrder('ABBCcAD')