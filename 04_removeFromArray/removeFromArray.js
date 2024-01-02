const removeFromArray = function(array, ...rem) {
        res = [];
        outer: for(const elem of array)
        {
            for(const remElem of rem)
            {
                if(elem === remElem) continue outer;
            }
            res = res.concat(elem);
        }
        return res;
};

// Do not edit below this line
module.exports = removeFromArray;
