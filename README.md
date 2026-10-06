# DreamForge AI — runnable video-generator starter

## Run locally
1. Install Node.js 18+.
2. Open a terminal in this folder.
3. Run:
   node server.js
4. Open:
   http://localhost:3000

## What works now
- Cinematic video-generator UI
- Prompt input
- Reference image selection
- Aspect ratio / duration / model / quality controls
- Credits UI
- Generation progress
- Recent generation history
- Responsive design
- Backend `/api/generate` endpoint

## Make it a REAL AI video generator
The `/api/generate` endpoint is intentionally a safe demo stub. Connect a video generation provider there. Keep the provider API key on the server in an environment variable, never in frontend JavaScript.

Typical production flow:
Browser -> /api/generate -> video provider -> job ID -> polling/webhook -> storage URL -> browser.

You can then add authentication, PostgreSQL, Redis/BullMQ, cloud storage, payments, moderation, rate limits, and a production deployment.
