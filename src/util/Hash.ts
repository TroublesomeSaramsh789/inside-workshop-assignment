import BCrypt from "bcryptjs";

export const generateHash = async (text: string) => {
  const salt = await BCrypt.genSalt();
  const hash = await BCrypt.hash(text, salt);
  return hash;
};

export const validateHash = async (text: string, hash:string) => {
  const result = await BCrypt.compare(text, hash);
  return result;
}


