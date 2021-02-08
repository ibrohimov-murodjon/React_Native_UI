import * as React from 'react';
import { StyleSheet, View, Text, Image,} from 'react-native';
import { Card, Input, ListItem, Button, Icon } from 'react-native-elements';
import styled from 'styled-components/native';

const Members = [
    {   id:1,
        img: require('./assets/team2.jpg'),
        name:'John Smilga',
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta quibusdam animi sapiente pariatur ducimus ullam praesentium perspiciatis, ipsum quae dolorem, dignissimos unde similique beatae! Perferendis eum expedita consequatur enim.',
    },
    {   id:2,
        img: require('./assets/team3.jpg'),
        name:'Mark Lee',
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta quibusdam animi sapiente pariatur ducimus ullam praesentium perspiciatis, ipsum quae dolorem, dignissimos unde similique beatae! Perferendis eum expedita consequatur enim.',
    },
    {   id:3,
        img: require('./assets/team4.jpg'),
        name:'Peter Kiran',
        about:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque soluta quibusdam animi sapiente pariatur ducimus ullam praesentium perspiciatis, ipsum quae dolorem, dignissimos unde similique beatae! Perferendis eum expedita consequatur enim.',
    },
]

export default function App() {
    return (
        <View style={styles.container}>
            <Text style={{color:'black', fontSize:30, letterSpacing:2, marginTop:15}}>ABOUT US</Text>
            <Diveder /> 
              {
                Members.map((u, id) => {
                  return (
                    <Card containerStyle={{borderRadius:12, backgroundColor:'#B4C8BB', marginBottom:10}} key={id}>
                    <View style={styles.user}>
                      <Image
                        style={styles.image}
                        resizeMode="cover"
                        source={{ uri: u.img }}
                      /> <br/>
                       <Text style={styles.name}>{u.name.toUpperCase()}</Text> <br/>
                      <View style={styles.text}>
                       <Text style={styles.about}><i>{u.about}</i></Text>
                      </View>
                    </View>
                    </Card>
                  );
                })
              }
        </View>
        );
    }
    
  const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        alignItems:'center',
        flex:1,
        backgroundColor: '#DBDBDB',
    },
    user:{
     alignItems:'center',
    },
    image:{
        width:140,
        height:140,
        borderRadius:100,
        display:'block',
        marginLeft:'auto',
        marginRight:'auto'
    },
    name:{
        fontSize:20,
        letterSpacing:3,
    },
    text:{
        backgroundColor:'#fff',
        borderRadius:3
    },
    about:{
        marginTop:10,
        marginBottom:10,
        marginRight:25,
        marginLeft:25
    }
});

const Diveder = styled.View`
 border-bottom-color: #eeb462; 
 border-bottom-width: 2px;
 width: 100px;
 margin: 10px 0;
 `;