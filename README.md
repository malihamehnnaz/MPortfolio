# Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS.

To get started, take a look at src/app/page.tsx.

## Email Contact Form Setup

The contact form on the portfolio requires a backend API to send emails. You have two options:

### Option 1: Production Backend (Default)
The form defaults to using the production backend hosted on Railway:
- **Endpoint**: `https://portfolio-backend-production-0543.up.railway.app/send`
- No additional setup needed; forms will work automatically

### Option 2: Local Backend Development
To test the email API locally:

1. **Run the backend locally**:
   ```bash
   cd ../services/email_api
   python -m pip install -r requirements.txt
   python -m uvicorn main:app --reload
   ```
   Backend will be available at `http://127.0.0.1:8000`

2. **Configure the frontend** by creating `.env.local`:
   ```bash
   echo "NEXT_PUBLIC_EMAIL_API_URL=http://127.0.0.1:8000" > .env.local
   ```

3. **Run the frontend**:
   ```bash
   npm run dev
   ```
   Frontend will be available at `http://localhost:3000`

4. **Test the contact form**: Submit a message on the portfolio; it should send via your local backend

**Note**: The `.env.local` file is gitignored, so it won't be committed.

