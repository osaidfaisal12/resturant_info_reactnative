import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import yelp from '../api/yelp'

const Detailed = ({route}) => {
  const [result, setResult] = React.useState(null)
  const id = route.params.id
  
  const getResults = async (id) => {
    const response = await yelp.get(`/${id}`)
    setResult(response.data)
  }
  
  React.useEffect(() => {
    getResults(id)
  }, [])

  if(!result) {
    return <Text>Loading...</Text>
  }

  return (
    <View style={styles.mainContainer}>
    <View style={styles.container}>
      <Image source={{uri: "https://www.cnet.com/a/img/resize/69256d2623afcbaa911f08edc45fb2d3f6a8e172/hub/2023/02/03/afedd3ee-671d-4189-bf39-4f312248fb27/gettyimages-1042132904.jpg?auto=webp&fit=crop&height=675&width=1200"}} style={styles.image} />
      <View style={styles.title_price}>
      <Text style={styles.titleStyles}>{result.name}</Text>
      <Text style={styles.titleStyles}>{result.price}</Text>
      </View>
      <Text style={styles.rating_review}>{result.rating} Ratings, {result.review_count} Reviews</Text>
    </View>

    <Text  style={styles.titleStyles}>Categories</Text>
    <View style={styles.box}>{result.categories.map((item, index) => {
      return (
        <Text style={styles.card} key={index}>{item.title}</Text>
      )
    })}</View>
    <View>
      {result.transactions.length > 0 ? <Text  style={styles.titleStyles}>Serving Type</Text> : null}
      <View style={styles.box}>
        {result.transactions.map((item, index) => {
        return(
          <Text style={styles.card} key={index}>{item}</Text>
        )
      })}
      </View>
    </View>
    </View>
  )
}

export default Detailed

const styles = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'#2193b0'
  },
  container:{
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    paddingBottom:40,
    borderBottomRightRadius: 40,
    borderBottomLeftRadius: 40,
    marginBottom:30
  },
  image: {
    width: "100%",
    height:250,
  },
  titleStyles:{
    fontSize:20,
    color: 'white',
    fontWeight:'bold',
    paddingHorizontal:15
  },
  title_price: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical:20
  },
  rating_review: {
    fontSize:16,
    color: 'white',
    paddingHorizontal: 15,
  },
  card:{
    paddingHorizontal:15,
    color:'white',
    padding: 10,
    borderRadius:10,
    backgroundColor: 'rgba(196, 224, 229, 0.3)',
  },
  box:{
    flexDirection: 'row',
    marginLeft: 15,
    gap: 10,
    marginVertical:10    ,
    flexWrap: 'wrap'
  }
})