//                                     For loop and While loop

const players = ['Harry', 'John', 'Maria', 'Ray', 'Alice', 'Potter', 'Burrito'];

for (player of players) { // Here, we loopthrough players
    console.log(player);
    if (player === 'Ray') { // This will check when Ray's turn comes, and then will give the further output.
        console.log("Ray is in my list!");
        break; // this will break the loop when we reach to Ray.
    }
}

let loading = 0;

while(loading < 100) {
    console.log("Website is loading!"); // I can't run this code right here, bc it will become infinite loop.

    loading++; // This simply means loading += 1;
}