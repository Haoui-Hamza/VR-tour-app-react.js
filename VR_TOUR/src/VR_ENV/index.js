import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Environment,
  asset,
  Image,
  VrButton,
} from 'react-360';

export default class VR_ENV extends React.Component {
  changeBG(x){
    Environment.setBackgroundImage(asset(`bg${x}.jpg`));
  }
  render() {
    return (
      <View style={{
        width: 1000,
        height: 1100,
        justifyContent: 'center',
        alignItems: 'flex-end',}}
      >
        <View style={styles.box}>
          <VrButton onClick={() => this.changeBG(1)}>                
              <Image style={{width: 100.0, height:80.0 , borderRadius: 10, }} source={{uri: './static_assets/bg1.jpg'   }} />
          </VrButton>
          <VrButton onClick={() => this.changeBG(2)}>                
              <Image style={{width: 100.0, height:80.0 ,borderRadius: 10, }} source={{uri: './static_assets/bg2.jpg'   }} />
          </VrButton>

          <VrButton onClick={() => this.changeBG(3)}>  
              <Image style={{width: 100.0, height:80.0 ,borderRadius: 10, }} source={{uri: './static_assets/bg3.jpg'   }} />
          </VrButton>
        </View>
      </View>
      
    );
  }
};

const styles = StyleSheet.create({
  
  box:{
    display:'flex',
    flexDirection:'row',
    width:600,
    height : 100,
    
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    alignItems:'center',
    justifyContent: 'space-between',
    paddingRight:100,
    paddingLeft:100,
  },
  greetingBox: {
    padding: 0,
    borderRadius: 30,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
});

AppRegistry.registerComponent('VR_ENV', () => VR_ENV);

/*
panel: {
    // Fill the entire surface
    width: 1000,
    height: 100,
    backgroundColor: 'rgba(255, 255, 255, 0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  greetingBox: {
    padding: 20,
    backgroundColor: '#000000',
    borderColor: '#639dda',
    borderWidth: 2,
  },
  greeting: {
    fontSize: 30,
  },
*/