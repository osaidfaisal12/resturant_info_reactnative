import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ResultDetails = ({result}) => {
    const truncatedName = result.name.length > 23 ? `${result.name.slice(0,23)}...` : result.name

  return (
    <View style={styles.container}>
        <Image source={{uri: "https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200"}} style={styles.imgStyles} />
      <Text style={styles.titleStyles}>{truncatedName}</Text>
      <Text style={styles.ratingStyles}>{result.rating} Stars, {result.review_count} Reviews</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        marginTop:10,
        marginRight:10,
        backgroundColor: 'rgba(196, 224, 229, 0.3)',
        padding:10,
        borderRadius:20,

    },
    imgStyles:{
        width: 220,
        height:140,
        borderRadius:10
    },
    titleStyles:{
        fontSize:16,
        fontWeight: 'bold',
        color: "white"
    },
    ratingStyles:{
        color:"white"
    }
})

export default ResultDetails
