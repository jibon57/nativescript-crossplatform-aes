
declare class CryptLib extends NSObject {

	static alloc(): CryptLib; // inherited from NSObject

	static new(): CryptLib; // inherited from NSObject

	decryptCipherTextKeyIv(cipherText: string, key: string, iv: string): string;

	decryptCipherTextRandomIVWithCipherTextKey(cipherText: string, key: string): string;

	decryptKeyIv(encryptedText: NSData, key: string, iv: string): NSData;

	encryptKeyIv(plainText: NSData, key: string, iv: string): NSData;

	encryptPlainTextKeyIv(plainText: string, key: string, iv: string): string;

	encryptPlainTextRandomIVWithPlainTextKey(plainText: string, key: string): string;

	generateRandomIV(length: number): NSData;

	generateRandomIV16(): NSData;

	md5(input: string): string;

	sha256Length(key: string, length: number): string;
}
