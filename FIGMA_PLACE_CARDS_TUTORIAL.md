# How to Create Place Cards in Figma - Step by Step

## Based on Your FeaturedPlacesSection.tsx

Your React component structure:
```jsx
<div className="bg-white rounded-xl border border-[#e5e7eb] overflow-hidden">
  <ImageWithFallback className="w-full h-40 object-cover" />
  <div className="p-4">
    <h3>Coastal Café</h3>
    <p>Restaurant • 4.8 ⭐</p>
    <div className="flex items-center justify-between mb-3">
      <span>$25-40</span>
      <span>📍 0.3 km</span>
    </div>
    <div className="flex gap-2">
      <Button variant="outline">View Details</Button>
      <Button>Book Now</Button>
    </div>
  </div>
</div>
```

## Step 1: Create Place Card Container (5 minutes)

### **Create Main Card Container**
1. **Press `R`** (Rectangle tool)
2. **Draw rectangle**: 361px wide × 280px tall
3. **Position**: 24px from left edge of frame (leaves 8px margin on right)
4. **Fill**: #ffffff (white)
5. **Border**: 1px solid #e5e7eb 
6. **Corner radius**: 12px
7. **Name layer**: "Place Card 1"
8. **Add shadow** (optional): Drop shadow with 0px 1px 3px rgba(0,0,0,0.1)

### **Card Container Properties:**
```
Size: 361 × 280px
Position: X: 24px, Y: [below your header section]
Fill: #ffffff
Stroke: 1px, #e5e7eb
Corner radius: 12px
Effects: Drop shadow (optional)
  - X: 0, Y: 1, Blur: 3, Color: rgba(0,0,0,0.1)
```

## Step 2: Add Place Image Area (3 minutes)

