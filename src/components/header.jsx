import { StyleSheet, Text, View } from 'react-native';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Status Saver</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:"#075E54",
        height:100
    },
    title:{
        color:"white",
        padding:10,
        marginTop:30,
        fontSize:24,
        fontWeight:"800"
    }
})