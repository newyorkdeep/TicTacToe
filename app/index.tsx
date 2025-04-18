import { Text, View, StyleSheet, TouchableOpacity, Button } from "react-native";
import { useState } from "react";

export default function Index() {
  //let numbers: number[]=[0, 0, 0, 1, 0, 0, 0, 0, 0];
  const [numbers, setNumbers]=useState(['',' ', '', '', '', '', '', '', '']);
  const [current, setCurrent] = useState(0);
  const [usedindexes, setUsedindexes] = useState([99]);
  const [winner, setWinner]= useState('');
  let justcounter=1;

  const calculatewinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i=0; i<lines.length; i++) {
      let x=lines[i][0];
      let q=lines[i][1];
      let c=lines[i][2];
      if (numbers[x]===numbers[q] && numbers[q]===numbers[c] && numbers[c]===numbers[x] && numbers[x]!=='' && numbers[q]!=='' && numbers[c]!=='') {
        if (numbers[x]=='x') {
          return 1;
        }
        if (numbers[x]=='o') {
          return 2;
        }
      }
    }
    return 0;
  };

  function handleclick (a: number) {
    let inds: number[] = [];
    inds=usedindexes;
    if (inds.includes(a)) {
      justcounter=2;
    } else {
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
      inds.push(a);
      setUsedindexes(inds);
    }
    if (calculatewinner()==1) {
      setWinner('❌ WON!');
      setUsedindexes([0,1,2,3,4,5,6,7,8]);
    }
    if (calculatewinner()==2) {
      setWinner('⭕️ WON!');
      setUsedindexes([0,1,2,3,4,5,6,7,8]);
    }
  }

  function resetstate () {
    setNumbers(['',' ', '', '', '', '', '', '', '']);
    setCurrent(0);
    setUsedindexes([]);
    setWinner('');
  }

  function showreset () {
    let inds: number[] = [];
    inds=usedindexes;
    if (inds.length>0) {
      return <TouchableOpacity onPress={()=> resetstate()}><View style={styles.resetbutton}>Reset</View></TouchableOpacity>;
    }
    return null;
  }

  function symbol (c: string) {
    if (c=='x') {
      return <Text>❌</Text>;
    }
    if (c=='o') {
      return <Text>⭕️</Text>;
    }
    return '';
  }

  return (
    <View style={styles.container}>
      <Text style={styles.winner}>{winner}</Text>
      <p></p>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(0)}>{symbol(numbers[0])}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(1)}>{symbol(numbers[1])}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(2)}>{symbol(numbers[2])}</TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(3)}>{symbol(numbers[3])}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(4)}>{symbol(numbers[4])}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(5)}>{symbol(numbers[5])}</TouchableOpacity>
      </View>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(6)}>{symbol(numbers[6])}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(7)}>{symbol(numbers[7])}</TouchableOpacity>
        <TouchableOpacity style={styles.opacity} onPress={()=> handleclick(8)}>{symbol(numbers[8])}</TouchableOpacity>
      </View>
      {showreset()}
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
    fontSize: 50,
  },
  winner: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  resetbutton: {
    backgroundColor: '#c9c9c9',
    borderRadius: 15,
    color: 'white',
    padding: 5,
    marginTop: 15,
  }
});