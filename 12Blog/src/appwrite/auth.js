import conf from '../conf/conf.js';
import { Client, Account, ID } from "appwrite";

export class AuthService{
    client = new Client();
    account;
    constructor(){
        this.client = new Client()
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.account = new Account(this.client)
    }

    async createAccount({email, password, name}){
        try{
            const userAccount = await this.account.create(ID.unique(), email, password, name);
            if (userAccount){
                // call another method
                return this.login({email, password})
            } else {
                return userAccount;
            }
        } catch(error){
            throw error;
        }
    }

    async login({email, password}){
        try{
            // Use object-style call to avoid deprecated positional arguments
            return await this.account.createEmailPasswordSession({ email, password });
        } catch(error){
            throw error;
        }
    }

    async getCurrentUser(){
        try{
            return await this.account.get();
        } catch(error){
            console.log("Appwrite service :: getCurrentUser :: error", error)
        }
        return null;
    }

    // deleting a session means logging out
    // delete sessions means logging out from all devices
    async logout(){
        try{
            return await this.account.deleteSessions();
        } catch(error){
            throw error;
        }
    }
}

// so user does not make a new object
const authService = new AuthService();

export default authService