//Task 8 ------------------------------------------------------------------
const promise = new Promise((resolve) => {
    setTimeout(() => {
        resolve("Data loaded");
    }, 2000);
});

promise.then(data => {
    console.log(data);
})


//Task 9 ------------------------------------------------------------------
const promise1 = new Promise((resolve, reject) => {
    reject("Server Error");
});

promise1.catch(err => {
    console.log(err);
})


//Task 10 ----------------------------------------------------------------
function pay(balance, amount){
    return new Promise((resolve, reject) => {
        if(amount <= balance){
            resolve("Payment successful");
        } else {
            reject("Not enough money");
        }
    });
}

pay(1000, 300)
.then(msg => console.log(msg))
.catch(err => console.log(err));


//Task 11 -----------------------------------------------------------------
function getUser() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("User loaded");
            resolve("User");
        }, 1000);
    });
}

function getPosts(user) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Posts loaded");
            resolve("Posts");
        }, 1000);
    });
}

function getComments(posts) {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Comments loaded");
            resolve("Comments");
        }, 1000);
    });
}

getUser()
.then((user) => getPosts(user))
.then((post) => getComments(post))
.then(result => console.log(result));