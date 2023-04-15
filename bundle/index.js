"use strict";
// let nama: string = "Gera Anggara";
// let angka: number = 1234
// let isDead: boolean = false;
function createIntel(processor) {
    console.log(`
    ${processor.brand} berhasil membuat processor dengan detail berikut:
    ........
    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    kecepatan clock: ${processor.clockSpeed}
    turbo boost enable? ${processor.turboBoost}
    total core: ${processor.coreTotal}
    `);
}
function createAMD(processor) {
    console.log(`
    ${processor.brand} berhasil membuat processor dengan detail berikut:
    ........
    nama base model: ${processor.baseModel}
    nama model: ${processor.modelName}
    kecepatan clock: ${processor.clockSpeed}
    precision boost enable? ${processor.precisionBoost ? processor.precisionBoost : 'tidak ada'}
    total core: ${processor.coreTotal}
    `);
}
const coreI5 = {
    brand: 'intel',
    baseModel: 'core i5',
    modelName: '15-11340F',
    clockSpeed: 4,
    turboBoost: true,
    coreTotal: 4
};
const ryzen3 = {
    brand: 'AMD',
    baseModel: 'ryzen 3',
    modelName: 'r-5567x',
    clockSpeed: 6,
    precisionBoost: 'Yes, ready',
    coreTotal: 'Dual Core'
};
const ryzen1 = {
    brand: 'AMD',
    baseModel: 'ryzen 1',
    modelName: 'r-4337x',
    clockSpeed: 2,
    coreTotal: 'Quad Core'
};
createIntel(coreI5);
createAMD(ryzen3);
createAMD(ryzen1);
