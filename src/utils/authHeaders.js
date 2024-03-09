import CryptoJS from "crypto-js";

const timestamp = new Date().toISOString().slice(0, 10).split("-").join("");
const data = `Valantis_${timestamp}`;

export const authHeaders = CryptoJS.MD5(data).toString();
