import CryptoJS from 'crypto-js';

const SECRET_KEY = 'your-secret-key';

export const crypto = {
  // AES 加密
  encrypt(text: string, key: string = SECRET_KEY): string {
    return CryptoJS.AES.encrypt(text, key).toString();
  },

  // AES 解密
  decrypt(ciphertext: string, key: string = SECRET_KEY): string {
    const bytes = CryptoJS.AES.decrypt(ciphertext, key);
    return bytes.toString(CryptoJS.enc.Utf8);
  },

  // MD5 加密
  md5(text: string): string {
    return CryptoJS.MD5(text).toString();
  },

  // Base64 编码
  encodeBase64(text: string): string {
    return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(text));
  },

  // Base64 解码
  decodeBase64(base64: string): string {
    return CryptoJS.enc.Base64.parse(base64).toString(CryptoJS.enc.Utf8);
  },

  // SHA256 加密
  sha256(text: string): string {
    return CryptoJS.SHA256(text).toString();
  }
}; 