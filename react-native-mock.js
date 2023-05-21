// react-native-mock.js
import { NativeModules, Platform } from "react-native";

// Mock StatusBar component
NativeModules.StatusBarManager = {};

// Mock NetInfo module
NativeModules.RNCNetInfo = {
  getCurrentState: jest.fn(),
  addListener: jest.fn(),
};

// Mock AsyncStorage module
NativeModules.AsyncStorage = {
  getItem: jest.fn(),
  setItem: jest.fn(),
  removeItem: jest.fn(),
  clear: jest.fn(),
  getAllKeys: jest.fn(),
};

// Mock Platform.OS
Platform.OS = "android";

// Export NativeModules for global usage
global.NativeModules = NativeModules;
