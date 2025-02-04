import { db } from "./db";
import { contacts, enquiries, type Contact, type InsertContact, type Enquiry, type InsertEnquiry } from "@shared/schema";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry>;
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    const [result] = await db.insert(contacts).values(contact).returning();
    return result;
  }

  async createEnquiry(enquiry: InsertEnquiry): Promise<Enquiry> {
    const [result] = await db.insert(enquiries).values(enquiry).returning();
    return result;
  }
    async getUser(id: number): Promise<User | undefined> {
    const [result] = await db.selectFrom('users').where('id', '=', id).executeTakeFirstOrThrow()
    return result
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    const [result] = await db.selectFrom('users').where('username', '=', username).executeTakeFirstOrThrow()
    return result
  }

  async createUser(user: InsertUser): Promise<User> {
    const [result] = await db.insertInto('users').values(user).returning('*').executeTakeFirstOrThrow()
    return result
  }
}

export const storage = new DatabaseStorage();