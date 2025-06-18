const config = {
   appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
   appwriteProject_ID: String(import.meta.env.VITE_APPWRITE_PROJECT_ID),
   appwriteDatabase_ID: String(import.meta.env.VITE_APPWRITE_DATABASE_ID),
   appwriteCollection_ID: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
   appwriteBucket_ID: String(import.meta.env.VITE_APPWRITE_BUCKET_ID)
}

export default config