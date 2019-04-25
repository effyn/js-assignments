function arrayObject(array)
{
    let result = {
        strings: [],
        numbers: [],
        booleans: []
    };

    for (let item of array)
    {
        switch (typeof item)
        {
            case "string":
                result.strings.push(item);
                continue;
            case "number":
                result.numbers.push(item);
                continue;
            case "boolean":
                result.booleans.push(item);
        }
    }

    return result;
}

let obj = arrayObject([1, 3, true, false, "hello", "world"]);
document.body.innerHTML = "<p>" + JSON.stringify(obj) + "</p>";