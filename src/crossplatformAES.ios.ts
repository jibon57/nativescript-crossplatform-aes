import { Observable } from 'tns-core-modules/data/observable';
declare var CryptLib;

export class CrossplatformAES extends Observable {

    public cryptLibClass;

    constructor() {
        super();
        this.cryptLibClass = CryptLib.alloc();
    }

    /**
     * encryptPlainTextWithRandomIV
     */
    public encryptPlainTextWithRandomIV(plainText: string, key: string) {
        return this.cryptLibClass.encryptPlainTextRandomIVWithPlainTextKey(plainText, key);
    }

    /**
     * decryptCipherTextWithRandomIV
     */
    public decryptCipherTextWithRandomIV(cipherText: string, key: string) {
        return this.cryptLibClass.decryptCipherTextRandomIVWithCipherTextKey(cipherText, key);
    }

    /**
     * encryptPlainTextWithoutIV
     */
    public encryptPlainTextWithSuppliedIV(plainText: string, key: string, iv: string) {
        return this.cryptLibClass.encryptKeyIv(plainText, key, iv);
    }

    /**
     * decryptCipherTextWithoutIV
     */
    public decryptCipherTextWithSuppliedIV(cipherText: string, key: string, iv: string) {
        return this.cryptLibClass.decryptKeyIv(cipherText, key, iv);
    }

    /**
     * generateRandomIV16
     */
    public generateRandomIV16() {
        return this.cryptLibClass.generateRandomIV16();
    }

}