### **Create Image Rectangle**
1. **Press `R`** (Rectangle tool)
2. **Draw inside card**: 361px wide × 160px tall
3. **Position**: Top of card container (0px from top, 0px from left)
4. **Fill**: Light gray placeholder (#f3f4f6) or actual image
5. **Corner radius**: 12px (top corners only)
6. **Name layer**: "Place Image"

### **Image Properties:**
```
Size: 361 × 160px
Position: X: 0 (relative to card), Y: 0 (relative to card)
Fill: #f3f4f6 (placeholder) or actual image
Corner radius: 12px (only top-left and top-right)
```

### **For Real Images Later:**
- **In Bravo**: This will become `[bind:image]`
- **For now**: Use gray placeholder or search Unsplash for cafe/hotel images

## Step 3: Add Text Content (10 minutes)

### **Content Area Setup**
- **Content starts**: 16px from left edge, 16px below image
- **Content width**: 329px (361 - 32px padding)
- **Content height**: 104px (280 - 160 - 16px padding)

### **Place Name (Title)**
1. **Press `T`** (Text tool)
2. **Click** 16px from left edge of card, 16px below image
3. **Type**: "Coastal Café"
4. **Properties**:
   ```
   Font: 16px
   Weight: Medium (600)
   Color: #1f2937
   Line height: 1.5
   ```
5. **Name layer**: "Place Title"

### **Subtitle (Category & Rating)**
1. **Press `T`** (Text tool)
2. **Position**: Below title, 4px gap
3. **Type**: "Restaurant • 4.8 ⭐"
4. **Properties**:
   ```
   Font: 14px
   Weight: Regular (400)
   Color: #64748b
   Line height: 1.5
   ```
5. **Name layer**: "Place Subtitle"

### **Price & Distance Row**
Create a container for price and distance:

**Price Text:**
1. **Press `T`** (Text tool)
2. **Position**: Below subtitle, 8px gap, left aligned
3. **Type**: "$25-40"
4. **Properties**:
   ```
   Font: 14px
   Weight: Medium (600)
   Color: #1f2937
   ```
5. **Name layer**: "Place Price"

**Distance Text:**
1. **Press `T`** (Text tool)
2. **Position**: Same row as price, right aligned within content area
3. **Type**: "📍 0.3 km"
4. **Properties**:
   ```
   Font: 14px
   Weight: Regular (400)  
   Color: #64748b
   ```
5. **Name layer**: "Place Distance"

## Step 4: Add Action Buttons (10 minutes)

### **View Details Button (Outline)**
1. **Press `R`** (Rectangle tool)
2. **Size**: 170px wide × 36px tall
3. **Position**: Bottom of content area, left side
4. **Fill**: Transparent (no fill)
5. **Border**: 1px solid #ff6b35
6. **Corner radius**: 8px
7. **Name layer**: "View Details Button"

**Button Text:**
1. **Press `T`** (Text tool)
2. **Type**: "View Details"
3. **Position**: Center of button
4. **Properties**:
   ```
   Font: 14px
   Weight: Medium (600)
   Color: #ff6b35
   Text align: Center
   ```

### **Book Now Button (Filled)**
1. **Press `R`** (Rectangle tool)
2. **Size**: 170px wide × 36px tall
3. **Position**: Bottom of content area, right side (8px gap from View Details)
4. **Fill**: #ff6b35
5. **Corner radius**: 8px
6. **Name layer**: "Book Now Button"

**Button Text:**
1. **Press `T`** (Text tool)
2. **Type**: "Book Now"
3. **Position**: Center of button
4. **Properties**:
   ```
   Font: 14px
   Weight: Medium (600)
   Color: #ffffff
   Text align: Center
   ```

### **Button Layout:**
```
Button Row Container:
├── Width: 348px (361 - 16px padding each side)
├── Height: 36px
├── Gap between buttons: 8px
├── View Details: 170px wide
└── Book Now: 170px wide
```

## Step 5: Duplicate for Second Card (5 minutes)

### **Create Place Card 2**
1. **Select entire Place Card 1** (all elements)
2. **Right-click** → Duplicate
3. **Position**: 16px below Place Card 1
4. **Update text content**:
   ```
   Title: "Mountain View Hotel"
   Subtitle: "Hotel • 4.6 ⭐"
   Price: "$150/night"
   Distance: "📍 0.8 km"
   ```
5. **Keep all styling the same**

## Step 6: Group and Organize (3 minutes)

### **Group Elements**
1. **Select all Place Card 1 elements**
2. **Press Cmd/Ctrl + G** to group
3. **Name group**: "Place Card 1"
4. **Repeat for Place Card 2**

### **Create Section Container**
1. **Select both place card groups**
2. **Press Cmd/Ctrl + G** to group
3. **Name group**: "Featured Places Section"

## Step 7: Add Bravo Tags (5 minutes)

### **Using Bravo Plugin:**
1. **Install Bravo Studio plugin** (if not done)
2. **Select Place Card 1 group** → Add tag: `[container]`
3. **Select Place Image** → Add tag: `[bind:image]`
4. **Select Place Title** → Add tag: `[bind:title]`
5. **Select Place Subtitle** → Add tag: `[bind:subtitle]`
6. **Select Place Price** → Add tag: `[bind:price]`
7. **Select View Details button** → Add tag: `[button][link:PlaceDetail]`
8. **Select Book Now button** → Add tag: `[button][link:Booking]`
9. **Repeat for Place Card 2**

## Visual Layout Reference

```
📐 Place Card (361×280px)
├── 🖼️ Image Area (361×160px) - Top
│   └── Gray placeholder or actual image
├── 📝 Content Area (329×104px) - Bottom
│   ├── Padding: 16px all sides
│   ├── "Coastal Café" (16px, medium, #1f2937)
│   ├── "Restaurant • 4.8 ⭐" (14px, regular, #64748b)
│   ├── Price Row (flex, space between)
│   │   ├── "$25-40" (14px, medium, #1f2937)
│   │   └── "📍 0.3 km" (14px, regular, #64748b)
│   └── Button Row (flex, 8px gap)
│       ├── "View Details" (170×36px, outline, #ff6b35)
│       └── "Book Now" (170×36px, filled, #ff6b35)
```

## Success Checklist

✅ **Visual Design**
- [ ] Card size: 361×280px
- [ ] White background with gray border
- [ ] Image area: 361×160px at top
- [ ] Content padding: 16px all sides
- [ ] Two buttons: outline + filled
- [ ] Colors match your React app exactly

✅ **Content**
- [ ] Card 1: Coastal Café, Restaurant • 4.8 ⭐, $25-40
- [ ] Card 2: Mountain View Hotel, Hotel • 4.6 ⭐, $150/night
- [ ] Buttons: "View Details" and "Book Now"

✅ **Layout**
- [ ] Cards positioned with proper spacing
- [ ] Text hierarchy looks correct
- [ ] Buttons are properly aligned
- [ ] Everything fits within iPhone frame

✅ **Bravo Tags**
- [ ] Cards tagged as [container]
- [ ] Images tagged as [bind:image]
- [ ] Dynamic content tagged as [bind:fieldName]
- [ ] Buttons tagged with navigation

**Time Estimate: 40 minutes for both cards**

Once you have these place cards created, you'll have the core visual elements that match your React app perfectly! 🎯