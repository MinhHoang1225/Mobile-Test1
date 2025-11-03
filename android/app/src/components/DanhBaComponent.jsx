import React from 'react';
import {
  View,
  Text,
  TextInput,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';

export default function DanhBaComponent({
  contacts,
  search,
  setSearch,
  onEdit,
  onDelete,
}) {
  const renderFlatlist = ({item, index}) => (
    <View style={styles.item}>
      <View style={styles.info}>
        <Text style={styles.chatIcon}>💬</Text>
        <View>
          <Text style={styles.name}>{item.name}</Text>
          <Text style={styles.phone}>{item.phone}</Text>
        </View>
      </View>
      <View style={styles.action}>
        <TouchableOpacity onPress={() => onEdit(index)}>
          <Text style={styles.icon}>🖋️</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => onDelete(index)}>
          <Text style={styles.icon}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="🔍 Tìm kiếm..."
        value={search}
        onChangeText={setSearch}
      />

      <FlatList
        data={contacts}
        keyExtractor={(_, index) => index.toString()}
        renderItem={renderFlatlist}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 10,
  },
  searchInput: {
    borderWidth: 1,
    borderColor: '#d81b60',
    borderRadius: 6,
    padding: 8,
    marginBottom: 10,
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#fcf1f5ff',
    padding: 10,
    borderRadius: 15,
    marginBottom: 8,
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  info: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
  },
  chatIcon: {
    fontSize: 18,
    marginRight: 10,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#d81b60',
  },
  phone: {
    color: '#555',
  },
  action: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
});
