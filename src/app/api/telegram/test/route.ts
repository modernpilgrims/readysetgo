import { NextResponse } from 'next/server'
import { sendLeadToTelegram } from '@/lib/telegram/send-message'

/**
 * GET /api/telegram/test
 * Quick smoke test to verify Telegram bot credentials.
 * Remove or protect this route before going to production.
 */
export async function GET() {
  try {
    await sendLeadToTelegram({
      id:      'test-id-000',
      fullName: 'Test User',
      email:   'test@readysetgo.com',
      message: 'This is a test notification from Ready Set Go.',
      source:  'test',
    })
    return NextResponse.json({ ok: true, message: 'Telegram test sent' })
  } catch (err) {
    return NextResponse.json(
      { ok: false, error: String(err) },
      { status: 500 }
    )
  }
}
