# TODO List for Task: Redirect Buttons and Update Contact Page

- [x] Update `src/routes.tsx`:
  - Import `Products` component
  - Change `/products` route from `<NotFound />` to `<Products />` then back to `<NotFound />` as per user feedback
  - Change `/contact` route from `<ContactUs />` to `<NotFound />`

- [x] Update `src/Home.tsx`:
  - Wrap "Explore Collections" button with `<Link to="/products">`
  - Wrap "Get A Quote" button with `<Link to="/contact">`
  - Add cursor-pointer to buttons for hover pointer

- [ ] Test the application to ensure buttons redirect correctly

# Additional Task: Enhance Stats Section Animations

- [x] Add scroll-triggered fade-in animation to stats section
- [x] Enhance hover effects on stat cards (e.g., more scale, glow)
- [x] Implement number counter animation that counts up from 0 on refresh

# Additional Task: Animate Products Section

- [x] Add scroll-triggered animations to products section (title, description, category buttons, items)
- [x] Use unique animations different from stats (e.g., slide-in from sides, bounce, stagger)
- [x] Enhance hover effects on category buttons and item cards

# Additional Task: Add Images to Sub-Products

- [x] Add image URLs to each sub-product item in categories data
- [x] Update product item cards to display images
- [x] Ensure images are responsive and styled appropriately

# Additional Task: Animate Benefits Section

- [x] Add scroll-triggered animations to benefits section (title, description, cards)
- [x] Make icons bigger, well-centered, and add floating animation
- [x] Enhance hover effects on benefit cards
