for (let i = 1; i <= 100; i++) {
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