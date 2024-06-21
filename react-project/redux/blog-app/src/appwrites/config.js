import conf from "../conf/conf";
import { Client, Databases, ID, Storage, Query } from "appwrite";

export class Servise {
      client = new Client();
      database;
      bucket;
      constructor() {
            this.client
                  .setEndpoint(conf.appwriteURL)
                  .setProject(conf.appwriteProjectId);
            this.database = new Databases(this.client);
            this.bucket = new Storage(this.client);
      }
      async createPost({ title, slug, content, featuredImages, status, userId }) {
            try {
                  return await this.database.createDocument(
                        conf.appwriteDataBaseId,
                        conf.appwriteCollectionId,
                        slug,
                        {
                              title, content, featuredImages, status, userId
                        }
                  )
            } catch (error) {
                  console.log('createpost' + error);
            }
      }

      async updataPost(slug, { title, content, featuredImages, status }) {
            try {
                  return await this.database.updateDocument(

                        conf.appwriteDataBaseId,
                        conf.appwriteCollectionId,
                        slug,
                        {
                              title, content, featuredImages, status,
                        }

                  )
            } catch (error) {
                  console.log('updatpost ' + error);
            }

      }
      async deletePost(slug) {
            try {
                  return await this.database.deleteDocument(
                        conf.appwriteDataBaseId,
                        conf.appwriteCollectionId,
                        slug
                  )

            } catch (error) {
                  console.log('delete post ' + error);
            }
      }
      async getPosts(queries = [Query.equal('status,active')]) {
            try {
                  return await this.database.listDocuments(
                        conf.appwriteDataBaseId,
                        conf.appwriteCollectionId,
                        queries,

                  )
            } catch (error) {
                  console.log('get posts ' + error);
            }
      }
      async uploadFiles(file) {
            try {
                  return await this.bucket.createFile(
                        conf.appwriteBucketId,
                        ID.unique(),
                        file
                  )
            } catch (error) {
                  console.log('uPLOADFILES' + error);
            }
      }

      async deletefiles(fileId) {
            try {
                  this.bucket.deleteFile(
                        conf.appwriteBucketId,
                        fileId,
                  )
                  return true
            } catch (error) {
                  console.log(`delete fill` + error);
                  return false
            }
      }
      async getFilesPreview(fileId) {
            return await this.bucket.getFilesPreview(
                  conf.appwriteBucketId,
                  fileId,
            )
      }
}
const servise = new Servise();

export default servise;