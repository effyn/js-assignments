function heeHaw(number)
{
    if (typeof number !== "number")
    {
        return console.log("Not a number!");
    }

    for (let i = 1; i <= number; i++)
    {
        if (i % 3 === 0) {
            if (i % 5 === 0) {
                console.log("Hee Haw!");
            }
            else {
                console.log("Hee!");
            }
        }
        else if (i % 5 === 0) {
            console.log("Haw!");
        }
        else {
            console.log(i);
        }
    }
}

heeHaw(true);
heeHaw(NaN);
heeHaw("Hello");
heeHaw(25);
heeHaw(81.4);
