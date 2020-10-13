# VR-tour-app-react.js
add an immersive and interactive views to your React.js applications
# What's this?
in this tutorial you will learn how to add 360 images and VR experiences into your React applications and Place your visitors in the center of the action, ensuring there's something to see and experience at every angle 📐
# Getting Started 💪
we will be using 2 Facebook technologies  ⬇️
 1. React js 
 2. React. 360 (to reander 360 images and VR scenes )
# The Roadmap 🌏
 1. ### Create the VR environment 
    init new react 360 app , learn how to add new components and place them in your vr environment 
 2. ### Integrate the VR app inside reactjs app 
    create our webAPP and style it before integrating the VR environment 
# Create the VR environment   
  ### 1- init new react 360 project
  Before getting started, you'll need to install Node.js on your computer , Once Node has been installed Open a terminal and run the following commands 

    npm install -g react-360-cli
   

After installation, we can use it to generate the initial code for our first project

    react-360 init VR_ENV
    
This creates a new directory called VR_ENV, with all of the files needed to run your project. Enter the directory to view them and run the npm start command 
    
    cd Hello360
    //start the development server
    npm start
To see your project, open your web browser and navigate to http://localhost:8081/index.html .
  
  Congratulations now you have your first webVR app running on your server 💪🥁🥁
### 2- Add Background changer 
**Role : the background changer helps us to move between rooms in our VR Tour app**

**first** let's remove the default code in VR_ENV class at `index.js` and let only one View tag ( every class must contain at least one View tag ) , then add inside of it 3 VrButton components with an Image inside each component **The VrButton is a utility class that detects click-type actions across a variety of input devices** the onClick event must contain the function that will help us to change the background Image (room)
```javascript
  <View style={{
     width: 1000,
     height: 1100,
     justifyContent: 'center',
     alignItems: 'flex-end',}}
  >
        <View style={styles.panel1}>
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
```
     

