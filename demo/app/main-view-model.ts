import { Observable } from 'tns-core-modules/data/observable';
import { CrossPlatformAES } from 'nativescript-crossplatform-aes';

export class HelloWorldModel extends Observable {

    constructor() {
        super();

        let cryptLib = new CrossPlatformAES();
        let plainText = "this is my plain text";
        let key = "your key";

        let cipherText = cryptLib.encryptPlainTextWithRandomIV(plainText, key);
        console.log(cipherText);

        let decryptedString = cryptLib.decryptCipherTextWithRandomIV(cipherText, key);

        console.log(decryptedString);

        console.log(cryptLib.generateRandomIV16());

    }
}
