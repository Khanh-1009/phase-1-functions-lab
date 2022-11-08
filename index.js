// Code your solution in this file!

function distanceFromHqInBlocks(someValue){
    return Math.abs(someValue - 42);
}

function distanceFromHqInFeet(someValue){
    return distanceFromHqInBlocks(someValue) * 264;
}

function distanceTravelledInFeet(start, destination){
    return Math.abs((destination - start)*264)
}

function calculatesFarePrice(start, destination){
    const res = distanceTravelledInFeet(start, destination)
    if (res < 400){
        return 0;
    } else if (res >= 400 && res <= 2000){
        return ((res-400)*0.02);
    } else if (res > 2000){
        if (res > 2500){
            return 'cannot travel that far';
        }
        return 25;
    }
}