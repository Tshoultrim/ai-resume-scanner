# Frontend Setup Guide

## Project Structure
```
frontend/
├── src/
│   ├── components/       # Reusable React components
│   │   ├── Header.jsx
│   │   ├── Navigation.jsx
│   │   ├── Footer.jsx
│   │   ├── TeamCard.jsx
│   │   └── SocialMemberCard.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Teams.jsx
│   │   ├── About.jsx
│   │   └── PrivacyPolicy.jsx
│   ├── services/        # API services
│   │   └── api.js
│   ├── config/          # Configuration files
│   │   └── axios.js
│   ├── App.jsx          # Main app component
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── public/              # Static assets
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── tailwind.config.js   # Tailwind CSS configuration
├── postcss.config.js    # PostCSS configuration
└── package.json         # Dependencies
```

## Installation Steps

1. **Navigate to frontend directory:**
   ```bash
   cd frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create `.env.local` file** (already created with default values):
   ```
   VITE_API_URL=http://localhost:5000/api
   ```

4. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

## Features Included

✅ React Router for navigation
✅ Tailwind CSS for styling
✅ Axios for API calls
✅ Responsive design
✅ Pre-built pages:
   - Home - Landing page with social members showcase
   - Teams - Display all teams and members
   - About - About organization, mission, and values
   - Privacy Policy - Privacy policy page

## API Endpoints Expected

Your backend should provide these endpoints:

```
GET    /api/teams              # Get all teams
GET    /api/teams/:id          # Get team by ID
POST   /api/teams              # Create new team
PUT    /api/teams/:id          # Update team
DELETE /api/teams/:id          # Delete team

GET    /api/members            # Get all members
GET    /api/members/:id        # Get member by ID
POST   /api/members            # Create new member
PUT    /api/members/:id        # Update member
DELETE /api/members/:id        # Delete member
```

## Customization

- Update team and member data in `src/pages/Teams.jsx` and `src/pages/Home.jsx`
- Modify colors in `tailwind.config.js`
- Add more components in `src/components/`
- Create additional pages in `src/pages/`

## Building for Production

```bash
npm run build
npm run preview
```

This will create an optimized production build in the `dist/` folder.
