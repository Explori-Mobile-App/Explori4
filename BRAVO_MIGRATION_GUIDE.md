# Bravo Studio Migration Guide

## Converting Figma Make React App to Bravo Studio

### Challenge
Bravo Studio requires Figma design files with Bravo tags, not React code. Our app is currently built as React components in Figma Make.

### Solution Options

#### Option 1: Export from Figma Make to Figma Design
1. **Export Process**:
   - In Figma Make, look for "Export to Figma" or "Save as Design File"
   - Save as .fig file
   - Open in Figma Desktop/Web app
   - Begin Bravorizing process

#### Option 2: Recreate in Figma with Bravo Tags

**Key Screens to Recreate:**
1. **Home Screen** (`components/pages/HomePage.tsx`)
2. **Map Screen** (`components/pages/MapPage.tsx`) 
3. **Add Post Screen** (`components/pages/AddPostPage.tsx`)
4. **Planner Screen** (`components/pages/PlannerPage.tsx`)
5. **Saved Screen** (`components/pages/SavedPage.tsx`)
6. **Profile Screen** (`components/pages/ProfilePage.tsx`)

**Bravo Tag Mapping:**

```
Current React Structure -> Bravo Tags

Navigation Elements:
- Bottom Navigation -> [container] + [link:PageName]
- Page routing -> [link:Home], [link:Map], etc.

Interactive Elements:
- Search input -> [input]
- Action buttons -> [button]
- Navigation buttons -> [button] + [link:PageName]
- Form inputs -> [input]

Content Containers:
- Page containers -> [container]
- Card components -> [container]
- Section containers -> [container]

Text Elements:
- Headers -> [text]
- Descriptions -> [text]
- Labels -> [text]

Data Binding:
- Dynamic content -> [bind:fieldName]
- User data -> [bind:user.name], [bind:user.avatar]
- Place data -> [bind:place.name], [bind:place.image]
```

#### Option 3: Hybrid Approach

**Keep React for Complex Features:**
- Keep current React app for web preview
- Create simplified Figma version for Bravo Studio mobile app
- Maintain both versions

**Screen-by-Screen Recreation:**

1. **Home Screen Bravo Setup:**
```
Frame: "Home" [container]
├── Header [container]
│   ├── Logo [text]
│   └── Profile Button [button][link:Profile]
├── Search Bar [input]
├── Featured Places [container]
│   └── Place Card [container][bind:place.name]
└── Bottom Nav [container]
    ├── Home [button][link:Home]
    ├── Map [button][link:Map]
    ├── Add [button][link:AddPost]
    ├── Planner [button][link:Planner]
    └── Profile [button][link:Profile]
```

2. **Place Detail Screen:**
```
Frame: "PlaceDetail" [container]
├── Back Button [button][link:Home]
├── Place Image [image][bind:place.image]
├── Place Name [text][bind:place.name]
├── Description [text][bind:place.description]
├── Book Button [button][link:Booking]
└── Save Button [button]
```

### Design System Mapping

**Colors (Current -> Bravo Compatible):**
- Primary: #ff6b35 (Orange)
- Background: #fdfcfb (Light Cream)
- Text: #1f2937 (Dark Gray)
- Secondary: #64748b (Slate)

**Typography:**
- Headers: Medium weight, larger sizes
- Body: Normal weight, base size
- Buttons: Medium weight

### Data Structure for Bravo

**Required API Endpoints:**
```json
{
  "places": [
    {
      "id": "string",
      "name": "string",
      "image": "url",
      "description": "string",
      "location": {
        "lat": "number",
        "lng": "number"
      }
    }
  ],
  "events": [
    {
      "id": "string", 
      "title": "string",
      "date": "string",
      "image": "url"
    }
  ],
  "user": {
    "name": "string",
    "avatar": "url",
    "saved_places": ["place_id"]
  }
}
```

### Step-by-Step Bravorizing Process

1. **Install Bravo Figma Plugin**
2. **Create New Figma File** with iPhone 14 Pro frame (393×852px)
3. **Recreate Each Screen** using components from current React app as reference
4. **Add Bravo Tags** using the plugin:
   - Select layer
   - Choose appropriate tag from plugin
   - Validate with Tag Checker
5. **Test Navigation Flow**
6. **Import to Bravo Studio**
7. **Connect to Backend APIs**

### Alternative: Keep Current React Deployment

If Bravo Studio conversion is complex, consider:
- **Deploy React app** to Vercel/Netlify for web version
- **Create PWA** for mobile-like experience
- **Use Capacitor** to wrap as native mobile app

### Recommended Approach

1. **Start with Option 1**: Try exporting from Figma Make first
2. **If that fails**: Use Option 2 to recreate key screens
3. **Focus on core user journeys**: Home → Search → Place Detail → Booking
4. **Iterate and test** in Bravo Studio preview

This approach preserves your current functionality while adapting to Bravo Studio's requirements.