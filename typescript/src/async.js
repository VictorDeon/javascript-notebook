const promisify = (item, delay) => new Promise(resolve => setTimeout(() => resolve(item), delay));

const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);

// Executa um de cada vez
async function sequence() {
    const output1 = await a();
    const output2 = await b();
    const output3 = await c();
    return `Sequence is done: ${output1} ${output2} ${output3}`;
}

// Executar tudo ao mesmo tempo de forma concorrente (single-core CPU).
async function concurrency() {
    const promises = [a(), b(), c()];
    const [ output1, output2, output3 ] = await Promise.allSettled(promises);
    return `Parallel is done: ${output1.value} ${output2.value} ${output3.value}`;
}

// Terminar assim que o primeiro acabar.
async function race() {
    const promises = [a(), b(), c()];
    const output1 = await Promise.race(promises);
    return `Race is done: ${output1}`;
}

sequence().then(console.log);
race().then(console.log);
concurrency().then(console.log);