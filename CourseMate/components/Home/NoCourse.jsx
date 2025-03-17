import React from 'react';
import {View, Text,Image} from 'react-native';
export default function NoCourse(){
    return(
        <View style={{
            marginTop:40,
            display:'flex',
            alignItems: 'center',
        }}>
            <Image source={require('../../assets/images/nocourse.png')}
                style={{
                    height: 200,
                    width: 200,
                }}
            />
            <Text style={{
                fontFamily: 'outfit-bold',
                fontSize: 25,
                textAlign:'center',
            }}>You Don't Have Any Courses</Text>
        </View>
    )
}