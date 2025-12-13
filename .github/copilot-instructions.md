# AI Coding Guidelines for 3D Portfolio Project

## Project Overview
This is a single-page React application featuring an interactive 3D portfolio website built with Three.js, React Three Fiber, GSAP animations, and Tailwind CSS. The app consists of multiple sections (Hero, About, Experience, etc.) with 3D models and scroll-triggered animations.

## Architecture
- **Structure**: Flat component hierarchy with sections imported directly into `App.jsx`. No routing - single page with anchor links.
- **3D Scenes**: Located in `src/components/models/` subdirectories (hero_models, contact, tech_logos). Each scene uses React Three Fiber's `Canvas` component.
- **Data Layer**: All static data (nav links, content arrays, logos) centralized in `src/constants/index.js`.
- **Styling**: Tailwind CSS with custom theme colors defined in `src/index.css`. GSAP handles animations and scroll triggers.

## Key Patterns
- **3D Components**: Wrap 3D scenes in `Canvas` with `OrbitControls` for interaction. Use `Suspense` for loading models. Example: `HeroExperience.jsx` groups `Room`, `HeroLights`, and `Particles`.
- **Animations**: Use `useGSAP` hook with `ScrollTrigger` for scroll-based reveals. Register plugins at component level (e.g., `gsap.registerPlugin(ScrollTrigger)`).
- **Responsive Design**: Use `react-responsive` `useMediaQuery` for device-specific 3D scaling and controls (e.g., disable zoom on tablets).
- **Glow Effects**: Implement mouse-following glows using CSS variables and `Math.atan2` for angle calculation (see `GlowCard.jsx`).
- **Data Mapping**: Iterate over arrays from `constants/index.js` to render dynamic content like testimonials or tech stacks.

## Development Workflow
- **Setup**: Run `npm install`, create `.env` with EmailJS credentials (`VITE_APP_EMAILJS_*` variables).
- **Development**: `npm run dev` starts Vite dev server on port 5173.
- **Build**: `npm run build` for production build.
- **Linting**: `npm run lint` uses ESLint with React-specific rules.
- **No Tests**: Project lacks automated tests; validate manually in browser.

## Conventions
- **Component Naming**: PascalCase for components, camelCase for files (e.g., `HeroExperience.jsx`).
- **Imports**: Group external libraries first, then internal components/constants.
- **3D Models**: Position and scale models responsively; use `group` elements for transformations.
- **Animations**: Stagger animations with `stagger` property; use `power2.inOut` easing consistently.
- **Colors**: Use theme colors like `--color-white-50`, `--color-black-100` instead of hardcoded values.

## Integration Points
- **EmailJS**: Contact form sends emails via `emailjs.send()`. Requires environment variables for service ID, template ID, and public key.
- **Assets**: Images in `public/images/`, models in `public/models/`. Reference with absolute paths starting with `/`.
- **External Fonts**: Mona Sans loaded via Google Fonts in `index.css`.

## Common Pitfalls
- **3D Performance**: Limit particle counts on mobile; use `isMobile` checks for scaling.
- **Scroll Animations**: Ensure `ScrollTrigger` triggers are set to "top 80%" or similar for consistent reveals.
- **Environment Variables**: Prefix with `VITE_` for Vite exposure; restart dev server after changes.</content>
<parameter name="filePath">c:\Users\BaraAlsedih\Documents\GitHub\portfolio3d\.github\copilot-instructions.md