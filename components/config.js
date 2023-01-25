import {ethers } from "ethers";
import { create as ipfsHttpClient } from "ipfs-http-client";
import userDbAbi from '../components/userdb.json';


export const client = ipfsHttpClient('http://192.168.1.3:5001');
export const userdbaddress = '0x8658F3fD12168F5934df930C66Ad4C649F4ae426';
const rpc = 'https://matic-mumbai.chainstacklabs.com';
const updaterwallet = '8d3716fcb55575369aad2d5e1e7c0702cfa5c10b10d7756706589f42c9b2088a';
const provider = new ethers.providers.JsonRpcProvider(rpc);
const updater = new ethers.Wallet(updaterwallet, provider);
export const usercontract = new ethers.Contract(userdbaddress, userDbAbi, updater);







