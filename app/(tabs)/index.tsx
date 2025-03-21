import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Link } from 'expo-router';
import { Search, Camera, Library } from 'lucide-react-native';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Component Identifier</Text>
        <Text style={styles.subtitle}>Identify electronic components instantly</Text>
      </View>

      <Pressable style={styles.searchBar}>
        <Search size={20} color="#666" />
        <Text style={styles.searchText}>Search components...</Text>
      </Pressable>

      <View style={styles.quickActions}>
        <Link href="/scan" asChild>
          <Pressable style={styles.actionButton}>
            <Camera size={24} color="#007AFF" />
            <Text style={styles.actionText}>Scan Component</Text>
          </Pressable>
        </Link>
        <Link href="/library" asChild>
          <Pressable style={styles.actionButton}>
            <Library size={24} color="#007AFF" />
            <Text style={styles.actionText}>Browse Library</Text>
          </Pressable>
        </Link>
      </View>

      <View style={styles.recentSection}>
        <Text style={styles.sectionTitle}>Recent Scans</Text>
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.recentScans}>
          {[1, 2, 3].map((item) => (
            <View key={item} style={styles.recentItem}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80' }}
                style={styles.recentImage}
              />
              <Text style={styles.recentText}>Resistor {item}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.featuredSection}>
        <Text style={styles.sectionTitle}>Featured Components</Text>
        <View style={styles.featuredGrid}>
          {[1, 2, 3, 4].map((item) => (
            <View key={item} style={styles.featuredItem}>
              <Image
                source={{ uri: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80' }}
                style={styles.featuredImage}
              />
              <Text style={styles.featuredText}>Component {item}</Text>
              <Text style={styles.featuredDescription}>Brief description here</Text>
            </View>
          ))}
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
    padding: 20,
    paddingTop: 60,
    backgroundColor: '#FFF',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#1A1A1A',
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    marginTop: 5,
  },
  searchBar: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 20,
    padding: 12,
    backgroundColor: '#FFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  quickActions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  actionButton: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#FFF',
    padding: 15,
    borderRadius: 12,
    marginHorizontal: 5,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  actionText: {
    marginLeft: 8,
    fontSize: 16,
    color: '#007AFF',
    fontWeight: '500',
  },
  recentSection: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: '600',
    marginBottom: 15,
    color: '#1A1A1A',
  },
  recentScans: {
    flexDirection: 'row',
  },
  recentItem: {
    marginRight: 15,
    width: 120,
  },
  recentImage: {
    width: 120,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#E1E1E1',
  },
  recentText: {
    marginTop: 8,
    fontSize: 14,
    color: '#1A1A1A',
  },
  featuredSection: {
    padding: 20,
  },
  featuredGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  featuredItem: {
    width: '48%',
    marginBottom: 20,
    backgroundColor: '#FFF',
    borderRadius: 12,
    padding: 10,
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  featuredImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    backgroundColor: '#E1E1E1',
  },
  featuredText: {
    marginTop: 8,
    fontSize: 16,
    fontWeight: '500',
    color: '#1A1A1A',
  },
  featuredDescription: {
    marginTop: 4,
    fontSize: 14,
    color: '#666',
  },
});