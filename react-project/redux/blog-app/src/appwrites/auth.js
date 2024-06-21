import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

export class AuthService {
      client = new Client()
      account;
      constructor() {
            this.client
                  .setEndpoint(conf.appwriteURL)
                  .setProject(conf.appwriteProjectId);
            this.account = new Account(this.client);
      }
      async createAccount({ email, password, name }) {
            try {
                  return await this.account.create(ID.unique(), email, password, name)

            } catch (error) {
                  console.log(`creactacout ` + error);
            }
      }

      async login({ email, password }) {
            try {
                  return await this.account.createEmailSession(email, password)

            } catch (error) {
                  console.log(`login` + error);
            }
      }

      async getCurrentUser() {

            try {
                  return await this.account.get()
            } catch (error) {
                  console.log(`getCurrentUser${error}`);
            }
      }

      async logout() {
            try {
                  return await this.account.deleteSession()

            } catch (error) {
                  console.log(`logout ${error}`);
            }
      }
}

const authService = new AuthService()
export default authService