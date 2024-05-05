import * as bcrypt from 'bcrypt';

const saltRounds = 10

export async function encryptPassword(password: string): Promise<string> {
    let salt = await bcrypt.genSalt(saltRounds);
    return await bcrypt.hash(password, salt)
}

export async function verifyPassword(password: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(password, hash)
}