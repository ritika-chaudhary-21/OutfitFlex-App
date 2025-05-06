# 👗 OutfitFlex App

OutfitFlex is a personalized outfit recommendation app that helps users express their style through fashion suggestions tailored to their **body type**, **fit preference**, **style vibe**, and **occasion needs**. It's built with **React Native** using **Expo SDK**, and the current version is a **dummy frontend** (no backend yet) focused on the sign-up flow and styling preferences.

The app allows users to:

- Create an account with email, nickname, and password  
- Select a cute preset avatar (pandas, strawberries, etc.)  
- Choose their body shape, preferred clothing fit, favorite style, and event focus  
- See their choices logged in the console (will be sent to backend later)

---

## 🚀 Features (in-progress)
- User Sign-Up
- Style, fit, body type, and occasion preference selection
- Avatar picker
- (Coming soon) Outfit recommendations

---

## 🛠 Tech Stack
- React Native (with Expo SDK 53)
- TypeScript
- Expo CLI
- Styled with React Native Stylesheets

---

# Clone the repo
git clone https://github.com/ritika-chaudhary-21/OutfitFlex-App.git

---

## 🛠 Commands Used So Far (for setup & development)

These are the terminal commands a new developer needs to run:

```bash
# 1. Create the app
npx create-expo-app OutfitFlex-App --template

# 2. Go to the project folder
cd OutfitFlex-App

# 3. Install all dependencies and React Navigation (and its dependencies)
npm install
npm install @react-navigation/native
npm install @react-navigation/native-stack


npx expo install react-native-screens react-native-safe-area-context react-native-gesture-handler react-native-reanimated react-native-vector-icons

# 4. Create folders inside app/
# (You can do this via file explorer or command line)

# 5. Install TypeScript if not already added
npx expo install typescript
npx expo install nativewind@^2.0.0 tailwindcss@3.3.2
npx tailwindcss init

# 6. Start the app
npx expo start

# If Babel Plugins error occur:
npm install --save-dev @babel/core@^7
npm install --save-dev @babel/core@babel/cli
npm install --save-dev @babel/core@babel/present_env
npm install --save-dev @babel/core

```

# 🧑‍🎨 Open the QR code in the Expo Go app on your phone, or run it on an emulator.

---

# 🌱 What's Next
- Connect to backend API for storing user data
- Support multi-select (e.g., choose multiple occasions or styles)
- Add login & onboarding screens
- Add user closet (with camera/upload)
- Outfit suggestion engine using AI trends and preferences

---

Let me know if you'd like a **Contributing section**, a **screenshot preview**, or help setting up GitHub Pages or backend docs.
