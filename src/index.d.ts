import { Observable } from 'tns-core-modules/data/observable';
export declare class CrossplatformAES extends Observable {
    cryptLibClass: any;
    constructor();
    encryptPlainTextWithRandomIV(plainText: string, key: string): any;
    decryptCipherTextWithRandomIV(cipherText: string, key: string): any;
    encryptPlainTextWithSuppliedIV(plainText: string, key: string, iv: string): any;
    decryptCipherTextWithSuppliedIV(cipherText: string, key: string, iv: string): any;
    generateRandomIV16(): any;
}
