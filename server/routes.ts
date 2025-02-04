import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertEnquirySchema } from "@shared/schema";

export function registerRoutes(app: Express): Server {
  app.post("/api/contacts", async (req, res) => {
    try {
      const contact = insertContactSchema.parse(req.body);
      const result = await storage.createContact(contact);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: String(error) });
    }
  });

  app.post("/api/enquiries", async (req, res) => {
    try {
      const enquiry = insertEnquirySchema.parse(req.body);
      const result = await storage.createEnquiry(enquiry);
      res.json(result);
    } catch (error) {
      res.status(400).json({ error: String(error) });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}