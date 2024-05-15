import { StyleSheet, Text, View, Image } from 'react-native'
import React, { useState } from 'react'
import { ScrollView, TextInput } from 'react-native-web'
const menu = require("../Assets/menu.png")
const face = require("../Assets/face.png")
// cars
const car1=require("../Assets/v-1.png")
const car2=require("../Assets/v-2.png")
const car3=require("../Assets/v-3.png")
const car4=require("../Assets/v-4.png")
// const [vehicales, setVehicales]=useState(data.vehicales)
const home = () => {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={menu} resizeMode="contain" style={{ width: 30 }} />
                <Image source={face} resizeMode="contain" style={{ width: 40 }} />
            </View>
            <View style={styles.tittel}>
                <Text style={{ fontSize: 32, fontWeight: "600" }}>Rent a car</Text>
            </View>
            <View>
                <TextInput style={styles.input}
                    placeholder="Enter car name"
                />
            </View>
         <View style={{flexDirection:"row",justifyContent:"space-between",marginTop:15}}>
        <Text style={{fontWeight:"600"}}>ALL</Text> 
        <Text>SUV</Text> 
        <Text>SEDON</Text> 
        <Text>MPV</Text> 
        <Text>HATCHBACK</Text> 
         </View>
         <View>
         <Text style={{fontSize:20,fontWeight:"bold",marginTop:20}}>Most Resent</Text>
         </View>
        <ScrollView>    
        <View style={{flexDirection:"row" ,justifyContent:"space-between",marginTop:15,backgroundColor:"white",borderRadius:"10"}}>
            <View style={{flexDirection:"column"}}>
            <Text>peugeot</Text>
            <Text>suv-Automatic</Text>
            <Text>$100/days</Text>
            </View>
          <Image source={car1} style={{ width:150,height:70}}/>  
        </View>
        <View style={{flexDirection:"row" ,justifyContent:"space-between",marginTop:15,backgroundColor:"white",borderRadius:"10"}}>
            <View style={{flexDirection:"column"}}>
            <Text>Ford Focus</Text>
            <Text>HATCH-Automatic</Text>
            <Text>$70/days</Text>
            </View>
          <Image source={car2} style={{ width:150,height:70}}/>  
        </View>
        <View style={{flexDirection:"row" ,justifyContent:"space-between",marginTop:15,backgroundColor:"white",borderRadius:"10"}}>
            <View style={{flexDirection:"column"}}>
            <Text>Renualt Megane</Text>
            <Text>sedon-Automatic</Text>
            <Text>$80/days</Text>
            </View>
          <Image source={car3} style={{ width:150,height:70}}/>  
        </View>
        <View style={{flexDirection:"row" ,justifyContent:"space-between",marginTop:15,backgroundColor:"white",borderRadius:"10"}}>
            <View style={{flexDirection:"column"}}>
            <Text>Fiat Fiorino</Text>
            <Text>MPV-Manual</Text>
            <Text>$50/days</Text>
            </View>
          <Image source={car4} style={{ width:150,height:70}}/>  
        </View>
        </ScrollView>
        </View>

    )
}

export default home

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 35,
        paddingRight: 35,
        // backgroundColor:"red",
        marginTop: 20
    },
    header: {
        height: 100,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    tittle: {
        marginTop: 15
    },
    input: {
        borderColor: "black",
        borderWidth: 1,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 10,
        marginTop: 20,
    }

})