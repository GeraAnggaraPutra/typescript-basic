// let nama: string = "Gera Anggara";
// let angka: number = 1234
// let isDead: boolean = false;

// let user: any; // initialisasi dengan semua tipe data
// // Initialisasi awal kosong
// // array biasa
// let bahasa: string[];
// bahasa = ['jawa', 'sunda'];

// // array tuple
// let bio: [string, number, boolean];
// bio = ['nama',112, true]

// console.log(nama)
// console.log({angka})
// console.log({isDead})
// console.log({bahasa})
// console.log({bio})

// type data custom
// type TemanType = {
//     nama: string,
//     isDead: boolean,
//     hutang?: number, // bisa tidak bernilai
// }
// let teman: TemanType;
// teman = {
//     nama: 'jhon',
//     isDead: false,
//     // hutang: 20_000
// }
// console.log({ teman })

// function
// const create2 = (): string => 'world';
// function create(): string {
//     return 'hello';
// }

// function add(x:number, y:number): void {
//     const z:number = x + y;
//     console.log('hasilnya = ' + z)
// }
// function add(x:number, y:number): string {
//     return `${x} ditambah ${y} = ${x + y}`;
// }

// add(1,2)

// const result = add(2,3);
// console.log(result)
type CoreCount = 2 | 4 | 8 | 12;
type CoreName = 'Dual Core' | 'Quad Core' | 'Octa Core';
type Core = CoreCount | CoreName;

interface IProcessor{
    brand: string;
    baseModel: string;
    modelName: string;
    coreTotal: Core;
    clockSpeed: number;
}

// interface IProcessor {
//     turboBoost: boolean;
// }

interface Intel extends IProcessor {
    turboBoost: boolean;
}

interface AMD extends IProcessor {
    precisionBoost?: string;
}

function createIntel(processor: Intel): void {
    console.log(`
    ${processor.brand} berhasil membuat processor dengan detail berikut:
    ........
    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    kecepatan clock: ${processor.clockSpeed}
    turbo boost enable? ${processor.turboBoost}
    total core: ${processor.coreTotal}
    `)
}
function createAMD(processor: AMD): void {
    console.log(`
    ${processor.brand} berhasil membuat processor dengan detail berikut:
    ........
    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    kecepatan clock: ${processor.clockSpeed}
    precision boost enable? ${processor.precisionBoost ? processor.precisionBoost : 'tidak ada'}
    total core: ${processor.coreTotal}
    `)
}

const coreI5: Intel = {
    brand: 'intel',
    baseModel: 'core i5',
    modelName: '15-11340F',
    clockSpeed: 4,
    turboBoost: true,
    coreTotal:4
}
const ryzen3: AMD = {
    brand: 'AMD',
    baseModel: 'ryzen 3',
    modelName: 'r-5567x',
    clockSpeed: 6,
    precisionBoost: 'Yes, ready',
    coreTotal: 'Dual Core'
}
const ryzen1: AMD = {
    brand: 'AMD',
    baseModel: 'ryzen 1',
    modelName: 'r-4337x',
    clockSpeed: 2,
    coreTotal: 'Quad Core'
}
createIntel(coreI5);
createAMD(ryzen3)
createAMD(ryzen1)