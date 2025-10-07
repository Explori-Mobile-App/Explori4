# Figma Quick Start Template - Explori App

## **Step 1: Create iPhone Frame (5 minutes)**

1. **Press `F`** → Select **iPhone 14 Pro** (393×852px)
2. **Name frame**: "Home"  
3. **Background**: #fdfcfb
4. **Install Bravo Plugin** from Figma Community

## **Step 2: Header Section (10 minutes)**

### **Create Header Container**
```
📐 Rectangle
├── Size: 393×100px
├── Position: Top of frame
├── Fill: #fdfcfb (same as background)
├── Name: "Header Container"
└── Bravo Tag: [container]
```

### **Add Header Text (3 text elements)**
```
Text 1: "Welcome to explori"
├── Position: 24px from left, 48px from top
├── Font: 24px, Medium (600)
├── Color: #1f2937
├── Bravo Tag: [text]

Text 2: "Discover local experiences, events & adventure"  
├── Position: 24px from left, below Text 1
├── Font: 16px, Regular (400)
├── Color: #64748b
├── Bravo Tag: [text]

Text 3: "Built for connection and discovery"
├── Position: 24px from left, below Text 2
├── Font: 12px, Regular (400)  
├── Color: #64748b
├── Bravo Tag: [text]
```

## **Step 3: Place Card Section (20 minutes)**

### **Section Header**
```
Text: "🍽️ Best Places to Eat, Stay & Explore"
├── Position: 24px from left, below header
├── Font: 18px, Medium (600)
├── Color: #1f2937
├── Bravo Tag: [text]

"View All" Button
├── Position: Right aligned, same row as title
├── Text: "View All"
├── Color: #ff6b35
├── Font: 14px
├── Bravo Tag: [button]
```

### **Place Card 1**
```
📐 Card Container
├── Size: 361×280px (leaves 16px margin each side)
├── Position: 24px from left edge
├── Fill: #ffffff
├── Border: 1px solid #e5e7eb
├── Corner radius: 12px
├── Name: "Place Card 1"
├── Bravo Tag: [container]

📐 Image Area
├── Size: 361×160px  
├── Position: Top of card
├── Fill: Light gray placeholder OR use actual image
├── Corner radius: 12px (top corners only)
├── Name: "Place Image"
├── Bravo Tag: [bind:image]

📐 Content Area (inside card, below image)
├── Size: 361×120px
├── Padding: 16px all sides
├── Name: "Card Content"

Text Elements (inside content area):
├── "Coastal Café"
│   ├── Font: 16px, Medium (600)
│   ├── Color: #1f2937
│   └── Bravo Tag: [bind:title]
├── "Restaurant • 4.8 ⭐"
│   ├── Font: 14px, Regular (400)
│   ├── Color: #64748b
│   └── Bravo Tag: [bind:subtitle]
├── "$25-40"
│   ├── Font: 14px, Medium (600)
│   ├── Color: #1f2937
│   └── Bravo Tag: [bind:price]
├── "📍 0.3 km"
│   ├── Font: 14px, Regular (400)
│   ├── Color: #64748b
│   └── Bravo Tag: [text]

Button Row (side by side):
├── "View Details" Button
│   ├── Size: 170×36px
│   ├── Background: transparent
│   ├── Border: 1px solid #ff6b35
│   ├── Text: #ff6b35, 14px, Medium
│   ├── Corner radius: 8px
│   └── Bravo Tag: [button][link:PlaceDetail]
└── "Book Now" Button  
    ├── Size: 170×36px
    ├── Background: #ff6b35
    ├── Text: white, 14px, Medium
    ├── Corner radius: 8px
    └── Bravo Tag: [button][link:Booking]
```

### **Place Card 2 (Copy Card 1)**
```
📐 Duplicate Place Card 1
├── Position: Below Card 1 with 16px gap
├── Change text content:
│   ├── Title: "Mountain View Hotel"
│   ├── Subtitle: "Hotel • 4.6 ⭐"
│   └── Price: "$150/night"
└── Keep all styling and tags the same
```

## **Step 4: Bottom Navigation (15 minutes)**

### **Navigation Container**
```
📐 Bottom Nav Container
├── Size: 393×80px
├── Position: Fixed to bottom of frame
├── Fill: #ffffff
├── Border top: 1px solid #e5e7eb
├── Name: "Bottom Navigation"
├── Bravo Tag: [container]
```

