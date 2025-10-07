# Converting Explori React App to Figma Design for Bravo Studio

## Current Situation
- ✅ **Have**: Complete React app with all functionality
- ❌ **Need**: Figma design file with Bravo tags for Bravo Studio
- 🎯 **Goal**: Convert React app to Figma design that Bravo can use

## Conversion Strategy

### Step 1: Create New Figma File

1. **Open Figma Desktop/Web**
2. **Create new file**: "Explori Mobile App - Bravo"
3. **Set up iPhone 14 Pro frame**: 393 × 852px
4. **Install Bravo Plugin** from Figma Community

### Step 2: Screen-by-Screen Recreation

**Priority Order (Start with these 3):**

#### 1. **Home Screen** (Most Important)
```
Frame: "Home" [393×852px]
├── Header Section
│   ├── Logo/Title [Bravo Tag: text]
│   └── Profile Avatar [Bravo Tag: button][link:Profile]
├── Search Bar [Bravo Tag: input]
├── Featured Places Section
│   ├── "Best Places to Eat..." [Bravo Tag: text]
│   └── Place Cards [Bravo Tag: container]
│       ├── Place Image [Bravo Tag: bind:image]
│       ├── Place Name [Bravo Tag: bind:title]
│       ├── Rating [Bravo Tag: bind:rating]
│       └── Book Button [Bravo Tag: button][link:Booking]
├── Events Section [Bravo Tag: container]
└── Bottom Navigation [Bravo Tag: container]
    ├── Home [Bravo Tag: button][link:Home]
    ├── Map [Bravo Tag: button][link:Map]
    ├── Add [Bravo Tag: button][link:AddPost]
    ├── Planner [Bravo Tag: button][link:Planner]
    └── Profile [Bravo Tag: button][link:Profile]
```

#### 2. **Place Detail Screen**
```
Frame: "PlaceDetail" [393×852px]
├── Back Button [Bravo Tag: button][link:Home]
├── Place Hero Image [Bravo Tag: bind:image]
├── Place Info [Bravo Tag: container]
│   ├── Name [Bravo Tag: bind:title]
│   ├── Rating [Bravo Tag: bind:rating]
│   ├── Price [Bravo Tag: bind:price]
│   └── Description [Bravo Tag: bind:description]
├── Book Now Button [Bravo Tag: button][link:Booking]
└── Bottom Navigation
```

#### 3. **Map Screen**
```
Frame: "Map" [393×852px]  
├── Map Background [Bravo Tag: container]
├── Search Overlay [Bravo Tag: input]
├── Location Markers [Bravo Tag: button][link:PlaceDetail]
└── Bottom Navigation
```

### Step 3: Design System Setup

**Colors (Match your current app):**
- Primary: #ff6b35 (Orange)
- Background: #fdfcfb (Light Cream)  
- Text: #1f2937 (Dark Gray)
- Secondary: #64748b (Slate)

**Typography:**
- Headers: Medium weight, 18-24px
- Body: Normal weight, 16px
- Buttons: Medium weight, 16px

**Components to Create:**
- Button Component (Orange primary, white secondary)
- Card Component (White background, border radius)
- Input Component (White background, border)

### Step 4: Add Bravo Tags with Plugin

**Tag Pattern for Each Element:**

1. **Select layer in Figma**
2. **Open Bravo Plugin**
3. **Choose appropriate tag:**

**Navigation Elements:**
- Bottom nav buttons → `[button][link:PageName]`
- Back buttons → `[button][link:Home]`

**Content Elements:**  
- Text content → `[text]` or `[bind:fieldName]`
- Images → `[bind:image]`
- Containers → `[container]`

**Interactive Elements:**
- Search input → `[input]`
- Action buttons → `[button]`
- Form inputs → `[input]`

### Step 5: Data Binding Setup

**For Dynamic Content, use bind tags:**

```
Place Cards:
- Place name → [bind:name]
- Place image → [bind:image] 
- Place rating → [bind:rating]
- Place price → [bind:price]

Events:
- Event title → [bind:title]
- Event date → [bind:date]
- Event image → [bind:image]

User:
- Profile name → [bind:user.name]
- Profile avatar → [bind:user.avatar]
```

### Step 6: Minimum Viable Screens

**Start with just these 3 screens:**
1. **Home** - Main feed with places and events
2. **PlaceDetail** - Individual place page  
3. **Map** - Location view

**Add later if needed:**
4. Profile
5. Add Post  
6. Planner
7. Saved

### Step 7: Test in Bravo Studio

1. **Save Figma file**
2. **Use Bravo plugin** "Tag Checker" to validate
3. **Import to Bravo Studio**
4. **Preview on device** using Bravo app
5. **Test navigation** between screens

## Quick Start Template

**Time Estimate: 2-3 hours for core screens**

### **Home Screen Template:**
1. Create iPhone frame (393×852)
2. Add background (#fdfcfb)
3. Copy visual design from your React app
4. Add Bravo tags to each element
5. Focus on navigation flow first

### **Essential Elements:**
- Header with profile button
- Search bar (tagged as input)
- 2-3 place cards with booking buttons
- Bottom navigation (5 tabs)

### **Success Criteria:**
- Navigation between Home ↔ PlaceDetail works
- Bottom tabs navigate to different screens
- Place data shows dynamically
- App previews correctly on phone

## Alternative: Hybrid Approach

**If Figma recreation is too much work:**

1. **Keep React app** for web preview
2. **Create simplified Figma version** for mobile app
3. **Deploy React version** to Vercel for web users
4. **Use Bravo version** for App Store/Google Play

This gives you both web and mobile versions with minimal duplicate work.

## Resources

- **Bravo Studio Documentation**: [bravostudio.app/docs](https://bravostudio.app/docs)
- **Bravo Tags Guide**: How to tag each element type
- **Sample Bravo Files**: Download examples to see tag patterns

The key is starting simple - get Home → PlaceDetail → Navigation working first, then expand from there.