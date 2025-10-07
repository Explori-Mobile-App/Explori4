# Bravo Tags Reference for Explori App

## How to Apply Bravo Tags in Figma

1. **Select layer** in Figma
2. **Open Bravo plugin** (right sidebar)
3. **Choose tag** from dropdown
4. **Click Apply** - tag gets added to layer name automatically

## Essential Tags for Explori App

### **Navigation Tags**

```
Bottom Navigation:
├── Home button → [button][link:Home] 
├── Map button → [button][link:Map]
├── Add Post button → [button][link:AddPost]  
├── Planner button → [button][link:Planner]
└── Profile button → [button][link:Profile]

Page Navigation:
├── Back button → [button][link:Home]
├── Place card → [button][link:PlaceDetail]
├── Event card → [button][link:EventDetail]
├── Book button → [button][link:Booking]
└── Profile avatar → [button][link:Profile]
```

### **Input Tags**

```
Search Elements:
├── Search bar → [input]
├── Search suggestions → [button]
└── Filter buttons → [button]

Forms:
├── Text inputs → [input]
├── Email input → [input]
├── Phone input → [input]
├── Message textarea → [input]
└── Submit button → [button]
```

### **Container Tags**

```
Layout Containers:
├── Main app container → [container]
├── Page containers → [container]  
├── Section containers → [container]
├── Card containers → [container]
└── List containers → [container]
```

### **Data Binding Tags**

```
Place Data:
├── Place name → [bind:place.name]
├── Place image → [bind:place.image]
├── Place rating → [bind:place.rating]
├── Place price → [bind:place.price]
├── Place description → [bind:place.description]
├── Place category → [bind:place.category]
└── Place distance → [bind:place.distance]

Event Data:
├── Event title → [bind:event.title]
├── Event image → [bind:event.image]  
├── Event date → [bind:event.date]
├── Event location → [bind:event.location]
└── Event description → [bind:event.description]

User Data:
├── User name → [bind:user.name]
├── User avatar → [bind:user.avatar]
├── User location → [bind:user.location]
└── User bio → [bind:user.bio]
```

### **Action Tags**

```
Interactive Elements:
├── Save/bookmark → [button]
├── Share button → [button]
├── Like button → [button]
├── Comment button → [button]
├── Follow button → [button]
├── Edit button → [button]
└── Delete button → [button]
```

## Component-Specific Tags

### **HeaderSection.tsx → Figma**
```
Header Container → [container]
├── Good morning text → [text]
├── Location text → [bind:user.location]  
└── Profile avatar → [button][link:Profile]
```

### **SearchSection.tsx → Figma**
```
Search Container → [container]
├── Search input → [input]
├── Search icon → [text]
└── Suggestion items → [button][link:PlaceDetail]
```

### **FeaturedPlacesSection.tsx → Figma**
```
Places Container → [container]
├── Section title → [text]
├── View All button → [button]
└── Place Card → [container]
    ├── Place image → [bind:place.image]
    ├── Place name → [bind:place.name]
    ├── Place rating → [bind:place.rating]
    ├── Place price → [bind:place.price]
    ├── View Details → [button][link:PlaceDetail]
    └── Book Now → [button][link:Booking]
```

### **EventsSection.tsx → Figma**
```
Events Container → [container]
├── Section title → [text]
└── Event Card → [container]
    ├── Event image → [bind:event.image]
    ├── Event title → [bind:event.title]
    ├── Event date → [bind:event.date]
    └── Join button → [button][link:EventDetail]
```

### **BottomNavigation.tsx → Figma**
```
Bottom Nav → [container]
├── Home tab → [button][link:Home]
├── Map tab → [button][link:Map]  
├── Add Post tab → [button][link:AddPost]
├── Planner tab → [button][link:Planner]
└── Profile tab → [button][link:Profile]
```

## Layer Naming Convention

**Before Adding Tags:**
```
- Rectangle 1
- Text 2
- Button 3
```

**After Adding Tags (Bravo plugin does this automatically):**
```
- Rectangle 1 [container]
- Text 2 [bind:place.name]
- Button 3 [button][link:PlaceDetail]
```

## Common Tag Combinations

```
Navigation Buttons:
[button][link:PageName]

Data Display:
[bind:fieldName] (for dynamic content)
[text] (for static content)

Interactive Cards:
[container] (for card wrapper)
[button][link:DetailPage] (for clickable area)

Form Elements:
[input] (for all input types)
[button] (for submit buttons)

Images:
[bind:imageName] (for dynamic images)
No tag needed for static images
```

## Validation Checklist

**Before importing to Bravo Studio:**

✅ **Navigation Flow**
- [ ] Home → PlaceDetail works
- [ ] PlaceDetail → Home (back) works  
- [ ] Bottom nav switches pages
- [ ] All [link:PageName] match actual page names

✅ **Data Binding**
- [ ] All dynamic content has [bind:fieldName]
- [ ] Field names match your API structure
- [ ] Images have [bind:imageName] tags

✅ **Interactions**
- [ ] All clickable elements have [button] tag
- [ ] All form inputs have [input] tag
- [ ] Containers have [container] tag

✅ **Tag Syntax**
- [ ] No spaces in tag names
- [ ] Brackets are correct [ ]
- [ ] Colons used properly :
- [ ] Page names match exactly

## Quick Reference

**Most Used Tags:**
- `[container]` - Layout wrappers
- `[button]` - Clickable elements
- `[button][link:PageName]` - Navigation
- `[input]` - Form fields
- `[text]` - Static text
- `[bind:fieldName]` - Dynamic content

**Page Names (must match exactly):**
- Home
- Map  
- AddPost
- Planner
- Saved
- Profile
- PlaceDetail
- EventDetail
- Booking

## Testing Tags

**Use Bravo Plugin "Tag Checker":**
1. Select all layers
2. Run Tag Checker
3. Fix any validation errors
4. Ensure navigation flow is complete

When all tags validate successfully, your Figma file is ready for Bravo Studio! 🎉