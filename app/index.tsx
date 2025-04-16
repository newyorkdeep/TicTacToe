import { Text, View, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Index() {
  //let numbers: number[]=[0, 0, 0, 1, 0, 0, 0, 0, 0];
  const [numbers, setNumbers]=useState(['',' ', '', '', '', '', '', '', '']);
  const [current, setCurrent] = useState(0);

  function handleclick (a: number) {
    let newarr: string[]=numbers;
    newarr.forEach((num, index) => {
      if (index==a) {
        if (current==0) {
          newarr[index]='x';
          setCurrent(1);
        }
        if (current==1) {
          newarr[index]='o';
          setCurrent(0);
        }
      }
    });
    setNumbers(newarr);
  }

  function resetstate () {
    setNumbers(['',' ', '', '', '', '', '', '', '']);
    setCurrent(0);
  }

  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(0)}>{numbers[0]}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(1)}>{numbers[1]}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(2)}>{numbers[2]}</TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(3)}>{numbers[3]}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(4)}>{numbers[4]}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(5)}>{numbers[5]}</TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(6)}>{numbers[6]}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(7)}>{numbers[7]}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(8)}>{numbers[8]}</TouchableOpacity>
      </View>
      <TouchableOpacity onPress={()=> resetstate()}>Reset</TouchableOpacity>
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  opacity: {
    width: 100,
    height: 100,
    borderWidth: 1,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 20,
  },
});