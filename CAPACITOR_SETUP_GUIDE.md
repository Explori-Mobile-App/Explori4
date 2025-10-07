# 📱 Capacitor Setup Guide for Explori

## **🚀 Quick Start**

### **1. Install Dependencies**
```bash
npm install
```

### **2. Run Setup Script**
```bash
chmod +x setup-capacitor.sh
./setup-capacitor.sh
```

### **3. Open in Xcode**
```bash
npm run build:ios
```

## **📋 Manual Setup Steps**

If you prefer manual setup or the script doesn't work:

### **Step 1: Build the App**
```bash
npm run build
```

### **Step 2: Initialize Capacitor**
```bash
npx cap init "Explori" "com.explori.travelapp" --web-dir=dist
```

### **Step 3: Add iOS Platform**
```bash
npx cap add ios
```

### **Step 4: Sync Project**
```bash
npx cap sync
```

### **Step 5: Open in Xcode**
```bash
npx cap open ios
```

## **🔧 Available Scripts**

```bash
# Development
npm run dev                 # Start development server
npm run build              # Build for production

# Capacitor Commands
npm run cap:init           # Initialize Capacitor
npm run cap:add:ios        # Add iOS platform
npm run cap:sync           # Sync all platforms
npm run cap:copy           # Copy web assets
npm run cap:open:ios       # Open iOS project in Xcode

# Combined Commands
npm run build:ios          # Build + Copy + Open iOS
npm run sync:ios           # Quick sync for iOS
```

## **📱 Xcode Configuration**

### **1. App Signing**
1. Open the project in Xcode
2. Select your app target
3. Go to "Signing & Capabilities"
4. Select your team
5. Ensure Bundle Identifier matches: `com.explori.travelapp`

### **2. App Icon Setup**
1. In Xcode Navigator, find `App/App/Assets.xcassets`
2. Click on `AppIcon`
3. Drag your app icons to the appropriate slots
4. Use the generated icons from `/ios-icons-generator.html`

### **3. Launch Screen**
1. Navigate to `App/App/Base.lproj/LaunchScreen.storyboard`
2. Customize the launch screen with your branding
3. Use your app colors (indigo/purple gradient)

### **4. App Information**
Update `App/App/Info.plist`:
```xml
<key>CFBundleDisplayName</key>
<string>Explori</string>
<key>CFBundleName</key>
<string>Explori</string>
<key>CFBundleShortVersionString</key>
<string>1.0.0</string>
```

## **🎯 iOS Capabilities**

Your app automatically includes these Capacitor plugins:

- **Status Bar**: Customize status bar appearance
- **Splash Screen**: Native splash screen
- **Haptics**: Tactile feedback
- **Preferences**: Secure local storage
- **App**: App lifecycle events
- **Keyboard**: Keyboard behavior

## **🔄 Development Workflow**

### **Making Changes**
1. Edit your React code
2. Test in browser: `npm run dev`
3. Build and sync: `npm run build && npm run sync:ios`
4. Test in iOS Simulator

### **Adding New Features**
1. Install Capacitor plugin: `npm install @capacitor/[plugin-name]`
2. Import in your React code
3. Sync: `npm run sync:ios`
4. Add iOS permissions if needed

## **🚨 Troubleshooting**

### **Build Errors**
```bash
# Clean and rebuild
rm -rf dist ios node_modules
npm install
npm run build
npx cap add ios
```

### **Xcode Issues**
- Clean Build Folder: `Product → Clean Build Folder`
- Delete Derived Data: `Window → Organizer → Projects → Delete`
- Restart Xcode

### **Plugin Not Working**
```bash
# Reinstall and sync
npm uninstall @capacitor/[plugin-name]
npm install @capacitor/[plugin-name]
npx cap sync ios
```

### **Common Issues**

**Issue**: "Could not find module '@capacitor/core'"
**Solution**: 
```bash
npm install @capacitor/core
npx cap sync
```

**Issue**: Status bar overlapping content
**Solution**: Already handled with offset in ToastProvider

**Issue**: White screen on launch
**Solution**: Check `dist` folder exists and contains built files

## **📦 Capacitor Plugins Included**

- `@capacitor/core` - Core functionality
- `@capacitor/ios` - iOS platform
- `@capacitor/cli` - Command line tools
- `@capacitor/app` - App lifecycle
- `@capacitor/status-bar` - Status bar styling
- `@capacitor/splash-screen` - Launch screen
- `@capacitor/haptics` - Tactile feedback
- `@capacitor/keyboard` - Keyboard handling
- `@capacitor/preferences` - Secure storage

## **🎨 Native Features Available**

Your React code can now use:

```typescript
import { useCapacitor } from './src/hooks/useCapacitor';

const { isNative, triggerHaptic, setPreference } = useCapacitor();

// Haptic feedback
triggerHaptic('light');

// Secure storage
await setPreference('userSettings', JSON.stringify(settings));
```

## **🚀 Next Steps**

1. **Test thoroughly** on iOS Simulator
2. **Configure app metadata** in Xcode
3. **Add app icons** using the generator
4. **Test on physical device**
5. **Submit to App Store** (see APP_STORE_CHECKLIST.md)

## **📚 Resources**

- [Capacitor Documentation](https://capacitorjs.com/docs)
- [iOS Capacitor Guide](https://capacitorjs.com/docs/ios)
- [Apple Developer Portal](https://developer.apple.com)
- [App Store Guidelines](https://developer.apple.com/app-store/review/guidelines/)