### **Navigation Items (5 buttons, side by side)**
```
Each Nav Item Container: 78×80px (393÷5 = 78.6)

Nav Item 1 - Home (Active):
├── Home Icon (24×24px, centered)
│   └── Color: #ff6b35
├── "Home" text (below icon)
│   ├── Font: 12px, Regular
│   ├── Color: #ff6b35
│   └── Bravo Tag: [text]
└── Bravo Tag: [button][link:Home]

Nav Item 2 - Map (Inactive):
├── Map Icon (24×24px, centered)
│   └── Color: #64748b  
├── "Map" text
│   ├── Color: #64748b
│   └── Bravo Tag: [text]
└── Bravo Tag: [button][link:Map]

Nav Item 3 - Add Post:
├── Plus Icon (24×24px)
├── "Add Post" text
└── Bravo Tag: [button][link:AddPost]

Nav Item 4 - Planner:
├── Target Icon (24×24px)
├── "Planner" text  
└── Bravo Tag: [button][link:Planner]

Nav Item 5 - Profile:
├── User Icon (24×24px)
├── "Profile" text
└── Bravo Tag: [button][link:Profile]
```

## **Step 5: Apply Bravo Tags (10 minutes)**

### **Using Bravo Plugin:**
1. **Select Header Container** → Apply `[container]`
2. **Select each text element** → Apply `[text]` or `[bind:fieldName]`
3. **Select each button** → Apply `[button]` or `[button][link:PageName]`
4. **Select place cards** → Apply `[container]`
5. **Select place images** → Apply `[bind:image]`
6. **Select bottom nav** → Apply `[container]`
7. **Select nav buttons** → Apply `[button][link:PageName]`

### **Tag Validation:**
1. **Run "Tag Checker"** in Bravo plugin
2. **Fix any errors** highlighted in red
3. **Ensure all navigation links** point to valid page names

## **Step 6: Create PlaceDetail Page (15 minutes)**

### **Duplicate Home Frame**
1. **Right-click "Home" frame** → Duplicate
2. **Rename** to "PlaceDetail"
3. **Clear content** (keep background)

### **PlaceDetail Layout**
```
📐 Header Bar (393×60px)
├── Back Arrow Icon (left)
│   └── Bravo Tag: [button][link:Home]
├── "Place Details" title (center)
└── Save Icon (right)
    └── Bravo Tag: [button]

📐 Hero Image (393×250px)
├── Fill: placeholder or actual image
└── Bravo Tag: [bind:hero_image]

📐 Content Section
├── Place Name
│   ├── Font: 24px, Medium
│   ├── Color: #1f2937
│   └── Bravo Tag: [bind:place_name]
├── Rating & Category
│   └── Bravo Tag: [bind:rating_category]
├── Description paragraph
│   └── Bravo Tag: [bind:description]
└── "Book Now" button (full width)
    ├── Background: #ff6b35
    ├── Size: 361×48px
    └── Bravo Tag: [button][link:Booking]

📐 Bottom Navigation (same as Home)
```

## **Step 7: Test in Bravo Studio (10 minutes)**

### **Import Process:**
1. **Save Figma file**
2. **Go to** [bravostudio.app](https://bravostudio.app)
3. **Create new app** → "Import from Figma"
4. **Select your file**
5. **Choose "Home" as start screen**

### **Test Navigation:**
1. **Download Bravo mobile app**
2. **Scan QR code** from Bravo dashboard
3. **Test flow**: Home → PlaceDetail → Back
4. **Test bottom nav**: Switch between tabs

## **Quick Reference - Exact Measurements**

```
Frame: 393×852px
Header: 393×100px  
Place Card: 361×280px
Place Image: 361×160px
Button: 170×36px (side by side)
Bottom Nav: 393×80px
Nav Item: 78×80px
```

## **Success Checklist**

✅ **Visual Design**
- [ ] Frame size: 393×852px
- [ ] Background: #fdfcfb
- [ ] Header with 3 text lines
- [ ] 2 place cards with images, text, buttons
- [ ] Bottom nav with 5 tabs
- [ ] All colors match React app

✅ **Bravo Tags**
- [ ] All containers tagged [container]
- [ ] Navigation tagged [button][link:PageName]
- [ ] Dynamic content tagged [bind:fieldName]
- [ ] No validation errors in plugin

✅ **Functionality**
- [ ] Home → PlaceDetail navigation works
- [ ] Bottom nav switches between screens
- [ ] Mobile preview works
- [ ] App feels responsive

**Time Estimate: 90 minutes total**

Once this basic flow works, you can expand to other screens (Map, Profile, etc.) using the same pattern! 🚀