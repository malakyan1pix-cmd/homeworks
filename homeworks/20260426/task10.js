const stats = new WeakMap();

function trackAccess(obj){
    stats.set(obj, 0);

    return new Proxy(obj, {
        get(target, prop){
            stats.set(target, stats.get(target) + 1);
            return target[prop];
        }
    });
}

function getStats(obj){
    return stats.get(obj);
}
// Input
const original = { a: 1, b: 2 };
const proxy = trackAccess(original);

// Actions (reading properties via proxy):
console.log(proxy.a);
console.log(proxy.b);
console.log(proxy.a);

// Expected Output
console.log(getStats(original)); 
// 3