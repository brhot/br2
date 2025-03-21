import { View, Text, StyleSheet, Image, ScrollView, Pressable } from 'react-native';
import { useLocalSearchParams, useRouter } from 'expo-router';
import { ArrowLeft, Share2 } from 'lucide-react-native';

export default function ResultScreen() {
  const { image } = useLocalSearchParams<{ image: string }>();
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Pressable onPress={() => router.back()} style={styles.backButton}>
          <ArrowLeft size={24} color="#1A1A1A" />
        </Pressable>
        <Text style={styles.title}>Component Details</Text>
        <Pressable style={styles.shareButton}>
          <Share2 size={24} color="#1A1A1A" />
        </Pressable>
      </View>

      <Image source={{ uri: image }} style={styles.image} />

      <View style={styles.content}>
        <View style={styles.resultCard}>
          <Text style={styles.componentName}>470Ω Resistor</Text>
          <Text style={styles.confidence}>Confidence: 98%</Text>
          
          <View style={styles.specificationsList}>
            <Text style={styles.specificationsTitle}>Specifications</Text>
            <View style={styles.specification}>
              <Text style={styles.specLabel}>Resistance</Text>
              <Text style={styles.specValue}>470Ω ±5%</Text>
            </View>
            <View style={styles.specification}>
              <Text style={styles.specLabel}>Power Rating</Text>
              <Text style={styles.specValue}>1/4 W</Text>
            </View>
            <View style={styles.specification}>
              <Text style={styles.specLabel}>Temperature Coefficient</Text>
              <Text style={styles.specValue}>±100 ppm/°C</Text>
            </View>
          </View>

          <View style={styles.description}>
            <Text style={styles.descriptionTitle}>Description</Text>
            <Text style={styles.descriptionText}>
              This is a standard through-hole resistor commonly used in electronic circuits for current limiting and voltage division. It features a tolerance of ±5% and is suitable for general-purpose applications.
            </Text>
          </View>

          <View style={styles.applications}>
            <Text style={styles.applicationsTitle}>Common Applications</Text>
            <Text style={styles.applicationItem}>• LED current limiting</Text>
            <Text style={styles.applicationItem}>• Pull-up/pull-down circuits</Text>
            <Text style={styles.applicationItem}>• Voltage dividers</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F9FA',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFF',
  },
  backButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: '#1A1A1A',
  },
  shareButton: {
    padding: 8,
  },
  image: {
    width: '100%',
    height: 300,
    backgroundColor: '#E1E1E1',
  },
  content: {
    padding: 20,
  },
  resultCard: {
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 20,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  componentName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1A1A1A',
    marginBottom: 5,
  },
  confidence: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 20,
  },
  specificationsList: {
    marginBottom: 20,
  },
  specificationsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  specification: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#E1E1E1',
  },
  specLabel: {
    fontSize: 16,
    color: '#666',
  },
  specValue: {
    fontSize: 16,
    color: '#1A1A1A',
    fontWeight: '500',
  },
  description: {
    marginBottom: 20,
  },
  descriptionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  descriptionText: {
    fontSize: 16,
    color: '#666',
    lineHeight: 24,
  },
  applications: {
    marginBottom: 20,
  },
  applicationsTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 10,
  },
  applicationItem: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
    lineHeight: 24,
  },
});