const VolumeCalculation = (towers) => {
    
    for(i = 0; i < towers.length; i++){
        let totalVolume = []
        let nextTower = towers[i + 1]
        if(towers[i] <= nextTower){
            totalVolume.push(towers[i])
        } else if(towers[i] >= nextTower){
            totalVolume.push(nextTower)
    }
        return totalVolume
    }
}

console.log(VolumeCalculation(["1", "3", "5", "2"]))
