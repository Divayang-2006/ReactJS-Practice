import config from "../config/config";
import { Client, Account, ID, Databases, Storage, Query} from 'appwrite';

export class Service {
   client = new Client();
   databases;
   bucket;
   constructor(){
      this.client
      .setEndpoint(config.appwriteUrl)
      .setProject(config.appwriteProject_ID);
      this.databases = new Databases(this.client);
      this.bucket = new Storage(this.client);
   }

   // Post Structure

   async createPost({title, slug, content, featuredImage, status, userId}){
      try {
         return await this.databases
         .createDocument(
            config.appwriteDatabase_ID,
            config.appwriteCollection_ID,
            slug,
            {
               title, 
               content,
               featuredImage,
               status,
               userId
            }
         )
      } catch (error) {
         throw error;
      }
   }

   async updatePost (slug, {title, content, featuredImage, status}){
      try {
         return await this.databases.updateDocument(
            config.appwriteDatabase_ID,
            config.appwriteCollection_ID,
            slug,
            {
               title,
               content,
               featuredImage,
               status
            }
         )
      } catch (error) {
         throw error;
      }
   }

   async deletePost(){
      try {
         await this.databases(
            config.appwriteDatabase_ID,
            config.appwriteCollection_ID,
            slug
         );
         return true;
      } catch (error) {
         return False;
      }
   }

   async getPost(slug){
      try {
         return await this.databases.getDocument(
            config.appwriteDatabase_ID,
            config.appwriteCollection_ID,
            slug
         )
      } catch (error) {
         throw error;
      }
   }

   async listPosts(){
      try {
         return await this.databases.listDocuments(
            config.appwriteDatabase_ID,
            config.appwriteCollection_ID,
            [
               Query.equal('status', true)
            ]
         )
      } catch (error) {
         throw error;
      }
   }

   // File upload sevice
   async uploadFile(file){
      try {
         return await this.bucket.createFile(
            config.appwriteBucket_ID,
            ID.unique(),
            file
         )
      } catch (error) {
         throw error;
      }
   }
   async deleteFile(fileId){
      try {
         await this.bucket.deleteFile(
            config.appwriteBucket_ID,
            fileId
         )
         return true;
      } catch (error) {
         return false;
      }
   }

   async getFilePreview(featuredImage){
      return this.bucket.getFilePreview(config.appwriteBucket_ID, featuredImage)
   }
   


}

const service = new Service();
export default service;