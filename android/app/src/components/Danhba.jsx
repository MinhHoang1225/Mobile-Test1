import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import DanhBaComponent from './DanhBaComponent';

export default function Danhba() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [contacts, setContacts] = useState([
    {name: 'Hoang', phone: '0901234567'},
    {name: 'Trang', phone: '0912345678'},
    {name: 'Minh', phone: '0987654321'},
  ]);
  const [search, setSearch] = useState('');
  const [editIndex, setEditIndex] = useState(null);

  const handleAddOrEdit = () => {
    if (!name || !phone) return;

    if (editIndex !== null) {
      const updated = [...contacts];
      updated[editIndex] = {name, phone};
      setContacts(updated);
      setEditIndex(null);
    } else {
      setContacts([...contacts, {name, phone}]);
    }

    setName('');
    setPhone('');
  };

  const handleEdit = index => {
    setName(contacts[index].name);
    setPhone(contacts[index].phone);
    setEditIndex(index);
  };

  const handleDelete = index => {
    const updated = contacts.filter((_, i) => i !== index);
    setContacts(updated);
  };

  const filteredContacts = contacts.filter(c =>
    c.name.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>DANH BẠ</Text>

      <TextInput
        style={styles.input}
        placeholder="Tên"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Số điện thoại"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      <TouchableOpacity style={styles.button} onPress={handleAddOrEdit}>
        <Text style={styles.buttonText}>
          {editIndex !== null ? 'Lưu' : 'Thêm'}
        </Text>
      </TouchableOpacity>

      <DanhBaComponent
        contacts={filteredContacts}
        search={search}
        setSearch={setSearch}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1, padding: 20, marginTop: 50},
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#d81b60',
  },
  input: {
    borderWidth: 1,
    borderColor: '#d81b60',
    borderRadius: 6,
    padding: 10,
    marginBottom: 10,
  },
  button: {
    backgroundColor: '#d81b60',
    paddingVertical: 6,
    borderRadius: 25, 
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
