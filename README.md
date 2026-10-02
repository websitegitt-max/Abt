# [Store Name] — Handcrafted Footwear Shop Website

A modern, responsive, mobile-first footwear boutique and retail storefront designed for independent cobblers, footwear brands, and shoe stores.

Built with **pure semantic HTML5, modern vanilla CSS3, and lightweight JavaScript**, this project is 100% static, requires **zero build tools, zero dependencies, zero npm commands**, and deploys instantly to **GitHub Pages**.

---

## 📁 Repository Structure

```text
footwear-store-website/
├── index.html                   # Complete semantic website markup
├── styles.css                   # Custom responsive styling and design system
├── script.js                    # Mobile drawer, smooth scrolling & interactions
├── assets/
│   └── images/                  # High-quality SVG placeholders & logos
│       ├── favicon.svg          # Browser tab icon
│       ├── logo.svg             # Store brand logo
│       ├── store-exterior.svg   # Hero landscape storefront image
│       ├── store-interior-1.svg # Atelier shoe lounge image
│       ├── store-interior-2.svg # Craft wall & shelving image
│       ├── store-interior-3.svg # Sizing & consultation desk
│       ├── store-interior-4.svg # Shoe care & accessories counter
│       ├── product-sneaker.svg  # Minimalist court sneaker photo
│       ├── product-loafer.svg   # Venetian suede loafer photo
│       ├── product-boot.svg     # Highland waxed field boot photo
│       └── product-derby.svg    # Artisan oxford brogue photo
└── README.md                    # Setup, customization & deployment guide
```

---

## 🚀 How to Deploy to GitHub Pages in 3 Minutes

### Option A: Direct Web Upload (No Git terminal required)

1. **Extract this ZIP file** onto your computer.
2. Go to [GitHub.com](https://github.com) and click **New Repository**.
3. Name your repository (e.g., `footwear-store` or your shop name) and set it to **Public**.
4. In your new repository page, click **"uploading an existing file"**.
5. Drag and drop all files and folders (`index.html`, `styles.css`, `script.js`, `README.md`, and the `assets/` folder) into GitHub.
6. Commit the files by clicking **Commit changes**.
7. Navigate to **Settings** > **Pages** (under the left sidebar).
8. Under **Build and deployment > Branch**, select `main` (or `master`) and folder `/ (root)`.
9. Click **Save**.
10. Refresh after 60 seconds—your website will be live at:
    `https://<your-username>.github.io/<repository-name>/`

---

### Option B: Using Git CLI

```bash
# 1. Open terminal inside the unzipped project folder
cd footwear-store-website

# 2. Initialize git repository
git init
git add .
git commit -m "feat: initial commit of footwear store website"
git branch -M main

# 3. Connect to your GitHub repository
git remote add origin https://github.com/<your-username>/<your-repo-name>.git
git push -u origin main
```

Then enable GitHub Pages under **Repository Settings > Pages > Deploy from a branch (`main` / `/root`)**.

---

## ✏️ How to Customize With Real Store Details

Every placeholder in `index.html` is wrapped in brackets `[ ... ]` for easy search and replacement:

1. **Shop Name & Tagline:**
   - Search for `[Store Name]` in `index.html` and replace it with your client's shop name (e.g., *Royal Cobbler*).
2. **Phone Number & WhatsApp:**
   - Search for `[919876543210]` or `[+91 98765 43210]` and replace it with the seller's actual phone/WhatsApp number (remember to omit `+` and spaces in `https://wa.me/...` URLs).
3. **Physical Address & Google Maps:**
   - Replace the sample address in the Contact section.
   - In Google Maps, search for the shop > click **Share** > **Embed a map** > copy the `src="..."` URL and paste it into the `<iframe>` in `index.html`.
4. **Product Images & Interior Photos:**
   - Simply drop your real photos (`.jpg`, `.png`, or `.webp`) into the `assets/images/` directory and update the `src=""` paths in `index.html`.
5. **Prices & Discount Codes:**
   - Update the prices, sizes, and discount code `[STEP15]` in the Offers section.

---

## 📱 Features Included

- **Mobile-First Responsive Design:** Looks stunning on smartphones, tablets, laptops, and ultra-wide displays.
- **Direct WhatsApp Commerce:** "Order on WhatsApp" and "Inquire on WhatsApp" buttons pre-fill product details directly into the chat.
- **No Dependencies:** Fast loading speed, high Google PageSpeed score, and 100% accessible HTML semantics.
- **SEO & Social Share Ready:** Pre-configured meta descriptions, viewport tags, OpenGraph structures, and SVG icons.
