import { StyleSheet, Text, View } from 'react-native';
import { colors } from '../../color';

export default function Header() {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Status Saver</Text>
    </View>
  );
}

const styles = StyleSheet.create({
    header:{
        backgroundColor:colors.primaryColor,
        height:100
    },
    title:{
        color:colors.white,
        padding:10,
        marginTop:30,
        fontSize:24,
        fontWeight:"800"
    }
})