import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native';
import { Search, Filter } from 'lucide-react-native';

const categories = [
  { id: 1, name: 'Resistors', count: 150 },
  { id: 2, name: 'Capacitors', count: 120 },
  { id: 3, name: 'Inductors', count: 80 },
  { id: 4, name: 'Transistors', count: 200 },
  { id: 5, name: 'ICs', count: 300 },
  { id: 6, name: 'Diodes', count: 100 },
];

export default function LibraryScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Component Library</Text>
        <View style={styles.searchContainer}>
          <View style={styles.searchBar}>
            <Search size={20} color="#666" />
            <Text style={styles.searchText}>Search components...</Text>
          </View>
          <Pressable style={styles.filterButton}>
            <Filter size={20} color="#007AFF" />
          </Pressable>
        </View>
      </View>

      <View style={styles.categories}>
        {categories.map((category) => (
          <Pressable key={category.id} style={styles.categoryCard}>
            <Image
              source={{ uri: 'https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?w=400&q=80' }}
              style={styles.categoryImage}
            />
            <View style={styles.categoryInfo}>
              <Text style={styles.categoryName}>{category.name}</Text>
              <Text style={styles.categoryCount}>{category.count} items</Text>
            </View>
          </Pressable>
        ))}
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
    marginBottom: 20,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  searchBar: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#F8F9FA',
    padding: 12,
    borderRadius: 12,
    marginRight: 10,
  },
  searchText: {
    marginLeft: 10,
    color: '#666',
    fontSize: 16,
  },
  filterButton: {
    padding: 12,
    backgroundColor: '#F8F9FA',
    borderRadius: 12,
  },
  categories: {
    padding: 20,
  },
  categoryCard: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    borderRadius: 12,
    marginBottom: 15,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: '#E1E1E1',
  },
  categoryImage: {
    width: 100,
    height: 100,
  },
  categoryInfo: {
    flex: 1,
    padding: 15,
    justifyContent: 'center',
  },
  categoryName: {
    fontSize: 18,
    fontWeight: '600',
    color: '#1A1A1A',
    marginBottom: 5,
  },
  categoryCount: {
    fontSize: 14,
    color: '#666',
  },
});