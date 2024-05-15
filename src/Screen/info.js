import { StyleSheet, Image, Text, View,Button } from 'react-native'
import React from 'react'
import { AntDesign } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
// cars
const car1 = require("../Assets/v-1.png")
const info = () => {
  return (
    <View style={styles.info}>
      <View style={styles.header}>
        <AntDesign name="caretleft" size={24} color="black" />
        <Text style={{ fontSize: 20, fontWeight: "500" }}>Detail</Text>
        <Entypo name="dots-three-vertical" size={24} color="black" />
      </View>
      <View>
        <Image source={car1} style={{ width: 300, height: 100, marginTop: 70, }} />
        <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 40 }}>
          <Text>peugeot 3008 <br />suv-Automatic</Text>
          {/* <Text>suv-Automatic</Text> */}
          <Text>$100/days</Text>
        </View>
        <View style={{marginTop:25,}}>
          Peugeot 3008 Price in Pakistan is estimated to start from PKR 10,500,000. This estimated price is ex-factory and does not include freight, taxes, and other documentation charges.
        </View>
        <View style={{marginTop:25}}>
          <Text style={{fontSize:20,fontWeight:"600"}}>Properties</Text>
        <View style={{marginTop:15,flexDirection:"row",justifyContent:"space-between"}}>
          <Text>Engine: 1600cc <br />HoresPower: 162hp</Text>
          <Text>Torque(NM):250 <br />Mileage (KM/L):10-14</Text>
        </View>
        </View>
        <View style={styles.button}>
          <Button title='Rent a Car' onPress={()=>{alert('booked')}}/>
        </View>
      </View>
    </View>
  )
}

export default info

const styles = StyleSheet.create({
  info: {
    paddingLeft: 35,
    paddingRight: 35,
    marginTop: 20,

  },
  button:{
    marginTop:30,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  }
})