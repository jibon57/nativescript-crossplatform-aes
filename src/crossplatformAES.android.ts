import { Observable } from 'tns-core-modules/data/observable';
declare var com;

export class CrossplatformAES extends Observable {

    public cryptLibClass;

    constructor() {
        super();
        this.cryptLibClass = new com.jibon.crossplatformaes.CryptLib();
    }

    /**
     * encryptPlainTextWithRandomIV
     */
    public encryptPlainTextWithRandomIV(plainText: string, key: string) {
        return this.cryptLibClass.encryptPlainTextWithRandomIV(plainText, key);
    }

    /**
     * decryptCipherTextWithRandomIV
     */
    public decryptCipherTextWithRandomIV(cipherText: string, key: string) {
        return this.cryptLibClass.decryptCipherTextWithRandomIV(cipherText, key);
    }

    /**
     * encryptPlainTextWithoutIV
     */
    public encryptPlainTextWithSuppliedIV(plainText: string, key: string, iv: string) {
        return this.cryptLibClass.encryptPlainText(plainText, key, iv);
    }

    /**
     * decryptCipherTextWithoutIV
     */
    public decryptCipherTextWithSuppliedIV(cipherText: string, key: string, iv: string) {
        return this.cryptLibClass.decryptCipherText(cipherText, key, iv);
    }

    /**
     * generateRandomIV16
     */
    public generateRandomIV16() {
        return this.cryptLibClass.generateRandomIV16();
    }
}
