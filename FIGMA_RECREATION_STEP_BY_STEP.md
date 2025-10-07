# Step-by-Step Figma Recreation Guide for Explori App

## Phase 1: Setup (15 minutes)

### Step 1: Create New Figma File
1. **Open Figma Desktop/Web**
2. **Create new file**: "Explori Mobile App - Bravo"
3. **Install Bravo Plugin**: Search "Bravo Studio" in Figma Community

### Step 2: Setup iPhone Frame
1. **Create Frame**: Press `F` and select **iPhone 14 Pro**
2. **Rename frame**: "Home"
3. **Set dimensions**: 393 × 852px
4. **Background color**: #fdfcfb (light cream)

### Step 3: Setup Design System
**Create color styles:**
- Primary: #ff6b35 (Orange)
- Background: #fdfcfb (Light Cream)
- Text Dark: #1f2937
- Text Light: #64748b
- White: #ffffff
- Border: #e5e7eb

## Phase 2: Home Screen Recreation (45 minutes)

### Step 4: Header Section
```
├── Header Container [Rectangle - width: 393px, height: 80px]
│   ├── Background: #fdfcfb
│   ├── "Good morning, Sarah!" [Text - #1f2937, size: 20px, weight: medium]
│   ├── Location text "📍 San Francisco, CA" [Text - #64748b, size: 14px]
│   └── Profile Avatar [Circle - 40×40px, fill: #ff6b35]
│       └── Add Bravo Tag: [button][link:Profile]
```

### Step 5: Search Section
```
├── Search Container [Rectangle - width: 361px, height: 48px]
│   ├── Background: white
│   ├── Border: 1px #e5e7eb
│   ├── Border radius: 8px
│   ├── Search icon [lucide search icon - #64748b]
│   ├── Placeholder text "Search places, events & adventures..."
│   └── Add Bravo Tag: [input]
```

### Step 6: Featured Places Section
```
├── Section Header
│   ├── "🍽️ Best Places to Eat, Stay & Explore" [Text - #1f2937, size: 18px]
│   └── "View All" button [Text - #ff6b35, size: 14px]
│       └── Add Bravo Tag: [button]
│
├── Place Card 1 [Container - 361×280px]
│   ├── Background: white, border radius: 12px
│   ├── Place Image [Rectangle - 361×160px]
│   │   └── Add Bravo Tag: [bind:image]
│   ├── Content Area [Padding: 16px]
│   │   ├── "Coastal Café" [Text - #1f2937, size: 16px, weight: medium]
│   │   │   └── Add Bravo Tag: [bind:title]
│   │   ├── "Restaurant • 4.8 ⭐" [Text - #64748b, size: 14px]
│   │   │   └── Add Bravo Tag: [bind:subtitle]
│   │   ├── Price Row
│   │   │   ├── "$25-40" [Text - #1f2937, size: 14px, weight: medium]
│   │   │   │   └── Add Bravo Tag: [bind:price]
│   │   │   └── "📍 0.3 km" [Text - #64748b, size: 14px]
│   │   └── Button Row
│   │       ├── "View Details" [Button - outline, #ff6b35 border]
│   │       │   └── Add Bravo Tag: [button][link:PlaceDetail]
│   │       └── "Book Now" [Button - filled, #ff6b35 background]
│   │           └── Add Bravo Tag: [button][link:Booking]
│
├── Place Card 2 [Same structure as Card 1]
│   ├── "Mountain View Hotel"
│   ├── "Hotel • 4.6 ⭐"
│   └── "$150/night"
```

### Step 7: Events Section
```
├── "🎉 Upcoming Events & Experiences"
├── Event Card 1 [Container - 361×120px]
│   ├── Event Image [100×100px, border radius: 8px]
│   │   └── Add Bravo Tag: [bind:event_image]
│   ├── Event Info
│   │   ├── "City Marathon 2025" [Text - #1f2937, size: 16px]
│   │   │   └── Add Bravo Tag: [bind:event_title]
│   │   ├── "March 15, 2025" [Text - #64748b, size: 14px]
│   │   │   └── Add Bravo Tag: [bind:event_date]
│   │   └── "Join" button [Button - #ff6b35]
│   │       └── Add Bravo Tag: [button][link:EventDetail]
│
├── Event Card 2 [Same structure]
│   ├── "Spring Food Festival"
│   └── "April 10-12, 2025"
```

