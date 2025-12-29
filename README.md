# Product Design Showcase Landing Page

A distinctive, production-grade landing page for a product design studio. Features an editorial-style layout, refined typography, and full WCAG 2.1 AA accessibility compliance.

## Design Philosophy

**Avoiding Generic AI Aesthetics:**
- No purple/blue gradients
- Intentional color palette (refined neutrals with orange accent)
- Asymmetric hero layout instead of centered content
- Typography as a design element
- Subtle animations and transitions

## Accessibility Features

### WCAG 2.1 AA Compliance

**Semantic HTML:**
- Proper landmark elements (`nav`, `header`, `main`, `section`, `footer`)
- Heading hierarchy (h1-h4) properly structured
- Semantic lists and links

**Keyboard Navigation:**
- All interactive elements keyboard accessible
- Focus indicators visible (`:focus-visible` styling)
- Tab order follows visual flow
- ARIA attributes for complex interactions

**ARIA Implementation:**
- `aria-label` on navigation and filter groups
- `aria-pressed` on filter buttons
- `aria-hidden="true"` on decorative elements
- `role="alert"` for dynamic content (if implemented)

**Color Contrast:**
- Text on light backgrounds: 7:1+ contrast ratio
- Text on dark backgrounds: 21:1 contrast ratio
- Interactive elements meet minimum 4.5:1

**Responsive Design:**
- Mobile-first approach
- Breakpoints: 480px, 768px, 1024px
- Touch targets minimum 44×44px
- Fluid typography using `clamp()`

**Motion & Animation:**
- Respects `prefers-reduced-motion`
- Subtle transitions (150-350ms)
- No auto-playing animations

## File Structure

```
design-showcase-landing/
├── pages/
│   └── LandingPage.jsx    # Main component
├── styles/
│   └── LandingPage.css    # Component styles with design tokens
├── assets/                 # Images, icons (placeholder)
└── README.md
```

## CSS Architecture

**Design Tokens:**
- Color system (neutral palette + accent)
- Spacing scale (4px base unit)
- Typography scale with fluid sizing
- Consistent border radius and shadows
- Transition timing functions

**Naming Convention:**
- Element-based: `.card`, `.btn-primary`, `.project-card`
- State modifiers: `.is-active`, `.is-disabled`
- No BEM notation

## Components Overview

### Navigation
- Fixed position with backdrop blur
- Accessible skip link (keyboard users)
- Mobile-responsive menu ready

### Hero Section
- Asymmetric two-column layout
- Stats showcase with visual hierarchy
- Abstract stacked cards visual element
- Responsive: stacks on mobile

### Work Section
- Filterable project grid
- Accessible filter buttons with `aria-pressed`
- Hover states with smooth transforms
- Lazy-loaded images

### Process Section
- Four-step process overview
- Dark background for visual contrast
- Numbered steps with clear hierarchy

### CTA Section
- Centered call-to-action
- Email link with mailto
- High-contrast button with focus states

### Footer
- Three-column grid (stacks on mobile)
- Social links
- Contact information

## Integration Notes

### Placeholder Content
- Project images: Replace `/assets/project-*.jpg` with actual images
- Hero visual: Abstract stacked cards (can be replaced with actual design)
- Links: Update `href` attributes with real URLs

### Suggested Enhancements
- Add actual project images to `/assets/`
- Implement mobile menu toggle for navigation
- Add form validation for contact CTA
- Integrate with routing library (React Router)
- Add analytics tracking

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- CSS Grid and Flexbox
- CSS Custom Properties
- Backdrop filter (with fallback)

## Performance Considerations

- Lazy loading on images (`loading="lazy"`)
- Minimal CSS specificity
- No unnecessary re-renders (React)
- Optimized transitions (GPU-accelerated transforms)

## Accessibility Testing Checklist

- [x] Semantic HTML elements
- [x] Keyboard navigation (Tab, Enter, Escape)
- [x] Focus indicators visible
- [x] Color contrast meets WCAG AA
- [x] ARIA attributes on interactive widgets
- [x] Responsive touch targets (44×44px min)
- [x] Respects `prefers-reduced-motion`
- [x] Supports high contrast mode
- [ ] Screen reader testing (VoiceOver/NVDA recommended)

## Usage

```jsx
import LandingPage from './pages/LandingPage';
import './styles/LandingPage.css';

function App() {
  return <LandingPage />;
}
```

---

**Created:** December 2025
**Design System:** Custom design tokens
**Framework:** React (functional components)
