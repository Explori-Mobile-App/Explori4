# 🎨 Explori App - Figma Design Recreation Guide

## **📱 iPhone 14 Pro Frame Setup**

### **Canvas Dimensions**
- **Frame Size**: 393 × 852 px (iPhone 14 Pro)
- **Background**: Linear gradient from `#f8fafc` to `#e0e7ff`
- **Container**: Centered mobile frame with glassmorphism effect

### **Mobile Frame Container**
```
Width: 393px
Height: 852px
Fill: Linear gradient 135° 
  - Stop 1: rgba(255,255,255,0.95)
  - Stop 2: rgba(248,250,252,0.95)
Effects:
  - Drop Shadow: 0px 25px 50px rgba(0,0,0,0.25)
  - Background Blur: 12px
Border: 1px solid rgba(255,255,255,0.2)
Corner Radius: 24px
```

## **🎨 Design System Colors**

### **Primary Gradient**
```
Indigo to Purple: 135°
- #6366f1 (Indigo-500)
- #8b5cf6 (Purple-500)
```

### **Secondary Gradient**
```
Cyan to Blue: 135°
- #06b6d4 (Cyan-500)  
- #3b82f6 (Blue-500)
```

### **Color Palette**
```
- Background: #f8fafc (Slate-50)
- Surface: rgba(255,255,255,0.8) with 12px backdrop blur
- Text Primary: #0f172a (Slate-900)
- Text Secondary: #64748b (Slate-500)
- Border: rgba(255,255,255,0.2)
```

## **📐 Component Specifications**

### **Header Section** (`HeaderSection.tsx`)
```
Height: 120px
Padding: 24px horizontal, 16px vertical
Background: rgba(255,255,255,0.8) with backdrop blur

Elements:
- Greeting Text: "Good morning, Alex" - 18px, Slate-900, Medium
- Location: "📍 New York, NY" - 14px, Slate-600
- Notification Icon: 24x24px, top-right corner
```

### **Search Section** (`SearchSection.tsx`)
```
Padding: 24px horizontal
Search Bar:
  - Height: 48px
  - Background: rgba(255,255,255,0.5)
  - Border: 1px solid rgba(255,255,255,0.3)
  - Corner Radius: 16px
  - Placeholder: "Search places, events, experiences..."
  - Search Icon: 16x16px, left padding 12px
```

### **Fitness Events Section** (`FitnessEventsSection.tsx`)
```
Padding: 24px horizontal, 32px vertical
Section Header:
  - Title: "Fitness Events" - 20px, Bold, Slate-900
  - Subtitle: "Join unique fitness challenges at your destination" - 14px, Slate-600
  - "See All" Button: Ghost style, Indigo-600

Event Cards (2 visible):
  - Height: Auto (min 120px)
  - Background: White with 1px Slate-100 border
  - Corner Radius: 16px
  - Padding: 20px
  - Shadow: Soft drop shadow
  - Hover: Lifted shadow effect

Event Card Structure:
  - Emoji Icon: 32px (🧘‍♀️, 🏃‍♂️, 💪)
  - Title: 16px, Semibold, Slate-900
  - Category: 14px, Slate-600
  - Price Badge: Gradient background (Indigo-100 to Purple-100)
  - Rating: Star icon + number
  - Location & Time: MapPin + Clock icons, 14px
  - Participants: Users icon + count
  - Difficulty Badge: Colored based on level
  - Join Button: Gradient primary with Trophy icon

Challenge Banner:
  - Background: Gradient Emerald-500 to Teal-600
  - Corner Radius: 16px
  - Padding: 24px
  - White text overlay
  - Decorative circle: 96x96px, white 10% opacity, positioned top-right
```

### **Bottom Navigation** (`BottomNavigation.tsx`)
```
Height: 80px
Background: rgba(255,255,255,0.95) with backdrop blur
Border Top: 1px solid rgba(255,255,255,0.2)
Position: Fixed bottom

6 Navigation Items:
  - Home: House icon
  - Map: Map icon  
  - Fitness: Activity icon
  - Add Post: Plus icon
  - Saved: Bookmark icon
  - Profile: User icon

Each Item:
  - Icon: 24x24px
  - Label: 10px, 500 weight
  - Active State: Indigo-600 color
  - Inactive State: Slate-500 color
  - Tap Target: 48x48px minimum
```

## **🏃‍♂️ Fitness Events Page** (`FitnessEventsPage.tsx`)

