import { z } from 'zod'

export const leadSchema = z.object({
  fullName:        z.string().min(2).max(120),
  email:           z.string().email(),
  phone:           z.string().max(40).optional().or(z.literal('')),
  telegramHandle:  z.string().max(100).optional().or(z.literal('')),
  companyName:     z.string().max(160).optional().or(z.literal('')),
  website:         z.string().url({ message: 'Invalid URL' }).optional().or(z.literal('')),
  country:         z.string().max(100).optional().or(z.literal('')),
  language:        z.string().max(20).optional().or(z.literal('')),
  serviceInterest: z.string().max(100).optional().or(z.literal('')),
  budgetRange:     z.string().max(100).optional().or(z.literal('')),
  timeline:        z.string().max(100).optional().or(z.literal('')),
  message:         z.string().min(10).max(3000),
  source:          z.string().default('website'),
  landingPath:     z.string().max(300).optional().or(z.literal('')),
  referrer:        z.string().max(500).optional().or(z.literal('')),
  utmSource:       z.string().max(100).optional().or(z.literal('')),
  utmMedium:       z.string().max(100).optional().or(z.literal('')),
  utmCampaign:     z.string().max(100).optional().or(z.literal('')),
  utmContent:      z.string().max(100).optional().or(z.literal('')),
  utmTerm:         z.string().max(100).optional().or(z.literal('')),
})

export type LeadInput = z.infer<typeof leadSchema>
