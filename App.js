// App.js
import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, ScrollView, TextInput, TouchableOpacity, ActivityIndicator, Dimensions, SafeAreaView, Platform } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { LinearGradient } from 'expo-linear-gradient';
import { StatusBar } from 'expo-status-bar';
import { Ionicons } from '@expo/vector-icons';
import Constants from 'expo-constants';

const API_URL = 'http://apihub.p.appply.xyz:3300/chatgpt';
const { width } = Dimensions.get('window');

const App = () => {
  // ... (all your existing state variables and useEffect hooks remain unchanged)

  // ... (all your existing functions like generateStory, renderStart, etc. remain unchanged)

  return (
    <LinearGradient
      colors={['#1A1B2E', '#2A2B3E']}
      style={styles.container}
    >
      <StatusBar style="light" />
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          {isLoading ? (
            <View style={styles.loadingContainer}>
              <ActivityIndicator size="large" color="#FFD700" />
              <Text style={styles.loadingText}>Crafting your magical tale...</Text>
            </View>
          ) : (
            <>
              {step !== 'start' && (
                <TouchableOpacity style={styles.backButton} onPress={() => setStep(step === 'characters' ? 'start' : 'characters')}>
                  <Ionicons name="arrow-back" size={24} color="#FFD700" />
                </TouchableOpacity>
              )}
              {step === 'start' && renderStart()}
              {step === 'characters' && renderCharacterInput()}
              {step === 'customization' && renderCustomization()}
              {step === 'story' && renderStory()}
            </>
          )}
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 20,
    paddingTop: Platform.OS === 'android' ? Constants.statusBarHeight + 20 : 20,
  },
  scrollView: {
    flex: 1,
  },
  startContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  title: {
    fontSize: 40,
    color: '#FFD700',
    marginBottom: 30,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 215, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 10
  },
  sectionTitle: {
    fontSize: 28,
    color: '#FFD700',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: 'rgba(255, 215, 0, 0.75)',
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 5
  },
  // ... (all other style definitions remain unchanged)
  backButton: {
    position: 'absolute',
    top: Platform.OS === 'android' ? Constants.statusBarHeight : 0,
    left: 20,
    zIndex: 1,
  },
  // ... (all other style definitions remain unchanged)
});

export default App;