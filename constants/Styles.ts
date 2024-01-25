import { StyleSheet } from "react-native";
import Colors from '@/constants/Colors';

export const defaultStyles = StyleSheet.create({
    
   backgroundImage:{
    flex: 1,
    resizeMode: 'stretch', 
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    alignItems:"center",
    
    
   },
   text:{
        color:"white",
        fontWeight:'bold',
        fontSize:48,
        textAlign:'center',
       marginTop:550
        

   },
   text2:{
    color:"#FCFCFC",
    fontWeight:'normal',
    fontSize:18,
    marginBottom:20
   
    
},
btn:{
    backgroundColor: Colors.primary,
    height: 50,
    width:240,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:5
},
btnText: {
    color: '#fff',
    fontSize: 16,
    fontFamily: 'SpaceMono',
  },
inputField:{
    height:50,
    width:380,
    borderBottomWidth:1,
    paddingBottom:0,
    fontSize:16,
    borderBottomColor:'#E2E2E2',
    fontWeight:'500',
    color:'black',

}
})
