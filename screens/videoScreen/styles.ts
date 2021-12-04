import {StyleSheet} from "react-native"


const styles = StyleSheet.create({

videoPlayer:{
    width:'100%',
    aspectRatio: 16/ 9,
},

videoInfoContainer: {
    marginHorizontal: 16,
  },

videoTag:{
color:'#0094e5',
fontSize:16
},

  videoTitle:{
    color: "white",
    fontSize: 18,
    fontWeight: "600",
    marginVertical: 10,
  },

  videoSubtitle: {
    color: "gray",
    fontSize: 16,
  },
  actionListContainer:{
      marginVertical: 10,
  },

actionListItem: {
    justifyContent: "space-between",
    alignItems: "center",
    width: 70,
    height: 60,

},

actionText: {
    color: "white",
},

//userinfo


userInfoContainer:{
    flexDirection:'row',
    alignItems: 'center',
    borderColor: '#3d3d3d',
    borderTopWidth: 0.7,
    borderBottomWidth: 0.7,
    paddingVertical: 15,
    marginBottom:10
},

avatar: {
    height: 60,
    width: 60,
    borderRadius:30
},

userInfoTitleContainer: {
    marginHorizontal: 10, 
    padding:10   
    
},


userInfoTitle: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom:5
},

commentUserInfoTitle: {
    color: "white",
    fontSize: 12,
    fontWeight: "bold",
    margin:10,

},

userInfoSubscribers: {
    color:'grey'
},

subscribeButtonContainer:{
   
},

subscribeButton: {
    fontSize: 20,
    color:'red',
    fontWeight:'bold',
    padding:10

},

commentContainer:{
    flexDirection:'row',
    alignItems: 'center',
    marginBottom:10
},

commentAvatar: {
    height:30,
    width:30,
    borderRadius:15
}, 

numberOfComments:{
    color: 'white',
    marginBottom: 10,
    fontSize: 14
}


})


export default styles