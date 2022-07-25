import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Button,
  RefreshControl,
  FlatList,
  SectionList
} from 'react-native';


const Item=()=>{
    const [Data,setData]=useState([
        {name : "Item1",
        data : [1]
        },
        {name : "Item2",
        data : [2,3]
        }]);

    const [refreshing, setRefreshing]=useState(false);

const addToItems=()=>{
    console.log("I'm Called");
    let name="";
    let data=[];
    let dlen=Data.length+1;
    name=`Item ${dlen}`;
    for(var i=0;i<dlen;i++)
    {
        data.push(i);
    }
    setData([...Data,{name,data}]);
    console.log(Data.length,dlen);
}
const onRefresh=()=>{
    setRefreshing(true);
    addToItems();
    setRefreshing(false);
}
//for rendering flatList we need to use a fun like this
//no need to map loop also
//simply pass {item,index}
//where item is a array var we defined 
const renderItem=({item})=>{
        //to avoid unique key error we set key={index} in item
       return(
           <>
           <View style={styles.itemstyle} >
                <Text style={styles.textstyle}>{item}</Text>
            </View>
           </>
            
           
            
       );
}
return(
    <SectionList
    style={styles.container}
    sections={Data}
    renderItem={renderItem}
    renderSectionHeader={({ section: { name } }) => (
        <Text style={styles.headerStyle}>{name}</Text>
      )}
    refreshControl={
      <RefreshControl
        refreshing={refreshing}
        colors={["#F00","#0F0","#00F"]}
        onRefresh={onRefresh}
      />
    }
  >
       {/*JSX so use {}*/}
      

    </SectionList>
);
}
const styles = StyleSheet.create({
    headerStyle:{
        color : "black",
        fontSize : 20,
        backgroundColor :"lightgreen"
    },
    container:{
        backgroundColor : "white",
        borderColor: "black",
        borderWidth : 5,
        height:100
    },
      itemstyle:{

          backgroundColor : "green",
          padding : 20,
          borderColor : "black",
          borderWidth : 2
        },
        textstyle:{
            color :"black",
            textAlign:"center",
            textAlignVertical:"center",
            fontSize:15,
            fontWeight:"700"
        }
});


export default Item;