[![npm](https://img.shields.io/npm/v/nativescript-crossplatform-aes.svg)](https://www.npmjs.com/package/nativescript-crossplatform-aes)
[![npm](https://img.shields.io/npm/dt/nativescript-crossplatform-aes.svg?label=npm%20downloads)](https://www.npmjs.com/package/nativescript-crossplatform-aes)
[![Build Status](https://travis-ci.org/jibon57/nativescript-crossplatform-aes.svg?branch=master)](https://travis-ci.org/jibon57/nativescript-crossplatform-aes)
# nativescript-crossplatform-aes 
 Simple Cross platform 256bit AES encryption / decryption based on [Cross-Platform-AES](https://github.com/skavinvarnan/Cross-Platform-AES)

 **Note:** I am not an expert of neigher iOS nor Android. So, please contribute if you think something you can do better :)

 ## Platforms supported 

1. iOS
2. Android
3. NodeJS

## Features:

1. Cross platform support. Encryption-Decryption works across iOS, Android and Node.js. 

2. Automatically RandomIV is added while encryption and remove first randomized blocks while decryption.

3. Support for Random IV (initialization vector) for encryption and decryption. Randomization is crucial for encryption schemes to achieve semantic security, a property whereby repeated usage of the scheme under the same key does not allow an attacker to infer relationships between segments of the encrypted message.

4.  Support for SHA-256 for hashing the key. Never use plain text as encryption key. Always hash the plain text key and then use for encryption. AES permits the use of 256-bit keys. Breaking a symmetric 256-bit key by brute force requires 2^128 times more computational power than a 128-bit key. A device that could check a billion billion (10^18) AES keys per second would in theory require about 3×10^51 years to exhaust the 256-bit key space.

## Installation

```javascript
tns plugin add nativescript-crossplatform-aes
```
## Simple Usage in NativeScript

```javascript
import { CrossPlatformAES } from 'nativescript-crossplatform-aes';

let cryptLib = new CrossPlatformAES();
let plainText = "this is my plain text"
let key = "your key"

let cipherText = cryptLib.encryptPlainTextWithRandomIV(plainText, key);
console.log(cipherText);

let decryptedString = cryptLib.decryptCipherTextWithRandomIV(cipherText, key)
console.log(decryptedString);
```

## Other Custom Methods
```javascript
encryptPlainTextWithSuppliedIV(plainText: string, key: string, iv: string);
decryptCipherTextWithSuppliedIV(cipherText: string, key: string, iv: string);
generateRandomIV16(): any;
```

## NodeJS
Install the library
```javascript
npm install @skavinvarnan/cryptlib --save
```

Then use it

```javascript
const cryptLib = require('@skavinvarnan/cryptlib');

const plainText = "this is my plain text";
const key = "your key";

const cipherText = cryptLib.encryptPlainTextWithRandomIV(plainText, key);
console.log('cipherText %s', cipherText);

const decryptedString = cryptLib.decryptCipherTextWithRandomIV(cipherText, key);
console.log('decryptedString %s', decryptedString);
```
