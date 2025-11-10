# TODO: Implement Sticky Header and Conditional TopBar Visibility

- [x] Create `src/components/Layout.tsx` component with scroll detection logic
- [x] Implement conditional rendering: show TopBar at top, hide on scroll; make Header sticky on scroll
- [x] Move Routes, Footer, and floating call button into Layout.tsx
- [x] Update `src/routes.tsx` to export Layout component instead of AppRoutes
- [x] Update `src/App.tsx` to import and use Layout instead of AppRoutes
- [x] Test scroll behavior on different screen sizes (dev server running on http://localhost:5174/)
- [ ] Verify Header navigation and mobile menu functionality
- [ ] Check for z-index or styling conflicts
