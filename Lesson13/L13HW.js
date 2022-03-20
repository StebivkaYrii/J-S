//створити пошагово розпорядок дня
// setTimeout(()=>{
//     let counter = 0;
//
// },1000)
let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        let counter = 0;
        console.log('7:50 - подзвонив будильник', counter);
        resolve(counter);
    }, 1000)
});

promise
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('8:10 - встаю і одягаюсь', counter);
                resolve(counter);
            }, 1000)
        });
    })
    .then(counter => {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                counter++;
                console.log('8:20 - роблю чай, ставлю сковорідку на плиту, іду в ванну', counter);
                resolve(counter);
            }, 1000)
        });
    })
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('8:40 - взуваюсь одягаю верхній одяг виходжу з дому', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('8:58 - приходжу на роботу відкриваю магазин', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('10:00 - роблю каву дивлюсь відоси Сергія', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('11:00 - розпалюю в котлі', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('14:00 - закриваю магазин', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('14:30 - заходжу до бабці в гості', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('15:30 - іду додому', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('16:00 - прийшов, зготував поїсти пошарився подивився новини', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('18:00 - сідаю за компютер починаю дивитись що по завданнях із Js', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('20:00 - вечеря', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('21:00 - продовжую сидіти за компютером', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('23:00 - іду віддихати, дивлюсь меми на толефоні', counter);
            resolve(counter);
        }, 1000)
    });
})
    .then(counter => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            counter++;
            console.log('00:00 - спати', counter);
            resolve(counter);
        }, 1000)
    });
})