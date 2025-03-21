import { useState, useRef } from 'react';
import { View, Text, StyleSheet, Pressable, Image } from 'react-native';
import { Camera } from 'expo-camera';
import * as ImagePicker from 'expo-image-picker';
import { Upload, Camera as CameraIcon, Image as ImageIcon } from 'lucide-react-native';
import { useRouter } from 'expo-router';

export default function ScanScreen() {
  const [hasPermission, setHasPermission] = useState<boolean | null>(null);
  const [type, setType] = useState(Camera.Constants.Type.back);
  const cameraRef = useRef<Camera | null>(null);
  const router = useRouter();

  const requestPermission = async () => {
    const { status } = await Camera.requestCameraPermissionsAsync();
    setHasPermission(status === 'granted');
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      // Handle the captured image
      router.push({
        pathname: '/result',
        params: { image: photo.uri }
      });
    }
  };

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.canceled) {
      router.push({
        pathname: '/result',
        params: { image: result.assets[0].uri }
      });
    }
  };

  if (hasPermission === null) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Camera Permission</Text>
        <Text style={styles.description}>
          We need camera access to help you identify electronic components
        </Text>
        <Pressable style={styles.button} onPress={requestPermission}>
          <Text style={styles.buttonText}>Grant Permission</Text>
        </Pressable>
      </View>
    );
  }

  if (hasPermission === false) {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>No Camera Access</Text>
        <Text style={styles.description}>
          Please enable camera access in your device settings to use this feature
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      {hasPermission ? (
        <Camera style={styles.camera} type={type} ref={cameraRef}>
          <View style={styles.buttonContainer}>
            <Pressable style={styles.captureButton} onPress={takePicture}>
              <CameraIcon size={32} color="#FFF" />
            </Pressable>
            <Pressable style={styles.galleryButton} onPress={pickImage}>
              <ImageIcon size={24} color="#007AFF" />
            </Pressable>
          </View>
        </Camera>
      ) : (
        <View style={styles.uploadContainer}>
          <Upload size={48} color="#666" />
          <Text style={styles.uploadText}>Upload an image</Text>
          <Pressable style={styles.button} onPress={pickImage}>
            <Text style={styles.buttonText}>Choose from Gallery</Text>
          </Pressable>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
    justifyContent: 'center',
    alignItems: 'center',
  },
  camera: {
    flex: 1,
    width: '100%',
  },
  buttonContainer: {
    flex: 1,
    backgroundColor: 'transparent',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-end',
    marginBottom: 40,
  },
  captureButton: {
    backgroundColor: '#007AFF',
    padding: 20,
    borderRadius: 50,
    marginHorizontal: 10,
  },
  galleryButton: {
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 40,
    marginHorizontal: 10,
  },
  uploadContainer: {
    alignItems: 'center',
    padding: 20,
  },
  uploadText: {
    fontSize: 18,
    color: '#666',
    marginVertical: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#1A1A1A',
  },
  description: {
    fontSize: 16,
    color: '#666',
    textAlign: 'center',
    marginBottom: 20,
    paddingHorizontal: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 8,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '500',
  },
});