### Step 8: Bottom Navigation
```
├── Bottom Nav Container [Rectangle - 393×80px]
│   ├── Background: white
│   ├── Top border: 1px #e5e7eb
│   ├── Nav Item 1 - Home [Active state]
│   │   ├── Home icon [#ff6b35]
│   │   ├── "Home" [Text - #ff6b35, size: 12px]
│   │   └── Add Bravo Tag: [button][link:Home]
│   ├── Nav Item 2 - Map
│   │   ├── Map icon [#64748b]
│   │   ├── "Map" [Text - #64748b, size: 12px]
│   │   └── Add Bravo Tag: [button][link:Map]
│   ├── Nav Item 3 - Add Post
│   │   ├── Plus icon [#64748b]
│   │   ├── "Add Post" [Text - #64748b, size: 12px]
│   │   └── Add Bravo Tag: [button][link:AddPost]
│   ├── Nav Item 4 - Planner
│   │   ├── Target icon [#64748b]
│   │   ├── "Planner" [Text - #64748b, size: 12px]
│   │   └── Add Bravo Tag: [button][link:Planner]
│   └── Nav Item 5 - Profile
│       ├── User icon [#64748b]
│       ├── "Profile" [Text - #64748b, size: 12px]
│       └── Add Bravo Tag: [button][link:Profile]
```

## Phase 3: Place Detail Screen (30 minutes)

### Step 9: Create PlaceDetail Frame
1. **Duplicate Home frame**
2. **Rename**: "PlaceDetail"
3. **Clear content**, keep background

### Step 10: PlaceDetail Layout
```
├── Header Bar [Container - 393×60px]
│   ├── Back arrow [Icon - #1f2937]
│   │   └── Add Bravo Tag: [button][link:Home]
│   ├── "Place Details" [Text - center]
│   └── Save icon [Icon - #64748b]
│       └── Add Bravo Tag: [button]
│
├── Hero Image [Rectangle - 393×250px]
│   └── Add Bravo Tag: [bind:hero_image]
│
├── Content Section [Container - padding: 20px]
│   ├── Place Name [Text - #1f2937, size: 24px, weight: medium]
│   │   └── Add Bravo Tag: [bind:place_name]
│   ├── Rating & Category [Text - #64748b, size: 16px]
│   │   └── Add Bravo Tag: [bind:rating_category]
│   ├── Location [Text - #64748b, size: 14px]
│   │   └── Add Bravo Tag: [bind:location]
│   ├── Description [Text - #1f2937, size: 16px, line height: 1.5]
│   │   └── Add Bravo Tag: [bind:description]
│   ├── Price Information [Text - #1f2937, size: 18px, weight: medium]
│   │   └── Add Bravo Tag: [bind:price_range]
│   └── Book Now Button [Button - full width, #ff6b35, height: 48px]
│       └── Add Bravo Tag: [button][link:Booking]
│
├── Bottom Navigation [Same as Home screen]
```

## Phase 4: Adding Bravo Tags (20 minutes)

### Step 11: Install and Use Bravo Plugin
1. **Select each element** in Figma
2. **Open Bravo plugin** (right panel)
3. **Choose appropriate tag** from dropdown
4. **Apply tag** - it will be added to layer name

### Step 12: Tag Validation
1. **Run "Tag Checker"** in Bravo plugin
2. **Fix any issues** highlighted
3. **Ensure navigation flow** works properly

### Tag Reference:
```
Containers: [container]
Navigation: [button][link:PageName]
Text Content: [text] or [bind:fieldName]
Interactive Elements: [button]
Form Inputs: [input]
Dynamic Images: [bind:image]
```

## Phase 5: Testing in Bravo (15 minutes)

### Step 13: Import to Bravo Studio
1. **Save Figma file**
2. **Go to Bravo Studio dashboard**
3. **Create new app** → **Import from Figma**
4. **Select your file**
5. **Choose "Home" as start screen**

### Step 14: Preview Testing
1. **Open Bravo mobile app**
2. **Scan QR code** from Bravo Studio
3. **Test navigation**: Home → PlaceDetail → Back
4. **Test bottom nav**: Home ↔ Other screens

## Quick Start Checklist

**Essential Elements for MVP:**
- ✅ Home screen with places
- ✅ PlaceDetail screen  
- ✅ Bottom navigation (all 5 tabs)
- ✅ Basic navigation flow
- ✅ Bravo tags on all interactive elements

**Optional for Later:**
- Map screen
- Booking flow
- Profile screen
- Add Post screen

## Time Estimate
- **Setup**: 15 minutes
- **Home Screen**: 45 minutes  
- **PlaceDetail**: 30 minutes
- **Bravo Tags**: 20 minutes
- **Testing**: 15 minutes
- **Total**: ~2 hours

## Success Criteria
When you can:
1. Navigate Home → PlaceDetail → Back
2. Bottom nav switches between screens
3. Preview works on mobile device
4. No validation errors in Bravo plugin

Once this works, you can expand to other screens following the same pattern!

## Resources
- **Icons**: Use Lucide icons (same as your React app)
- **Images**: Use placeholder rectangles, will be replaced with bind tags
- **Colors**: Copy exact hex codes from your React app
- **Layout**: Measure spacing in your React app and match in Figma