import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, ScrollView } from 'react-native';
import Checkbox from 'expo-checkbox';
import Header from './Header.js';
import ImagePickerExample from './ImagePicker.js';

export default function App() {
  const image = {uri: "https://img.rawpixel.com/s3fs-private/rawpixel_images/website_content/v1013-p-0009a_1-krxfulwe.jpg?w=800&dpr=1&fit=default&crop=default&q=65&vib=3&con=3&usm=15&bg=F4F4F3&ixlib=js-2.2.1&s=19eaa1b284bd38ab2d07b004d203fa80"};
  const [Breakfast, setBreakfast] = useState(false);
  const [Lunch, setLunch] = useState(false);
  const [Task, setTask] = useState(false);
  const [Clean, setClean] = useState(false);
  const [Dinner, setDinner] = useState(false);


  return (
    <ImageBackground source={image} resizeMode='cover' style={styles.container}>
      <View style={styles.container}>
        <ScrollView style = {styles.ScrollView}>
        <Header/>
        <View style={styles.Wrapper}>
          <View style={styles.item}>
            <View style={styles.section}>
              <Checkbox style={styles.checkbox} value={Breakfast} onValueChange={setBreakfast}/>
              <Text style={styles.textCheckbox}>Sarapan</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.section}>
              <Checkbox style={styles.checkbox} value={Lunch} onValueChange={setLunch}/>
              <Text style={styles.textCheckbox}>Makan siang</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.section}>
              <Checkbox style={styles.checkbox} value={Task} onValueChange={setTask}/>
              <Text style={styles.textCheckbox}>Mengerjakan Tugas</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.section}>
              <Checkbox style={styles.checkbox} value={Clean} onValueChange={setClean}/>
              <Text style={styles.textCheckbox}>Membereskan Rumah</Text>
            </View>
          </View>
          <View style={styles.item}>
            <View style={styles.section}>
              <Checkbox style={styles.checkbox} value={Dinner} onValueChange={setDinner}/>
              <Text style={styles.textCheckbox}>Makan Malam</Text>
            </View>
          </View>
          <ImagePickerExample/>
        </View>
        </ScrollView>
      </View>
    </ImageBackground>  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  item: {
    backgroundColor: '#d2d17f',
    padding: 20,
    borderRadius: 50,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  section: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  Wrapper:{
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  textTitle: {
    color: "black",
    fontSize: 50,
    fontWeight: "bold",
  },
  textCheckbox: {
    fontSize: 15,
    fontWeight: "bold",
  },
  scrollView: {
    paddingRight : 5,
    marginHorizontal: 2,
    width: '95%',
  },
  checkbox: {
    margin: 4,
  },
});
