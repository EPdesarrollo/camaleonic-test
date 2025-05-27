interface ConfiObject {
  MONGODB_URI: string;
}

export const config: ConfiObject = {
  MONGODB_URI: process.env.MONGODB_URI!,
};
