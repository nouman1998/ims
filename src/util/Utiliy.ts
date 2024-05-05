function randomString(length: number = 16) {
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
    let result = '';
    for (let i = length; i > 0; --i) result += chars[Math.round(Math.random() * (chars.length - 1))];
    return result;
}

export function generatePostmasterId() {
    return "PM-" + randomString();
}

export function generateOtp(): string {
    return randomString(5);
}

export function getDateAfterDays(days: number): Date {
    let date: Date = new Date();
    date.setDate(date.getDate() + days);
    return date;
}

export function verifyDateExpiry(date: Date): boolean {
    return date < new Date();
}