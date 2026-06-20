//Task 15 -----------------------------------------------------------------
function wait(time){
    return new Promise((resolve) => {
        setTimeout(resolve, time);
    });
}

function traffic(){
    console.log("Red");

    wait(3000)
    .then(() => {
        console.log("Yellow");
        return wait(1000);
    })
    .then(() => {
        console.log("Green");
        return wait(2000);
    })
    .then(() => {
        traffic();
    })
}

traffic();


//Task 16 -----------------------------------------------------------------
function downloadFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("File downloaded");
            resolve();
        }, 1000);
    });
}

function resizeImage() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("Image resized");
            resolve();
        }, 1000);
    });
}

function uploadFile() {
    return new Promise(resolve => {
        setTimeout(() => {
            console.log("File uploaded");
            resolve();
        }, 1000);
    });
}

downloadFile()
.then(resizeImage)
.then(uploadFile);


//Task 17 -----------------------------------------------------------------
//Call stack`
//это место где JavaScript выполняет код.
//Когда вызывается функция, она попадает в Call Stack.
//Когда функция заканчивает работу — она удаляется из него.

//Web API`
//это возможности браузера или Node.js,
//которые помогают JavaScript работать с асинхронностью.
//Например: setTimeout, fetch, события кнопок и т.д.
//Они выполняются вне Call Stack.

//Macrotask Queue`
//очередь для задач вроде setTimeout и setInterval.
//Когда асинхронная задача заканчивается,
//её callback попадает сюда.

//Microtask Queue`
//очередь для Promise.then, catch, finally.
//У этой очереди приоритет выше,
//поэтому Microtasks выполняются раньше Macrotasks.

//Event Loop`
//механизм который постоянно проверяет:
//пуст ли Call Stack.
//Если он пуст,
//Event Loop берёт задачи из очередей и отправляет 
//их в Call Stack для выполнения.
