# Vercel Deployment

Deploy the frontend and backend as services in one Vercel project.

- Set the project Root Directory to the repository root so Vercel reads the root `vercel.json`.
- The `backend` service uses `Backend` and the Express app exported by `src/index.ts`.
- The `frontend` service uses `frontend` and builds the Vite app.
- The root `vercel.json` routes `/api/*` requests to the backend and all other requests to the frontend.
- Add `MONGODB_URI` with the MongoDB Atlas connection string.
- Add `JWT_SECRET` with a long, unique random value.
- Set `VITE_API_URL` to the backend service URL if the frontend needs to call it directly.
- Allow the deployed backend's network access to reach the MongoDB Atlas cluster.

For local backend development, copy `Backend/.env.example` to `Backend/.env` and replace both example values with real values. Do not commit `.env`.