### **Header with Search & Filters**
```
Background: rgba(255,255,255,0.8) with backdrop blur
Border Bottom: 1px solid rgba(255,255,255,0.5)
Padding: 24px

Page Title: 
  - "Fitness Events" - 24px, Bold, Slate-900
  - Subtitle: "Join local fitness activities & meet new people" - 16px, Slate-600
  - Create Event Button: Outline style with Plus icon

Search Bar:
  - Same styling as home page search
  - Placeholder: "Search events, locations, organizers..."

Filter Chips - Activity Types:
  - Horizontal scroll row
  - Each chip: 
    - Padding: 12px horizontal, 8px vertical
    - Corner Radius: 24px (full pill)
    - Active: Indigo-100 background, Indigo-700 text, 2px Indigo-300 border
    - Inactive: White 50% background, Slate-600 text, 1px Slate-200 border
  - Options: All Events 🏃‍♂️, Running 🏃‍♂️, Yoga 🧘‍♀️, Cycling 🚴‍♂️, Fitness 💪, Wellness 🌿

Filter Chips - Date Range:
  - Same styling as activity filters
  - Purple theme instead of Indigo
  - Options: All Dates, Today, Tomorrow, This Weekend
```

### **Popular Events Section**
```
Card Container:
  - Background: rgba(255,255,255,0.8) with backdrop blur
  - Border: None
  - Corner Radius: 16px
  - Drop Shadow: Large soft shadow

Section Title:
  - Star icon + "Popular This Week" - 18px, Bold
  - 16px padding all around

Event Items:
  - Horizontal layout with image + content
  - Image: 96x96px, left side, rounded corners
  - Booking indicator: Green checkmark circle if booked
  - Content area with event details
  - Rating and price on right side
  - Join/Booked button at bottom right
```

### **All Events List**
```
Similar card styling to Popular Events
Smaller images: 80x80px
Condensed layout for more events per screen
Click to navigate to EventDetail page
```

## **🎯 Interactive States**

### **Hover Effects**
```
Buttons: 
  - Transform: scale(1.02)
  - Transition: 300ms ease
  - Shadow: Increased elevation

Cards:
  - Background: Increased opacity
  - Transform: translateY(-2px)
  - Shadow: Elevated
```

### **Loading States**
```
Skeleton placeholders with shimmer effect
Matching component dimensions
Slate-200 background with animated gradient
```

## **🖼️ Imagery Guidelines**

### **Event Images**
- **Yoga Events**: Outdoor yoga, sunrise/sunset scenes
- **Running Events**: Group running, city backgrounds  
- **Bootcamp**: Outdoor fitness, park settings
- **General**: High-quality, well-lit, people-focused

### **Using Unsplash in Figma**
1. Install Unsplash plugin in Figma
2. Search terms:
   - "outdoor yoga sunrise park"
   - "group running city park" 
   - "outdoor bootcamp fitness"
   - "cycling tour city"
   - "meditation wellness outdoor"

## **📱 Responsive Behavior**

### **iPhone 14 Pro Specific**
- Safe area handling for status bar and home indicator
- Touch targets minimum 44x44px
- Thumb-friendly navigation at bottom
- Content scrolls while navigation stays fixed

### **Component Hierarchy**
```
App Container
├── Mobile Frame (393x852)
│   ├── Status Bar Space (44px)
│   ├── Content Area (flexible)
│   │   ├── Header Section
│   │   ├── Search Section  
│   │   ├── Fitness Events Section
│   │   ├── Other Sections...
│   │   └── Bottom Padding (80px for nav)
│   └── Bottom Navigation (80px)
└── Background Gradient
```

## **🚀 Implementation Steps in Figma**

### **Step 1: Setup**
1. Create new Figma file
2. Set frame to 393x852px
3. Apply background gradient
4. Create mobile container with glassmorphism

### **Step 2: Design System**
1. Create color styles for the palette
2. Set up text styles for typography
3. Create effect styles for shadows and blurs
4. Build reusable button components

### **Step 3: Components**
1. Start with Header Section
2. Build Search Section  
3. Create Fitness Events Section
4. Design Bottom Navigation
5. Build Fitness Events Page

### **Step 4: States & Variants**
1. Add component variants for different states
2. Create interactive prototypes
3. Test navigation flows
4. Add micro-interactions

---

**Result**: This guide provides everything needed to recreate the Explori app design in Figma with pixel-perfect accuracy, maintaining the modern aesthetic and glassmorphism effects while optimizing for iPhone 14 Pro dimensions.