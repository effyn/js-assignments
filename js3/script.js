function heeHaw(number)
{
    if (typeof number !== "number")
    {
        return console.log("Not a number!");
    }

    for (let i = 1; i <= number; i++)
    {
        console.log(i);
    }
}

heeHaw(true);
heeHaw(NaN);
heeHaw("Hello");
heeHaw(5);
heeHaw(6.8);
