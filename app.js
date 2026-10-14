/* ==========================================================================
   MUHAMMED ADIL TP // PORTFOLIO JAVASCRIPT ENGINE
   Navigation, MacBook Video Audio, Modals, Lightboxes, and Scroll Animations
   ========================================================================== */

(function () {
  'use strict';

  // --- Complete Project Data Store (8 Disciplines Fallback & Offline Cache) ---
  const WORK_ITEMS = {
    "podcast-1": {
        "category": "PODCAST",
        "title": "Laman Dialogue // Studio Master Episode 01",
        "img": "assets/projects/podcast/thumb-1.jpg",
        "video": "assets/projects/podcast/laman-1.mp4",
        "desc": "High-retention multi-cam podcast cut with automated speaker switching, studio dialogue leveling, and pacing.",
        "client": "Laman Media",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "Audition",
            "Multi-Cam"
        ]
    },
    "podcast-2": {
        "category": "PODCAST",
        "title": "Laman Dialogue // Studio Master Episode 02",
        "img": "assets/projects/podcast/thumb-2.jpg",
        "video": "assets/projects/podcast/laman-2.mp4",
        "desc": "Dynamic podcast episode edit featuring punch zooms, lower-thirds motion graphics, and audio restoration.",
        "client": "Laman Media",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "Audition",
            "Audio Mix"
        ]
    },
    "podcast-3": {
        "category": "PODCAST",
        "title": "Manifestra Podcast // Multi-Cam Session 01",
        "img": "assets/projects/podcast/thumb-3.jpg",
        "video": "assets/projects/podcast/manifestra-1.mp4",
        "desc": "Multi-angle studio interview edit with voice isolation, chapter markers, and engagement pacing.",
        "client": "Manifestra",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "After Effects",
            "Color Grade"
        ]
    },
    "podcast-4": {
        "category": "PODCAST",
        "title": "Manifestra Podcast // Multi-Cam Session 02",
        "img": "assets/projects/podcast/thumb-4.jpg",
        "video": "assets/projects/podcast/manifestra-2.mp4",
        "desc": "Full studio dialogue cut engineered for long-form retention and crisp acoustic clarity.",
        "client": "Manifestra",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "Audition",
            "Sound Design"
        ]
    },
    "reels-1": {
        "category": "REELS & SHORTS",
        "title": "Arjun Ashokan // Celebrity Feature Reel",
        "img": "assets/projects/reels-shorts/thumb-1.jpg",
        "video": "assets/projects/reels-shorts/reel-1.mp4",
        "desc": "High-retention vertical reel cut featuring kinetic beat sync, typography overlays, and color grade.",
        "client": "Arjun Ashokan",
        "year": "2024",
        "vertical": true,
        "tags": [
            "CapCut",
            "Premiere Pro",
            "Viral Edit"
        ]
    },
    "reels-2": {
        "category": "REELS & SHORTS",
        "title": "Car Delivery // Luxury Delivery Reel",
        "img": "assets/projects/reels-shorts/thumb-2.jpg",
        "video": "assets/projects/reels-shorts/reel-2.mp4",
        "desc": "Cinematic automotive delivery short with speed ramps, sound design, and reflective light flares.",
        "client": "Auto Luxe",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "DaVinci Resolve",
            "Sound Foley"
        ]
    },
    "reels-3": {
        "category": "REELS & SHORTS",
        "title": "G Wagon // Mercedes AMG Viral Short",
        "img": "assets/projects/reels-shorts/thumb-3.jpg",
        "video": "assets/projects/reels-shorts/reel-3.mp4",
        "desc": "Fast-paced luxury SUV showcase with exhaust audio sync and kinetic whip cuts.",
        "client": "Luxury Motors",
        "year": "2024",
        "vertical": true,
        "tags": [
            "CapCut",
            "Premiere Pro",
            "Speed Ramps"
        ]
    },
    "reels-4": {
        "category": "REELS & SHORTS",
        "title": "Niksha Gold // Fine Jewellery Reel",
        "img": "assets/projects/reels-shorts/thumb-4.jpg",
        "video": "assets/projects/reels-shorts/reel-4.mp4",
        "desc": "High-end gold jewellery promo with elegant sparkle light sweeps, micro-details, and smooth pans.",
        "client": "Niksha Gold",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "DaVinci Resolve",
            "Commercial"
        ]
    },
    "reels-5": {
        "category": "REELS & SHORTS",
        "title": "Nivin Pauly // Star Presence Reel",
        "img": "assets/projects/reels-shorts/thumb-5.jpg",
        "video": "assets/projects/reels-shorts/reel-5.mp4",
        "desc": "Celebrity stage appearance reel with crowd ambiance foley, bass drops, and sharp transitions.",
        "client": "Celebrity Media",
        "year": "2024",
        "vertical": true,
        "tags": [
            "CapCut",
            "Premiere Pro",
            "Pacing"
        ]
    },
    "reels-6": {
        "category": "REELS & SHORTS",
        "title": "Sunny // Lifestyle Portrait Short",
        "img": "assets/projects/reels-shorts/thumb-6.jpg",
        "video": "assets/projects/reels-shorts/reel-6.mp4",
        "desc": "Vibrant outdoor lifestyle reel with golden sunlight color grade and modern beat timing.",
        "client": "Personal Brand",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "Color Grade",
            "Lifestyle"
        ]
    },
    "reels-7": {
        "category": "REELS & SHORTS",
        "title": "TBC // Commercial Teaser Short",
        "img": "assets/projects/reels-shorts/thumb-7.jpg",
        "video": "assets/projects/reels-shorts/reel-7.mp4",
        "desc": "Brand awareness vertical short with punchy typographic cues, sound impact, and sleek framing.",
        "client": "TBC Studio",
        "year": "2024",
        "vertical": true,
        "tags": [
            "CapCut",
            "After Effects",
            "Branding"
        ]
    },
    "reels-8": {
        "category": "REELS & SHORTS",
        "title": "Thamanna // Red Carpet Spotlight Short",
        "img": "assets/projects/reels-shorts/thumb-8.jpg",
        "video": "assets/projects/reels-shorts/reel-8.mp4",
        "desc": "Dynamic spotlight reel capturing flash photography rhythms, slow zooms, and high elegance.",
        "client": "Celebrity Spotlight",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "DaVinci Resolve",
            "Spotlight"
        ]
    },
    "cinematic-1": {
        "category": "CINEMATIC",
        "title": "Mahee // Narrative Cinematic Visual 01",
        "img": "assets/projects/cinematic/thumb-1.jpg",
        "video": "assets/projects/cinematic/cinematic-1.mp4",
        "desc": "High-contrast anamorphic film look exploring cinematic textures, dramatic lighting, and deep color science.",
        "client": "Mahee Productions",
        "year": "2024",
        "vertical": true,
        "tags": [
            "DaVinci Resolve",
            "Premiere Pro",
            "Color Grading"
        ]
    },
    "cinematic-2": {
        "category": "CINEMATIC",
        "title": "Maheee Full // Extended Director Cut 02",
        "img": "assets/projects/cinematic/thumb-2.jpg",
        "video": "assets/projects/cinematic/cinematic-2.mp4",
        "desc": "Extended 4K director cut featuring atmospheric soundscape design, emotive pacing, and evocative lighting.",
        "client": "Mahee Productions",
        "year": "2024",
        "vertical": false,
        "tags": [
            "DaVinci Resolve",
            "Audition",
            "Director Cut"
        ]
    },
    "cinematic-3": {
        "category": "CINEMATIC",
        "title": "Meralda Kochi // Coastal Heritage Cut 01",
        "img": "assets/projects/cinematic/thumb-3.jpg",
        "video": "assets/projects/cinematic/cinematic-3.mp4",
        "desc": "Heritage travel and lifestyle film highlighting authentic textures, golden hour sunlight, and rhythm.",
        "client": "Meralda Kochi",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "DaVinci Resolve",
            "Cinematic"
        ]
    },
    "cinematic-4": {
        "category": "CINEMATIC",
        "title": "Meralda Kochi // Coastal Heritage Cut 02",
        "img": "assets/projects/cinematic/thumb-4.jpg",
        "video": "assets/projects/cinematic/cinematic-4.mp4",
        "desc": "Sensory visual story capturing local traditions, architecture, and evocative slow-motion details.",
        "client": "Meralda Kochi",
        "year": "2024",
        "vertical": true,
        "tags": [
            "DaVinci Resolve",
            "Premiere Pro",
            "Slow Motion"
        ]
    },
    "cinematic-5": {
        "category": "CINEMATIC",
        "title": "Payyoli // Culinary Visual Story",
        "img": "assets/projects/cinematic/thumb-5.jpg",
        "video": "assets/projects/cinematic/cinematic-5.mp4",
        "desc": "Cinematic food cinematography film with sizzling audio foley, macro spice details, and warm grading.",
        "client": "Payyoli Culinary",
        "year": "2024",
        "vertical": false,
        "tags": [
            "Premiere Pro",
            "DaVinci Resolve",
            "Macro Film"
        ]
    },
    "wedding-1": {
        "category": "WEDDING",
        "title": "Hayyath // Sacred Union Highlights",
        "img": "assets/projects/wedding/thumb-1.jpg",
        "video": "assets/projects/wedding/wedding-1.mp4",
        "desc": "Emotional wedding teaser film capturing heartfelt vows, family laughter, and elegant bridal portraits.",
        "client": "Hayyath & Family",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "DaVinci Resolve",
            "Teaser Film"
        ]
    },
    "wedding-2": {
        "category": "WEDDING",
        "title": "Taj Makkaraparamb // Royal Celebration Film",
        "img": "assets/projects/wedding/thumb-2.jpg",
        "video": "assets/projects/wedding/wedding-2.mp4",
        "desc": "Grand celebration film featuring majestic ballroom lighting, drone aerial sweeps, and orchestral music.",
        "client": "Taj Makkaraparamb",
        "year": "2024",
        "vertical": true,
        "tags": [
            "DaVinci Resolve",
            "Premiere Pro",
            "Grand Celebration"
        ]
    },
    "wedding-3": {
        "category": "WEDDING",
        "title": "Fidha & Nabeel // Eternal Wedding Film",
        "img": "assets/projects/wedding/thumb-3.jpg",
        "video": "assets/projects/wedding/wedding-3.mp4",
        "desc": "Full cinematic highlight reel balancing candid romance, slow-motion glances, and golden hour palette.",
        "client": "Fidha & Nabeel",
        "year": "2024",
        "vertical": false,
        "tags": [
            "Premiere Pro",
            "Audition",
            "Highlight Reel"
        ]
    },
    "fastcut-1": {
        "category": "FAST CUTS",
        "title": "House Warming // Kinetic Architectural Edit",
        "img": "assets/projects/fast-cuts/thumb-1.jpg",
        "video": "assets/projects/fast-cuts/fastcut-1.mp4",
        "desc": "High-tempo architectural celebration film with whip pans, speed ramps, and energetic beat mapping.",
        "client": "Private Residence",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "Speed Ramps"
        ]
    },
    "fastcut-2": {
        "category": "FAST CUTS",
        "title": "Maddy Verse // Speed Ramp Kinetic Cut",
        "img": "assets/projects/fast-cuts/thumb-2.jpg",
        "video": "assets/projects/fast-cuts/fastcut-2.mp4",
        "desc": "Fast-paced kinetic edit with match cuts, directional zooms, and punchy bass drops.",
        "client": "Maddy Verse",
        "year": "2024",
        "vertical": true,
        "tags": [
            "CapCut",
            "Match Cuts"
        ]
    },
    "fastcut-3": {
        "category": "FAST CUTS",
        "title": "Mahee // High-Tempo Rhythm Edit",
        "img": "assets/projects/fast-cuts/thumb-3.jpg",
        "video": "assets/projects/fast-cuts/fastcut-3.mp4",
        "desc": "Aggressive rhythm cut synchronized down to individual audio transients for maximum impact.",
        "client": "Mahee Productions",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "Audio Sync"
        ]
    },
    "fastcut-4": {
        "category": "FAST CUTS",
        "title": "Orixa Athletic Club // Adrenaline Cut",
        "img": "assets/projects/fast-cuts/thumb-4.jpg",
        "video": "assets/projects/fast-cuts/fastcut-4.mp4",
        "desc": "Adrenaline-fueled training promo with split-second match cuts, punch zooms, and heavy bass beat sync.",
        "client": "Orixa Athletics",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "Fitness Cut"
        ]
    },
    "fastcut-5": {
        "category": "FAST CUTS",
        "title": "Pitlane Automotive // Precision Detailing Spot",
        "img": "assets/projects/fast-cuts/thumb-5.jpg",
        "video": "assets/projects/fast-cuts/fastcut-5.mp4",
        "desc": "High-energy automotive detailing promo featuring spray droplet cuts, polisher audio, and fast whip transitions.",
        "client": "Pitlane Vadakara",
        "year": "2024",
        "vertical": true,
        "tags": [
            "Premiere Pro",
            "Whip Pans"
        ]
    },
    "fastcut-6": {
        "category": "FAST CUTS",
        "title": "Nadapuram Sneaker Hub // Retail Launch Cut",
        "img": "assets/projects/fast-cuts/thumb-6.jpg",
        "video": "assets/projects/fast-cuts/fastcut-6.mp4",
        "desc": "Urban streetwear store opening cut packed with jump cuts, neon flashing, and rapid beat pulses.",
        "client": "Nadapuram Sneaker Destination",
        "year": "2024",
        "vertical": true,
        "tags": [
            "CapCut",
            "Street Style"
        ]
    },
    "shortfilm-1": {
        "category": "SHORT FILM",
        "title": "Akale // Independent Narrative Short Film",
        "img": "assets/projects/short-film/thumb-1.jpg",
        "video": "assets/projects/short-film/shortfilm-1.mp4",
        "desc": "A deeply emotional narrative exploration of memory, distance, and silence. Crafted with an anamorphic cinematic palette, organic film grain, and deliberate pacing that breathes life into every unsaid emotion.",
        "client": "Independent Film Project",
        "year": "2024",
        "vertical": false,
        "tags": [
            "Narrative Drama",
            "Independent Cinema",
            "DaVinci Resolve",
            "Audition"
        ]
    },
    "motion-1": {
        "category": "MOTION GRAPHICS",
        "title": "Coffee Motion // Kinetic Commercial Animation",
        "img": "assets/projects/motion-graphics/thumb-1.jpg",
        "video": "assets/projects/motion-graphics/motion-1.mp4",
        "desc": "Fluid motion graphics commercial featuring particle dynamics, cup reveals, and kinetic typography.",
        "client": "Artisan Coffee",
        "year": "2024",
        "vertical": false,
        "tags": [
            "After Effects",
            "Kinetic Motion",
            "Commercial"
        ]
    },
    "motion-2": {
        "category": "MOTION GRAPHICS",
        "title": "Logo Reveal // Minimalist 3D Motion Identity",
        "img": "assets/projects/motion-graphics/thumb-2.jpg",
        "video": "assets/projects/motion-graphics/motion-2.mp4",
        "desc": "High-impact logo reveal animation with slick kinetic easing, ambient glow, and sound design.",
        "client": "Brand Motion",
        "year": "2024",
        "vertical": false,
        "tags": [
            "After Effects",
            "Logo Reveal",
            "Identity"
        ]
    },
    "motion-3": {
        "category": "MOTION GRAPHICS",
        "title": "Studify // Motion Brand Logo Sequence",
        "img": "assets/projects/motion-graphics/thumb-3.jpg",
        "video": "assets/projects/motion-graphics/motion-3.mp4",
        "desc": "Playful, energetic motion graphics intro for educational platform with smooth shape morphing.",
        "client": "Studify Learning",
        "year": "2024",
        "vertical": false,
        "tags": [
            "After Effects",
            "Shape Morph",
            "Branding"
        ]
    },
    "motion-4": {
        "category": "MOTION GRAPHICS",
        "title": "Text & Shape // Kinetic Typography Sequence",
        "img": "assets/projects/motion-graphics/thumb-4.jpg",
        "video": "assets/projects/motion-graphics/motion-4.mp4",
        "desc": "Fast-tempo typography and abstract geometry animation built for social media hooks.",
        "client": "Creative Studio",
        "year": "2024",
        "vertical": false,
        "tags": [
            "After Effects",
            "Kinetic Typography",
            "Abstract"
        ]
    },
    "design-1": {
        "category": "GRAPHIC DESIGN",
        "title": "Royal Dining // Restaurant Menu Front Cover & Master Layout",
        "img": "assets/projects/graphic-design/artboard-1.jpg",
        "video": "",
        "desc": "Complete front cover and primary menu architecture featuring gold typography, decorative filigree, and organized multi-course sections.",
        "client": "Royal Dining Restaurant",
        "year": "2024",
        "vertical": true,
        "tags": [
                    "Illustrator",
                    "Photoshop",
                    "Print Menu",
                    "Layout Design"
        ]
    },
    "design-2": {
        "category": "GRAPHIC DESIGN",
        "title": "Royal Dining // Refreshments & Dessert Back Menu",
        "img": "assets/projects/graphic-design/back-menu.jpg",
        "video": "",
        "desc": "Beverage, fresh juices, and signature dessert menu spread designed with clear pricing columns and luxury brand motifs.",
        "client": "Royal Dining Restaurant",
        "year": "2024",
        "vertical": true,
        "tags": [
                    "Illustrator",
                    "Print Design",
                    "Menu Architecture",
                    "Beverage List"
        ]
    },
    "design-3": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Punjabi Multicuisine Restaurant Brand Identity",
        "img": "assets/projects/graphic-design/rasaar-cover.jpg",
        "video": "",
        "desc": "Master brand presentation cover combining traditional Punjabi motifs, royal crown emblem, and deep crimson culinary tones.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Illustrator",
                    "Photoshop",
                    "Brand Identity",
                    "Logo Design"
        ]
    },
    "design-4": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Brand Story, Mission & Narrative Philosophy",
        "img": "assets/projects/graphic-design/rasaar-brand-story.jpg",
        "video": "",
        "desc": "Core narrative architecture documenting the authentic culinary heritage, royal hospitality, and soul of North Indian cuisine.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Illustrator",
                    "Brand Strategy",
                    "Editorial Design",
                    "Storytelling"
        ]
    },
    "design-5": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Brand Color Palette & Visual System",
        "img": "assets/projects/graphic-design/rasaar-color-palette.jpg",
        "video": "",
        "desc": "Sensory color palette featuring Rich Burgundy, Royal Saffron, Warm Cream, and Gold, crafted to stimulate appetite and premium feel.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Illustrator",
                    "Color Theory",
                    "Brand Guidelines",
                    "Visual System"
        ]
    },
    "design-6": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Brand Typography, Grid & Decorative Elements",
        "img": "assets/projects/graphic-design/rasaar-typography.jpg",
        "video": "",
        "desc": "Custom typeface pairing, headline hierarchy, geometric mandalas, and traditional architectural border elements.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Illustrator",
                    "Typography",
                    "Vector Art",
                    "Brand Design"
        ]
    },
    "design-7": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Digital Ordering UI & Mobile App Experience",
        "img": "assets/projects/graphic-design/rasaar-digital-menu.jpg",
        "video": "",
        "desc": "Mobile app interface and digital contactless menu design engineered for seamless food discovery and high-conversion ordering.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "UI/UX",
                    "Mobile App",
                    "Digital Menu"
        ]
    },
    "design-8": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Instagram Grid Architecture & Social Identity",
        "img": "assets/projects/graphic-design/rasaar-instagram-feed.jpg",
        "video": "",
        "desc": "Cohesive 9-tile social media feed aesthetic combining high-contrast food photography, typography graphics, and festive promos.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Social Media",
                    "Feed Curation",
                    "Content Design"
        ]
    },
    "design-9": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Mobile Social Stories & Engagement Campaigns",
        "img": "assets/projects/graphic-design/rasaar-story-mockup.jpg",
        "video": "",
        "desc": "High-retention 9:16 Instagram and Facebook story templates tailored for daily specials, customer reviews, and chef highlights.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Social Stories",
                    "Mobile Creative",
                    "Marketing"
        ]
    },
    "design-10": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Royal Punjabi Thali Special Promotional Poster",
        "img": "assets/projects/graphic-design/rasaar-thali-post.jpg",
        "video": "",
        "desc": "Appetizing promotional poster spotlighting the multi-dish Punjabi Thali with authentic bronze tableware and bold typography.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Advertising",
                    "Poster Design",
                    "Food Photography"
        ]
    },
    "design-11": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Crispy Punjabi Samosa Social Ad Campaign",
        "img": "assets/projects/graphic-design/rasaar-samosa-post.jpg",
        "video": "",
        "desc": "Macro food promotional poster highlighting crispy samosas with tamarind and mint chutneys, crafted for social conversion.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Social Creative",
                    "Food Advertising",
                    "Typography"
        ]
    },
    "design-12": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Signature Sweet Lassi Campaign Creative",
        "img": "assets/projects/graphic-design/rasaar-lassi-post.jpg",
        "video": "",
        "desc": "Cooling traditional beverage advertising poster with clay kulhad styling, pistachio garnishes, and golden sun accents.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Poster Design",
                    "Social Creative",
                    "Beverage Ad"
        ]
    },
    "design-13": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Authentic Punjabi Cuisine Cultural Feature",
        "img": "assets/projects/graphic-design/rasaar-cuisine-post.jpg",
        "video": "",
        "desc": "Cultural brand poster celebrating the clay oven tandoor tradition and rich North Indian gravy culinary arts.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Cultural Branding",
                    "Editorial Post",
                    "Art Direction"
        ]
    },
    "design-14": {
        "category": "GRAPHIC DESIGN",
        "title": "Rasaar // Textured Brand Seal & Packaging Mark",
        "img": "assets/projects/graphic-design/rasaar-textured-brand.jpg",
        "video": "",
        "desc": "Embossed metallic gold brand emblem on textured crimson linen paper, designed for premium takeout bags and wax seals.",
        "client": "Rasaar Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Illustrator",
                    "Photoshop",
                    "Packaging",
                    "Brand Seal"
        ]
    },
    "design-15": {
        "category": "GRAPHIC DESIGN",
        "title": "We Desi // Rajasthani Restaurant Master Brand Identity",
        "img": "assets/projects/graphic-design/wedesi-cover.jpg",
        "video": "",
        "desc": "Comprehensive brand identity deck cover celebrating the vibrant royal folklore, palaces, and spices of Rajasthan.",
        "client": "We Desi Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Illustrator",
                    "Photoshop",
                    "Brand Identity",
                    "Deck Design"
        ]
    },
    "design-16": {
        "category": "GRAPHIC DESIGN",
        "title": "We Desi // Mobile App UI & Table Reservation Mockup",
        "img": "assets/projects/graphic-design/wedesi-mobile-app.jpg",
        "video": "",
        "desc": "Sleek smartphone UI mockup featuring online table reservation, daily chef specials, and loyalty reward tracking.",
        "client": "We Desi Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "UI/UX",
                    "Mobile Mockup",
                    "App Design"
        ]
    },
    "design-17": {
        "category": "GRAPHIC DESIGN",
        "title": "We Desi // Dine-In Menu Card Spread & Print Mockup",
        "img": "assets/projects/graphic-design/wedesi-menu-cards.jpg",
        "video": "",
        "desc": "Hardcover physical menu booklet spread with embossed gold logo, rich imagery, and clear dietary allergen indicators.",
        "client": "We Desi Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Illustrator",
                    "Print Layout",
                    "Menu Design",
                    "Mockup"
        ]
    },
    "design-18": {
        "category": "GRAPHIC DESIGN",
        "title": "We Desi // Gulabi Nagari Jaipur Heritage Campaign Poster",
        "img": "assets/projects/graphic-design/wedesi-gulabi-post.jpg",
        "video": "",
        "desc": "Pink City cultural campaign poster merging Rajasthani architectural arches with festive celebration dining promotions.",
        "client": "We Desi Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Poster Art",
                    "Heritage Campaign",
                    "Typography"
        ]
    },
    "design-19": {
        "category": "GRAPHIC DESIGN",
        "title": "We Desi // Diwali Grand Feast Social Celebration Poster",
        "img": "assets/projects/graphic-design/wedesi-diwali-post.jpg",
        "video": "",
        "desc": "Festive social media banner featuring warm terracotta lamps, golden fireworks, and family feast banquet offerings.",
        "client": "We Desi Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Social Creative",
                    "Diwali Special",
                    "Festival Ad"
        ]
    },
    "design-20": {
        "category": "GRAPHIC DESIGN",
        "title": "We Desi // Banjara Murgh Tikka Specialty Poster",
        "img": "assets/projects/graphic-design/wedesi-tikka-post.jpg",
        "video": "",
        "desc": "High-impact culinary poster featuring charcoal-grilled chicken tikka with smokey embers, mint chutney, and rustic garnishes.",
        "client": "We Desi Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Advertising",
                    "Food Poster",
                    "Commercial"
        ]
    },
    "design-21": {
        "category": "GRAPHIC DESIGN",
        "title": "We Desi // Royal Laal Maas Signature Dish Feature",
        "img": "assets/projects/graphic-design/wedesi-laal-maas.jpg",
        "video": "",
        "desc": "Hero advertising creative for Rajasthan iconic fiery red mutton curry, highlighting Mathania chilies and royal heritage.",
        "client": "We Desi Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Poster Design",
                    "Signature Dish",
                    "Advertising"
        ]
    },
    "design-22": {
        "category": "GRAPHIC DESIGN",
        "title": "We Desi // Complete Dine-In Menu Typography Layout",
        "img": "assets/projects/graphic-design/wedesi-dine-menu.jpg",
        "video": "",
        "desc": "Detailed interior menu page layout with multi-column pricing, traditional drink pairings, and house specialty badges.",
        "client": "We Desi Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Illustrator",
                    "Typography",
                    "Editorial Layout",
                    "Print Production"
        ]
    },
    "design-23": {
        "category": "GRAPHIC DESIGN",
        "title": "We Desi // Royal Jungli Maas Heritage Dish Poster",
        "img": "assets/projects/graphic-design/wedesi-jungli-maas.jpg",
        "video": "",
        "desc": "Historic hunter-style slow-cooked curry promotional poster with rustic copper pan presentation and artisanal typography.",
        "client": "We Desi Restaurant",
        "year": "2024",
        "vertical": false,
        "tags": [
                    "Photoshop",
                    "Culinary Advertising",
                    "Heritage Post",
                    "Visual Design"
        ]
    },
    "design-24": {
        "category": "GRAPHIC DESIGN",
        "title": "Gourmet Flavors // Sizzling Culinary Feature 01",
        "img": "assets/projects/graphic-design/restaurant-1.jpg",
        "video": "",
        "desc": "Vertical mobile story creative showcasing sizzling delicacies with steam effects, warm ambient lighting, and call-to-action.",
        "client": "Restaurant Social Campaign",
        "year": "2024",
        "vertical": true,
        "tags": [
                    "Photoshop",
                    "Mobile Story",
                    "Food Design",
                    "9:16 Creative"
        ]
    },
    "design-25": {
        "category": "GRAPHIC DESIGN",
        "title": "Gourmet Flavors // Chef Special Presentation 02",
        "img": "assets/projects/graphic-design/restaurant-2.jpg",
        "video": "",
        "desc": "Crisp vertical social media graphic featuring gourmet plate presentation, delicate garnishing, and restaurant branding.",
        "client": "Restaurant Social Campaign",
        "year": "2024",
        "vertical": true,
        "tags": [
                    "Photoshop",
                    "Social Creative",
                    "Vertical Ad",
                    "Food Styling"
        ]
    },
    "design-26": {
        "category": "GRAPHIC DESIGN",
        "title": "Gourmet Flavors // Artisan Plating & Dining Ambience 03",
        "img": "assets/projects/graphic-design/restaurant-3.jpg",
        "video": "",
        "desc": "Fine dining culinary artwork capturing tabletop aesthetics, warm candlelight, and fresh herbs.",
        "client": "Restaurant Social Campaign",
        "year": "2024",
        "vertical": true,
        "tags": [
                    "Photoshop",
                    "Brand Visual",
                    "Ambience",
                    "Editorial Art"
        ]
    },
    "design-27": {
        "category": "GRAPHIC DESIGN",
        "title": "Gourmet Flavors // Signature Tasting Menu Feature 04",
        "img": "assets/projects/graphic-design/restaurant.jpg",
        "video": "",
        "desc": "Richly textured culinary composition highlighting seasonal specialty ingredients and gastronomic excellence.",
        "client": "Restaurant Social Campaign",
        "year": "2024",
        "vertical": true,
        "tags": [
                    "Photoshop",
                    "Advertising Design",
                    "Culinary Art",
                    "Menu Feature"
        ]
    },
    "design-28": {
        "category": "GRAPHIC DESIGN",
        "title": "Restaurant Promo // Weekend Special Offer Social Story",
        "img": "assets/projects/graphic-design/story-4.jpg",
        "video": "",
        "desc": "High-converting 9:16 vertical Instagram story with bold typography, promo discount badge, and swipe-up reservation prompt.",
        "client": "Restaurant Social Campaign",
        "year": "2024",
        "vertical": true,
        "tags": [
                    "Photoshop",
                    "Instagram Story",
                    "Promo Poster",
                    "9:16 Vertical"
        ]
    }
};

  // --- 1. Navbar Scroll State & Mobile Menu ---
  function initNavigation() {
    const nav = document.getElementById('site-nav');
    const mobileBtn = document.getElementById('mobile-toggle-btn');
    const mobileDrawer = document.getElementById('mobile-nav-drawer');
    const mobileLinks = document.querySelectorAll('.mobile-nav-link');

    window.addEventListener('scroll', () => {
      if (window.scrollY > 30) {
        nav.classList.add('scrolled');
      } else {
        nav.classList.remove('scrolled');
      }
    });

    if (mobileBtn && mobileDrawer) {
      mobileBtn.addEventListener('click', () => {
        mobileDrawer.classList.toggle('open');
      });

      mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
          mobileDrawer.classList.remove('open');
        });
      });
    }

    // Active nav link highlight on scroll
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-menu .nav-item');

    window.addEventListener('scroll', () => {
      let currentSectionId = '';
      sections.forEach(sec => {
        const top = sec.offsetTop - 140;
        if (window.scrollY >= top) {
          currentSectionId = sec.getAttribute('id');
        }
      });

      if (currentSectionId && currentSectionId.startsWith('work-')) {
        currentSectionId = 'work';
      }

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (currentSectionId && link.getAttribute('href') === '#' + currentSectionId) {
          link.classList.add('active');
        }
      });
    });
  }


  // --- 3. Video / Work Player Lightbox Modal ---
  window.openWorkModal = function (projectId) {
    const data = WORK_ITEMS[projectId] || WORK_ITEMS['shortfilm-1'];
    const modal = document.getElementById('work-modal');
    if (!modal) return;

    const modalBox = modal.querySelector('.onefor-modal-box');
    const tagEl = document.getElementById('modal-proj-category');
    const titleEl = document.getElementById('modal-proj-title');
    const descEl = document.getElementById('modal-proj-desc');
    const imgEl = document.getElementById('modal-proj-img');
    const videoEl = document.getElementById('modal-proj-video');

    if (tagEl) tagEl.textContent = data.category || 'VIDEO';
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;

    // Detect vertical aspect ratio
    const isVertical = data.vertical || (projectId && (projectId.startsWith('reels') || projectId.startsWith('podcast') || projectId.startsWith('fastcut') || projectId === 'cinematic-1' || projectId === 'cinematic-3' || projectId === 'cinematic-4' || projectId === 'wedding-1' || projectId === 'wedding-2'));
    if (modalBox) {
      if (isVertical) {
        modalBox.classList.add('is-vertical');
        modalBox.classList.remove('is-landscape');
      } else {
        modalBox.classList.remove('is-vertical');
        modalBox.classList.add('is-landscape');
      }
    }

    if (data.video && videoEl) {
      // Set poster thumbnail immediately so video never shows an empty black box while buffering
      const posterUrl = data.img || data.thumbnail || '';
      if (posterUrl) {
        videoEl.poster = posterUrl;
      }
      videoEl.controls = true;
      videoEl.preload = 'auto';
      videoEl.classList.remove('hidden');

      // Error handler fallback
      videoEl.onerror = function () {
        console.warn('Video playback encountered an error for:', data.video, videoEl.error);
        if (imgEl && posterUrl) {
          imgEl.src = posterUrl;
          imgEl.classList.remove('hidden');
        }
        videoEl.classList.add('hidden');
      };

      videoEl.onloadedmetadata = function () {
        if (videoEl.videoWidth && videoEl.videoHeight) {
          if (videoEl.videoWidth < videoEl.videoHeight) {
            modalBox.classList.add('is-vertical');
            modalBox.classList.remove('is-landscape');
          } else {
            modalBox.classList.remove('is-vertical');
            modalBox.classList.add('is-landscape');
          }
        }
      };

      // Load and play
      videoEl.pause();
      videoEl.src = data.video;
      videoEl.load();
      videoEl.currentTime = 0;
      videoEl.muted = false;

      const playPromise = videoEl.play();
      if (playPromise !== undefined) {
        playPromise.catch(() => {
          // Fallback if browser policies restrict unmuted autoplay
          videoEl.muted = true;
          videoEl.play().catch(() => {});
        });
      }

      if (imgEl) imgEl.classList.add('hidden');
    } else {
      if (videoEl) {
        videoEl.pause();
        videoEl.removeAttribute('src');
        videoEl.classList.add('hidden');
      }
      if (imgEl) {
        imgEl.src = data.img || data.thumbnail || '';
        imgEl.classList.remove('hidden');
      }
    }

    modal.classList.remove('hidden');
  };

  window.closeWorkModal = function () {
    const modal = document.getElementById('work-modal');
    if (modal) {
      modal.classList.add('hidden');
      const videoEl = document.getElementById('modal-proj-video');
      if (videoEl) {
        videoEl.pause();
        videoEl.onerror = null;
        videoEl.onloadedmetadata = null;
        videoEl.removeAttribute('src');
        videoEl.load();
      }
      const modalBox = modal.querySelector('.onefor-modal-box');
      if (modalBox) {
        modalBox.classList.remove('is-vertical');
        modalBox.classList.remove('is-landscape');
      }
    }
  };

  // --- 4. Dedicated Graphic Design Image Lightbox Modal ---
  window.openDesignModal = function (designId) {
    const data = WORK_ITEMS[designId] || WORK_ITEMS['design-1'];
    const modal = document.getElementById('design-modal');
    if (!modal) return;

    const tagEl = document.getElementById('design-modal-category');
    const titleEl = document.getElementById('design-modal-title');
    const descEl = document.getElementById('design-modal-desc');
    const imgEl = document.getElementById('design-modal-img');
    const clientEl = document.getElementById('design-modal-client');
    const tagsContainer = document.getElementById('design-modal-tags');

    if (tagEl) tagEl.textContent = data.category || 'GRAPHIC DESIGN';
    if (titleEl) titleEl.textContent = data.title;
    if (descEl) descEl.textContent = data.desc;
    if (imgEl) imgEl.src = data.img || data.thumbnail || '';

    if (clientEl) {
      clientEl.textContent = data.client ? `Client: ${data.client}` : '';
    }

    if (tagsContainer) {
      tagsContainer.innerHTML = '';
      if (data.tags && Array.isArray(data.tags)) {
        data.tags.forEach(t => {
          const span = document.createElement('span');
          span.className = 'tag';
          span.textContent = t;
          tagsContainer.appendChild(span);
        });
      }
    }

    modal.classList.remove('hidden');
  };

  window.closeDesignModal = function () {
    const modal = document.getElementById('design-modal');
    if (modal) modal.classList.add('hidden');
  };

  // --- 5. Motion Graphics / Placeholder Helper ---
  window.openPlaceholderModal = function (slotId) {
    const data = WORK_ITEMS[slotId] || {};
    const modal = document.getElementById('placeholder-modal');
    if (!modal) return;

    const titleEl = document.getElementById('placeholder-modal-title');
    if (titleEl) {
      titleEl.textContent = data.title || 'Motion Graphics Slot';
    }

    modal.classList.remove('hidden');
  };

  window.closePlaceholderModal = function () {
    const modal = document.getElementById('placeholder-modal');
    if (modal) modal.classList.add('hidden');
  };

  // Close modals on outside backdrop click or ESC
  window.addEventListener('click', e => {
    const workModal = document.getElementById('work-modal');
    const designModal = document.getElementById('design-modal');
    const placeholderModal = document.getElementById('placeholder-modal');

    if (e.target === workModal) closeWorkModal();
    if (e.target === designModal) closeDesignModal();
    if (e.target === placeholderModal) closePlaceholderModal();
  });

  window.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
      closeWorkModal();
      closeDesignModal();
      closePlaceholderModal();
    }
  });

  // --- 6. Dynamic Data Sync with projects.json ---
  function loadProjectsData() {
    fetch('projects.json')
      .then(res => res.json())
      .then(data => {
        if (!data) return;
        const sectionsList = data.sections || data.categories || [];
        sectionsList.forEach(sec => {
          if (sec.projects && Array.isArray(sec.projects)) {
            sec.projects.forEach(proj => {
              WORK_ITEMS[proj.id] = {
                category: proj.category || sec.title,
                title: proj.title,
                img: proj.img || proj.thumbnail || proj.image,
                thumbnail: proj.thumbnail || proj.img || proj.image,
                video: proj.video || '',
                desc: proj.desc || '',
                client: proj.client || '',
                year: proj.year || '2024',
                vertical: sec.id === 'reels-shorts' || proj.vertical === true,
                tags: proj.tags || []
              };
            });
          }
        });
      })
      .catch(() => {
        // Fallback gracefully to built-in WORK_ITEMS
      });
  }

  // --- 7. GSAP Entry Animations ---
  function initGSAP() {
    if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('[data-reveal="fade-up"]').forEach(el => {
      const delay = parseFloat(el.getAttribute('data-delay')) || 0;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none'
        },
        duration: 0.8,
        y: 35,
        opacity: 0,
        delay: delay,
        ease: 'power3.out'
      });
    });

    gsap.utils.toArray('[data-reveal="zoom-in"]').forEach(el => {
      const delay = parseFloat(el.getAttribute('data-delay')) || 0;
      gsap.from(el, {
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          toggleActions: 'play none none none'
        },
        duration: 1,
        scale: 0.92,
        opacity: 0,
        delay: delay,
        ease: 'power3.out'
      });
    });
  }

  // DOM Ready
  document.addEventListener('DOMContentLoaded', () => {
    initNavigation();
    loadProjectsData();
    initGSAP();
  });
})();
