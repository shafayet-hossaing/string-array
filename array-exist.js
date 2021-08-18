function megaFriends(friends){
    if(Array.isArray(friends) == false){
        return "Bhai Tmi akta array dew"
    }
    let mega = friends[0]
    for(const friend of friends){
        if(friend.length > mega.length){
            mega = friend
        }
    }
    return mega
}

const friends = ["Shamim","shafayet","Tamim","Juwel"]
const getFriends = megaFriends(544)
// console.log(getFriends);



// checking if shafayet is in array or not
if(friends.indexOf("shafayet") != -1){
    // console.log("Paisi indexOf diya");
}



// checking again if shafayet is in array or not
if(friends.includes("shafayet")){
    console.log("Paisi includes diya");
}