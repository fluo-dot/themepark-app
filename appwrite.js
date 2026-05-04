const client = new Appwrite.Client()
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("69f8373c0021da6bf225");

const account = new Appwrite.Account(client);
const databases = new Appwrite.Databases(client);

const DATABASE_ID = "themepark-dp";     // MUSS exakt stimmen
const PROFILES_ID = "profiles";
const RESORTS_ID = "resots";
const PARKS_ID = "parks";
